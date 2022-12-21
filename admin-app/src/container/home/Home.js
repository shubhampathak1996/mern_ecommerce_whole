import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="main-section ">
        <Container className="text-center">
          <h2>Welcome To Admin Dashboard</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            non obcaecati aspernatur quos vero. Illum aspernatur doloribus
            fugiat ea odio quidem sunt pariatur, voluptates odit, tempora
            sapiente neque maxime nam!
          </p>
          <Link to="/" className="btn btn-danger">
            Sign In
          </Link>
        </Container>
      </div>
    </>
  );
}

export default Home;
