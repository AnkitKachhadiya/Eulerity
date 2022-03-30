import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPets, searchPets } from "../redux/actions/petActions";
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
    const [urls, setUrls] = useState([]);
    const [dataList, setDataList] = useState();

    const pets = useSelector((state) => state.allPets.filteredPets);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(API_URL);
                setDataList(data);
                dispatch(setPets(data));
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [dispatch]);

    function handleCheckbox(event) {
        urls.push(event.target.value);

        setUrls(urls);
        console.log(urls);
    }

    return (
        <Container>
            <SearchContainer>
                <label htmlFor="search-pet" aria-label="Search pet"></label>
                <input
                    type="text"
                    placeholder="Search"
                    id="search-pet"
                    onChange={(event) =>
                        dispatch(searchPets(event.target.value))
                    }
                />
            </SearchContainer>

            <PetContainer>
                {pets &&
                    pets.length > 0 &&
                    pets.map((currentPet, currentIndex) => (
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
