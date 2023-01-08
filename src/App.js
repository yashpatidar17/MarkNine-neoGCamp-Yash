import "./styles.css";
import { useState } from "react";
var CarsObject = {
  Mahindra: [
    {
      name: "XUV 300",
      SafetyRating: "5-Star"
    },
    {
      name: "XUV 700",
      SafetyRating: "4.5-star"
    }
  ],
  Tata: [
    {
      name: "Nexon",
      SafetyRating: "5-star"
    },
    {
      name: "Harrier",
      SafetyRating: "5-star"
    }
  ],
  Hundai: [
    {
      name: "Creta",
      SafetyRating: "5-star"
    },
    {
      name: "i20",
      SafetyRating: "4-star"
    }
  ]
};

export default function App() {
  const [selectedcar, setcar] = useState("Mahindra");

  function clickHandler(cars) {
    setcar(cars);
  }

  return (
    <div className="App">
      <h1>Car Safety Ratings</h1>
      <h2>Select a Car manufacturer to know their cars safety ratings</h2>

      <div>
        {Object.keys(CarsObject).map((cars) => (
          <button
            onClick={() => clickHandler(cars)}
            style={{
              width: "150px",
              fontSize: "1.5rem",
              fontWeight: "600",
              padding: "0.5rem 1rem",
              margin: "0.5rem",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "black",
              color: "white"
            }}
          >
            {cars}
          </button>
        ))}
      </div>

      <div style={{ alignItems: "center" }}>
        {
          //displaying the list of series
          CarsObject[selectedcar].map((car) => (
            <div
              style={{
                textAlign: "center",
                border: "2px solid black",
                borderRadius: "5px",
                maxWidth: "200px",
                width: "1000px",
                padding: "0.5rem 1rem",
                margin: "2rem",
                color: "black",
                marginBottom: "2rem"
              }}
            >
              <h2>{car.name}</h2>
              <h5>{`Rating : ${car.SafetyRating}`}</h5>
            </div>
          ))
        }
      </div>
    </div>
  );
}
