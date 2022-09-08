import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
 const [allData, setAllData] = useState([]);
 const [filteredData, setFilteredData] = useState(allData);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
      return data.name.search(value) != -1;
    });
    setFilteredData(result);
  };

  useEffect(() => {
    axios
      .get(`https://akabab.github.io/superhero-api/api/all.json`)
      .then((response) => {
        console.log(response.data);
        setAllData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, []);

  return (
    <div>
      <label>Search:</label>
      <input type="text" onChange={(event) => handleSearch(event)} />
      <div>
        {filteredData.map((value, index) => {
          return (
            <div key={value.id}>
              <div >{value.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataFetching;
