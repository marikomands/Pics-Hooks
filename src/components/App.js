import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

const App = () => {
  const [results, setResults] = useState([]);
  console.log("🚀 ~ App ~ results", results);

  const [searchTerm, setSearchTerm] = useState("");
  // console.log("🚀 ~ App ~ searchTerm", searchTerm);

  const [error, setError] = useState(false);
  console.log("🚀 ~ App ~ error", error);

  const fetchImages = async () => {
    try {
      setError(false);
      const { data } = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: { query: searchTerm },
          // params: { query: term},
          headers: {
            Authorization:
              "Client-ID lk1sHfESga4bPGg0Xt0EbcMzx1IcuYw0uThfuucVPmg",
          },
        }
      );

      setResults(data.results);
    } catch (error) {
      console.log("🚀 ~ onSearchSubmit ~ error", error);
      setResults(null);
      setError(true);
      console.log("🚀 ~ fetchImages ~ setError", setError);
    }
  };

  // Will run if 'searchTerm' changes
  useEffect(() => {
    if (searchTerm) {
      fetchImages();
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar onSubmit={setSearchTerm} />
      {/* <SearchBar onSubmit={fetchImages} /> */}
      {error ? <div>Something went wrong!</div> : null}
      {results?.length === 0 ? <div>No Results!</div> : null}
      {results?.length > 0 ? <div>{results.length} Results!</div> : null}
      <ImageList images={results} />
    </div>
  );
};

export default App;
