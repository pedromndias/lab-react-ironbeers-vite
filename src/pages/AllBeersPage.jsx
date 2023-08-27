import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import { BounceLoader } from "react-spinners";
import axios from "axios";
import { Link} from "react-router-dom";

function AllBeersPage() {
    // Create state to store the beers info (starts empty):
    const [allBeers, setAllBeers] = useState(null);
    // Create state for the loading process:
    const [isLoading, setIsLoading] = useState(true);

    // Create the function that gets the info from the API:
    const getData = async () => {
        try {
            const response = await axios.get(
                "https://ih-beers-api2.herokuapp.com/beers"
            );
            // console.log(response.data);
            // Set state with the data and change the isLoading to false:
            setAllBeers(response.data);
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
            <h1>All Beers</h1>
        {allBeers.map((eachBeer) => {
            const {image_url, name, tagline, contributed_by, _id} = eachBeer
            return (
                <Link to={`/beers/${_id}`}className="beer-card" key={_id}>
                    <img src={image_url} alt={name} />
                    <div>
                        <h2>{name}</h2>
                        <h3>{tagline}</h3>
                        <h4>Created by: {contributed_by}</h4>
                        
                    </div>
                    </Link>
            )
        })}
        </div>

    )
}

export default AllBeersPage;
