import { useDispatch, useSelector } from "react-redux";
import { ButtonContainer } from "./styles/Container.styled";
import { IconButton } from "./styles/IconButton.styled";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import JSZipUtils from "jszip-utils";
import { selectPet, unselectPet } from "../redux/actions/petActions";
import { loadingOn, loadingOff } from "../redux/actions/utilityActions";

function ButtonUtility() {
    const allPets = useSelector((state) => state.allPets.pets);
    const selectedPets = useSelector((state) => state.selectedPets);

    const dispatch = useDispatch();

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
        dispatch(loadingOn());

        var zip = new JSZip();
        var zipFilename = "archive.zip";

        selectedPets.forEach(function (currentSelectedPet, index) {
            zip.file(`${index}.jpeg`, urlToPromise(currentSelectedPet.url), {
                base64: true,
            });
        });

        zip.generateAsync({ type: "blob" }).then(function (content) {
            saveAs(content, zipFilename);
            dispatch(loadingOff());
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

    return (
        <ButtonContainer>
            <IconButton bg="#009688" onClick={handleSelectAll}>
                <span>
                    <img src="/select-all.png" alt="Select All" />
                </span>
                <span>Select All</span>
            </IconButton>
            <IconButton bg="#ff1744" onClick={handleUnselectAll}>
                <span>
                    <img src="/clear-selection.png" alt="Clear Selection" />
                </span>
                <span>Clear Selection</span>
            </IconButton>
            {selectedPets && selectedPets.length > 0 && (
                <IconButton onClick={handleDownload}>
                    <span>
                        <img src="/download.png" alt="Download" />
                    </span>
                    <span>Download</span>
                </IconButton>
            )}
        </ButtonContainer>
    );
}

export default ButtonUtility;
