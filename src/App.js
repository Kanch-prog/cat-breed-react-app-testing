import React, { useEffect, useState } from "react";
import placeholderImg from "./images/undraw_playful_cat_re_ac9g.svg";
import './App.css';

function CatDirectory() {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [catImages, setCatImages] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds")
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((json) => {
        setBreeds(json);
      });
  }, []);

  const searchByBreed = () => {
    setIsLoading(true);
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${selectedBreed}&limit=10`)
      .then((response) => {
        if (response.status === 200 || response.ok) {
          return response.json();
        } else {
          setIsLoading(false);
          throw new Error(`HTTP error status: ${response.status}`);
        }
      })
      .then((json) => {
        setIsLoading(false);
        setCatImages(json.map((item) => item.url));
      });
  };

  return (
    <div className="d-flex justify-content-center flex-column text-center">
      <header>
        <h1 className="mt-4 mb-5">Cat Directory 🐱</h1>
      </header>
      <main role="main">
        <div className="d-flex justify-content-center">
          <select
            className="form-select w-25"
            aria-label="Select a breed of cat to display results"
            value={selectedBreed}
            onChange={(event) => setSelectedBreed(event.target.value)}
          >
            <option value="" disabled>
              Select a breed
            </option>
            {breeds.map((breed) => (
              <option key={breed.id} value={breed.id}>
                {breed.name}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="btn btn-info mx-2"
            disabled={!selectedBreed}
            onClick={searchByBreed}
          >
            Search
          </button>
        </div>
        {catImages.length > 0 && !isLoading && (
          <div className="px-5 mx-5 text-end" data-testid="results-count">
            <p className="fs-5">{catImages.length} results</p>
          </div>
        )}
        <div className="mt-5 img-container px-5 mx-5"> {/* Use new class here */}
          {catImages.length === 0 && !isLoading && (
            <img
              src={placeholderImg}
              className="mx-auto d-block mt-4 w-50"
              alt="placeholder"
            />
          )}
          {isLoading && (
            <div className="d-flex align-items-center">
              <p className="h1 me-2">Loading</p>
              <div
                className="spinner-border ms-auto text-info fs-3"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          )}
          {catImages.length > 0 &&
            !isLoading &&
            catImages.map((imgSrc, index) => (
              <img
                key={`${index}-${selectedBreed}`}
                src={imgSrc}
                className="img-thumbnail"
                alt={`${selectedBreed} ${index + 1} of ${catImages.length}`}
              />
          ))}
        </div>
      </main>
    </div>
  );
}

export default CatDirectory;
