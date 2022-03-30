import { useEffect, useState } from "react";
import axios from "axios";
import { Container, PetContainer } from "./styles/Container.styled";
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

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(API_URL);
                setPetList(data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    function handleCheckbox(event) {
        console.log(event);
        console.log(event.target.checked);
        console.log(event.target.value);
    }

    return (
        <Container>
            <div>
                <label htmlFor="search-pet" aria-label="Search Pet"></label>
                <input type="text" placeholder="Search Pet" id="search-pet" />
            </div>

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
