import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setPets,
    searchPets,
    selectPet,
    unselectPet,
} from "../redux/actions/petActions";
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
    const pets = useSelector((state) => state.allPets.filteredPets);
    const selectedPets = useSelector((state) => state.selectedPets);

    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(API_URL);
                dispatch(setPets(data));
            } catch (error) {
                dispatch(setPets([]));
                console.log(error);
            }
        }

        fetchData();
    }, [dispatch]);

    function handleCheckbox(event) {
        const key = event.target.value;

        if (!event.target.checked) {
            dispatch(unselectPet(key));
            return;
        }

        const url = event.target.getAttribute("data-url");
        const title = event.target.getAttribute("data-title");

        const selectedPet = {
            key,
            url,
            title,
        };

        dispatch(selectPet(selectedPet));
    }

    function isChecked(petId) {
        if (selectedPets.length < 1) {
            return false;
        }

        for (const currentSelectedPet of selectedPets) {
            if (currentSelectedPet.key === petId) {
                return true;
            }
        }

        return false;
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
                            <label
                                htmlFor={`checkbox-${currentIndex}-${currentPet.url}`}
                            >
                                <Checkbox
                                    id={`checkbox-${currentIndex}-${currentPet.url}`}
                                    value={`checkbox-${currentIndex}-${currentPet.url}`}
                                    data-url={currentPet.url}
                                    data-title={currentPet.title}
                                    onChange={handleCheckbox}
                                    checked={
                                        isChecked(
                                            `checkbox-${currentIndex}-${currentPet.url}`
                                        )
                                            ? "checked"
                                            : ""
                                    }
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
