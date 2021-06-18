import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import GetPostData from "./components/GetPostData";
import logo from "./logo.svg";
import Gallery from "./components/Gallery";

function App() {
  const [date, setDate] = useState("");
  const [showGallery, setShowGallery] = useState(false);

  const showGalleryHandler = () => {
    setShowGallery(!showGallery);
  };

  return (
    <div className="App">
      <header>
        <div className="container">
          <nav className="d-flex space-between">
            <img src={logo} alt="logo" height="50" />
            <h2 onClick={showGalleryHandler}>
              {showGallery ? "Post of the day" : "Gallery"}
            </h2>
          </nav>
        </div>
      </header>
      <main className="container">
        {showGallery ? (
          <Gallery />
        ) : (
          <>
            <h1>Choose a date to see the shot of the day</h1>
            <Input date={date} setDate={setDate} />
            <GetPostData date={date} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
