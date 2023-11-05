
import React, { useState, useEffect } from 'react';



const LiveSearch = (props) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`/search?term=${term}`).then(setResults);
  }, [term]);

  return (
    <>
      <SearchBar value={term} onChange={setTerm} />
      <Results results={results} />
    </>
  );
}

export default LiveSearch