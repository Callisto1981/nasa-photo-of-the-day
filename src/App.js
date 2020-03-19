import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

import styled from "styled-components";
import { Jumbotron } from "reactstrap";
import Card from "./Components/Card";
import Pagination from "./Components/Pagination";

function App() {
  const [data, setData] = useState(false);
  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("an error", error);
      });
  }, []);

  const Container = styled.section`
    .jumbotron {
      background: red;
    }
  `;

  return (
    <Container className="App">
      <Jumbotron>THIS IS THE JUMBOTRON!!</Jumbotron>
      {!data && <p>...LoAdInG iN pRoGrEsS!</p>}
      {data && <Card data={data} />}
      {<Pagination data={data} />}
    </Container>
  );
}

export default App;
