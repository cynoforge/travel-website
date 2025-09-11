import "./App.css";
import { useState, useEffect } from "react";
import img1 from "./assets/2.jpg"
import img2 from "./assets/3.jpg";
import img3 from "./assets/4.jpg";
import img4 from "./assets/5.jpg";
import img5 from "./assets/6.jpg";
import img6 from "./assets/7.jpg";
import img7 from "./assets/8.jpg";

function Background() {

  // create array of images
  const images = [img1, img2, img3, img4, img5, img6, img7];

  // state to keep track of current image index
  // currentImageIndex=>current index of the img
  // setCurrentImageIndex=>function to update the current index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // change img every 3 seconds
  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000)//3000ms=3sec

    return () => clearInterval(Interval);//cleanup function to clear interval on unmount
  }, [])//empty dependency array to run only once on mount

  // function for About Us Button
  const aboutUsPage = () => {
    window.location.href = "/AboutUs";
  };


  return (

    <div className="titleArea md:titleArea sm:titleArea lg:titleArea md-flex md:justify-center md:items-center" >
      <div className="cardLeft">
        <div className="cardInnerLeft w-full md:w-1/2 lg:w-1/2 sm:w-full flex flex-col justify-center  ">
          <h2 className="h2 md:h2 lg:h2 ms:h2">Discover Your Next Adventure</h2>
          <h5 className="h5 md:h5 lg:h5 sm:h5">Plan your perfect getaway with curated itineraries, insider tips, and expert travel guides to make every journey seamless and exciting.</h5>
          <button className="bookButton md:bookButton lg:bookButton sm:bookButton">Explore Trip</button>
          <button className="learnButton md:learnButton lg:learnButton sm:learnButton" onClick={aboutUsPage}>Learn More</button>
        </div>
        <div className="cardInnerRight md:cardInnerRight w-full overflow-hidden object-cover transition-opacity duration-1000 ease-in-out">
          <img
            src={images[currentImageIndex]}
            alt="Travel"
            className="w-full h-full"
          />

        </div>

      </div>

    </div >

  );
}

export default Background;
