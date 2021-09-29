import { useState } from "react";
import "./styles.css";

//creating database of web series
const seriesObject = {
  Nolan: [
    {
      title: "Inception",
      IMDb: "8.2/10"
    },
    {
      title: "Interstellar",
      IMDb: "9.2/10"
    },
    {
      title: "Dark Knight",
      IMDb: "8.5/10"
    }
  ],
  Scorsese: [
    {
      title: "Shutter Island",
      IMDb: "8.3/10"
    },
    {
      title: "Hugo",
      IMDb: "8.8/10"
    },
    {
      title: "Aviator",
      IMDb: "8.9/10"
    }
  ],
  Cameron: [
    {
      title: "Titanic",
      IMDb: "8.7/10"
    },
    {
      title: "Avatar",
      IMDb: "8.0/10"
    },
    {
      title: "Alita",
      IMDb: "9.4/10"
    }
  ]
};

export default function App() {
  //initializing state
  const [selectedGenre, setGenre] = useState("Nolan");

  //function to update the state when click event occurs
  function clickHandler(director) {
    //updating state
    setGenre(director);
  }

  return (
    <div className="app">
      <h1>Popular Movies</h1>
      <p>Select a director to view the most popular movies.</p>
      <div className="button-div">
        {
          /*creating array from object and mapping each 
        element in the array to create buttons*/
          Object.keys(seriesObject).map((director) => (
            <button
              onClick={() => clickHandler(director)}
              style={{
                width: "150px",
                fontSize: "1.5rem",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                margin: "1rem",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "black",
                color: "white"
              }}
            >
              {director}
            </button>
          ))
        }
      </div>

      <div className="list-div">
        {
          //displaying the list of series
          seriesObject[selectedGenre].map((series) => (
            <div
              style={{
                textAlign: "center",
                border: "3px solid black",
                borderRadius: "8px",
                maxWidth: "300px",
                width: "200px",
                padding: "0.5rem 1rem",
                margin: "1rem",
                color: "black",
                marginBottom: "1rem"
              }}
            >
              <h2>{series.title}</h2>
              <h5>{`IMDb : ${series.IMDb}`}</h5>
            </div>
          ))
        }
      </div>
    </div>
  );
}
