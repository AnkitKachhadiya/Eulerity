import { useEffect, useState } from "react";
import axios from "axios";

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

    return (
        <>
            <div>
                <label htmlFor="search-pet" aria-label="Search Pet"></label>
                <input type="text" placeholder="Search Pet" id="search-pet" />
            </div>

            <div>
                {petList &&
                    petList.length > 0 &&
                    petList.map((currentPet, currentIndex) => (
                        <div key={currentIndex}>
                            <img
                                src={currentPet.url}
                                alt={currentPet.title}
                                width="150"
                                height="150"
                            />
                            <p>{currentPet.title}</p>
                            <p>{currentPet.description}</p>
                        </div>
                    ))}
            </div>
        </>
    );
}

export default Pets;
