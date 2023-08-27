import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import axios from "axios";

function BeerDetailsPage() {
    // Get the params:
    const params = useParams();
    // console.log(params)

    // State for the single beer:
    const [singleBeer, setSingleBeer] = useState(null)

    // Create state for the loading process:
    const [isLoading, setIsLoading] = useState(true);
    
    
    // Create the function that gets the info from the API:
    const getData = async () => {
        try {
            const response = await axios.get(
                `https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`
            );
            // console.log(response.data);
            setSingleBeer(response.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect to execute getData when the component is mounted:
    useEffect(() => {
        getData();
    }, []);

    // Create a check clause so we return a loading spinner
    if (isLoading === true) {
        return (
            <div className="spinner-container">
                <BounceLoader color="blanchedalmond" size={100} />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="singleBeer-card">
                <img src={singleBeer.image_url} alt={singleBeer.name} />
                <div className="singleBeer-name">
                    <h2>{singleBeer.name}</h2>
                    <h2>{singleBeer.attenuation_level}</h2>
                </div>
                <div className="singleBeer-tagline">
                    <h3>{singleBeer.tagline}</h3>
                    <h3>{singleBeer.first_brewed}</h3>
                </div>
                <p>{singleBeer.description}</p>
                <p>{singleBeer.contributed_by}</p>
            </div>
        </div>
    );
}

export default BeerDetailsPage;
