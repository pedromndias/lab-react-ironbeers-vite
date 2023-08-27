import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { BounceLoader } from "react-spinners"
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
    // Invoke useNavigate():
  const navigate = useNavigate()

  // Create state for the inputs:
  const [nameInput, setNameInput] = useState("")
  const [taglineInput, setTaglineInput] = useState("")
  const [descriptionInput, setDescriptionInput] = useState("")
  const [firstBrewedInput, setFirstBrewedInput] = useState("")
  const [brewerTipsInput, setBrewerTipsInput] = useState("")
  const [attenuationLevelInput, setAttenuationLevelInput] = useState(0)
  const [contributedByInput, setContributedByInput] = useState("")

  // Create state for the loading process:
  const [isLoading, setIsLoading] = useState(false)

  // Create a handler to manage the form submit (when pressing the button)
  const handleSubmit = async (e) => {
    e.preventDefault()

    // Change isLoading to true (to show the client a spinner until we get the data):
    setIsLoading(true)

    try {
      const newBeer = {
        name: nameInput,
        tagline: taglineInput,
        description: descriptionInput,
        first_brewed: firstBrewedInput,
        brewers_tips: brewerTipsInput,
        attenuation_level: attenuationLevelInput,
        contributed_by: contributedByInput
      }
      // console.log(newBeer)
      // Use axios to make a post to send the data:
      const response = await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
      console.log(response)
      // If the beer is correctly created we can redirect to /beers:
      navigate("/beers")
    } catch (error) {
      console.log(error)
    }
  }

  // Create a check clause so we return a loading spinner
  if (isLoading === true) {
    return (
      <div className="spinner-container">
        <BounceLoader color="blanchedalmond" size={100} />
      </div>
    )
  }

  return (
    <div>
        <Navbar />
        <h3>Add a new beer</h3>
        <form onSubmit={handleSubmit} >
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
          />
          <br />
          <label htmlFor="tagline">Tagline </label>
          <input
            type="text"
            name="tagline"
            onChange={(e) => setTaglineInput(e.target.value)}
            value={taglineInput}
          />
          <br />
          <label htmlFor="description">Description </label>
          <textarea
            type="text"
            name="description"
            onChange={(e) => setDescriptionInput(e.target.value)}
            value={descriptionInput}
          />
          <br />
          <label htmlFor="first_brewed">First Brewed </label>
          <input
            type="text"
            name="first_brewed"
            onChange={(e) => setFirstBrewedInput(e.target.value)}
            value={firstBrewedInput}
          />
          <br />
          <label htmlFor="brewers_tips">Brewers Tips</label>
          <input
            type="text"
            name="brewers_tips"
            onChange={(e) => setBrewerTipsInput(e.target.value)}
            value={brewerTipsInput}
          />
          <br />
          <label htmlFor="attenuation_level">Attenuation Level</label>
          <input
            type="text"
            name="attenuation_level"
            onChange={(e) => setAttenuationLevelInput(e.target.value)}
            value={attenuationLevelInput}
          />
          <br />
          <label htmlFor="contributed_by">Contributed By</label>
          <input
            type="text"
            name="contributed_by"
            onChange={(e) => setContributedByInput(e.target.value)}
            value={contributedByInput}
          />
          <br />

          {/* Make the button disabled if isLoading is true: */}
          <button type="submit" disabled={isLoading}>Add Beer</button>
        </form>

    </div>
  )
}

export default AddBeerPage;
