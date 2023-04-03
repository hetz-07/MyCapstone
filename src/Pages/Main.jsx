import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Main() {
  const [genres, setgenre] = useState({
    genre1: "Default",
    genre2: "Default"
  });
  const handleChange = (e) => {
    setgenre((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  function handleClick() {
    navigate("/searchresult");
  }


  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>

            <img src={"./GenreIMG/" + genres.genre1 + ".jpg"} Alt='myimg' height='400px' width='400px' />
          </Col>
          <Col>
            {/* <img src={b} alt="" /> */}
            <img src={"./GenreIMG/" + genres.genre2 + ".jpg"} Alt='myimg' height='400px' width='400px' />
            <br />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col>
            <select className="drop" name="genre1" onChange={handleChange}>
              <option>Select Genre..</option>
              <option >Comedy</option>
              <option >Romance</option>
              <option >Horror</option>
              <option >Thriller</option>
              <option >Drama</option>
              <option >Action</option>
              <option >Fantasy</option>
              <option >Sci-fi</option>
              <option >Crime</option>
              <option >Mystery</option>
            </select>
          </Col>
          <Col></Col>
          <Col>
            <select className="drop" name="genre2" onChange={handleChange}>
              <option>Select Genre..</option>

              <option >Comedy</option>
              <option >Romance</option>
              <option >Horror</option>
              <option >Thriller</option>
              <option >Drama</option>
              <option >Action</option>
              <option >Fantasy</option>
              <option >Sci-fi</option>
              <option >Crime</option>
              <option >Mystery</option>
            </select>
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col></Col>
          <Col>
            <button className="custom-btn btn-1" onClick={handleClick}>
              Submit
            </button>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default Main;
