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
    ButtonContainer,
} from "./styles/Container.styled";
import {
    Card,
    ImageContainer,
    Image,
    CardBody,
    Checkbox,
} from "./styles/Card.styled";
import { IconButton } from "./styles/IconButton.styled";

import { saveAs } from "file-saver";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";

const API_URL = "http://eulerity-hackathon.appspot.com/pets";

function Pets() {
    const pets = useSelector((state) => state.allPets.filteredPets);
    const allPets = useSelector((state) => state.allPets.pets);
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

    function handleSelectAll() {
        for (const currentPet of allPets) {
            const petId = `checkbox-${currentPet.url}-${currentPet.title}-${currentPet.description}`;

            if (!isChecked(petId)) {
                const selectedPet = {
                    key: petId,
                    url: currentPet.url,
                    title: currentPet.title,
                };

                dispatch(selectPet(selectedPet));
            }
        }
    }
    function handleUnselectAll() {
        for (const currentPet of selectedPets) {
            dispatch(unselectPet(currentPet.key));
        }
    }

    function handleDownload() {
        var zip = new JSZip();
        var zipFilename = "archive.zip";

        selectedPets.forEach(function (currentSelectedPet, index) {
            zip.file(`${index}.jpeg`, urlToPromise(currentSelectedPet.url), {
                base64: true,
            });
        });

        zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, zipFilename);
        });
    }

    function urlToPromise(url) {
        return new Promise(function (resolve, reject) {
            JSZipUtils.getBinaryContent(url, function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

    if (!pets || pets.length < 1) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <Container>
            <ButtonContainer>
                <IconButton bg="#009688">
                    <span>
                        <img src="/select-all.png" alt="Select All" />
                    </span>
                    <span>Select All</span>
                </IconButton>
                <IconButton bg="#ff1744">
                    <span>
                        <img src="/clear-selection.png" alt="Clear Selection" />
                    </span>
                    <span>Clear Selection</span>
                </IconButton>
                <IconButton>
                    <span>
                        <img src="/download.png" alt="Download" />
                    </span>
                    <span>Download</span>
                </IconButton>
            </ButtonContainer>
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
                    pets.map((currentPet, currentIndex) => {
                        const petId = `checkbox-${currentPet.url}-${currentPet.title}-${currentPet.description}`;
                        return (
                            <Card key={currentIndex}>
                                <label htmlFor={petId}>
                                    <Checkbox
                                        id={petId}
                                        value={petId}
                                        data-url={currentPet.url}
                                        data-title={currentPet.title}
                                        onChange={handleCheckbox}
                                        checked={
                                            isChecked(petId) ? "checked" : ""
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
                        );
                    })}
            </PetContainer>
        </Container>
    );
}

export default Pets;
