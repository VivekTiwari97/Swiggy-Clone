/* eslint-disable react/no-unescaped-entities */
import Restrocard from "./Restrocard";
import { useState, useEffect } from "react";
import ShimerUI from "./ShimerUI";
import ImageCrousel from "./ImageCrousel";
import PlateCrausel from "./PlateCrausel";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import Footer from "./Footer";

const Body = () => {
  const [body, setBody] = useState(0);
  const [filterrestro, setFilterrestro] = useState([]);
  // const [text, setText] = useState([]);
  const [imagecard, setImagecard] = useState([]);
  const [platecrousel, setPlateCrousel] = useState([]);

  useEffect(() => {
    fetchDeta();
  }, []);
  // console.log(filterrestro);

  const fetchDeta = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data1 = await response.json();
      console.log(data1);
      setBody(
        data1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log();
      setFilterrestro(
        data1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setPlateCrousel(data1?.data?.cards[0]?.card?.card?.imageGridCards?.info);
      setImagecard(
        data1?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log("Error", error);
    }
  };

  const internetStatus = useInternetStatus();

  if (internetStatus === false)
    return (
      <div className="offLine_img">
        <img src="assets/internet.svg" alt="svg" width={600} />
      </div>
    );

  return body === 0 ? (
    <ShimerUI />
  ) : (
    <div>
      <div className="container">
        <div className="body">
          <br />
          <br />
          <h2 className="h2">What's on your mind?</h2>
          <div className="plateCrousel">
            {platecrousel.map((plates) => (
              // eslint-disable-next-line react/jsx-key
              <PlateCrausel id={plates.id} allPlates={plates} />
            ))}
          </div>
          <br /> <br />
          <hr className="HR" />
          <h2 className="h2">Best offer for you</h2>
          <div className="Imagecrousel">
            {imagecard.map((image) => (
              <Link key={image.info.id} to={"/Restorent/" + image.info.id}>
                <ImageCrousel imgdetail={image} />
              </Link>
            ))}
          </div>
          <h2 className="h2"style={{marginBottom: "20px"}}>
            Restaurants with online food delivery in Noida 1
          </h2>
          <div className="Res-container">
            {filterrestro.map((item) => (
              <Link key={item.info.id} to={"/Restorent/" + item.info.id}>
                <Restrocard resdetail={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Body;
