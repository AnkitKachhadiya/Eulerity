import { useEffect, useState } from "react";
import axios from "axios";
import {
    Container,
    PetContainer,
    SearchContainer,
} from "./styles/Container.styled";
import {
    Card,
    ImageContainer,
    Image,
    CardBody,
    Checkbox,
} from "./styles/Card.styled";

const API_URL = "http://eulerity-hackathon.appspot.com/pets";

function Pets() {
    const [petList, setPetList] = useState();
    const [urls, setUrls] = useState([]);
    const [dataList, setDataList] = useState();

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(API_URL);
                setPetList(data);
                setDataList(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    function handleCheckbox(event) {
        urls.push(event.target.value);

        setUrls(urls);
        console.log(urls);
    }

    function handleSearch(event) {
        const query = event.target.value;

        const searchData = dataList.filter((pet) => {
            if (query.length < 1) {
                return pet;
            }

            if (
                pet.title.toLowerCase().includes(query.toLowerCase()) ||
                pet.description.toLowerCase().includes(query.toLowerCase())
            ) {
                return pet;
            }

            return false;
        });

        setPetList(searchData);
    }

    return (
        <Container>
            <SearchContainer>
                <label htmlFor="search-pet" aria-label="Search pet"></label>
                <input
                    type="text"
                    placeholder="Search"
                    id="search-pet"
                    onChange={handleSearch}
                />
            </SearchContainer>

            <PetContainer>
                {petList &&
                    petList.length > 0 &&
                    petList.map((currentPet, currentIndex) => (
                        <Card key={currentIndex}>
                            <label htmlFor={`checkbox-${currentIndex}`}>
                                <Checkbox
                                    id={`checkbox-${currentIndex}`}
                                    value={currentPet.url}
                                    onChange={handleCheckbox}
                                />

                                <ImageContainer>
                                    <Image
                                        src={currentPet.url}
                                        alt={currentPet.title}
                                    />
                                </ImageContainer>

                                <CardBody>
                                    <p>
                                        <b>{currentPet.title}</b>
                                    </p>
                                    <p>{currentPet.description}</p>
                                </CardBody>
                            </label>
                        </Card>
                    ))}
            </PetContainer>
        </Container>
    );
}

export default Pets;
