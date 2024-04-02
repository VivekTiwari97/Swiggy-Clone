import{ useEffect } from "react";
import Restrocard from "./Restrocard";
import { useState } from "react";
import { Link } from "react-router-dom";
import ShimerUI from "./ShimerUI";
import Searchplate from "./Searchplate";
import {toast} from 'react-toastify'

const Search = () => {
  const [searchitem, setSearchitem] = useState(0);
  const [input, setInput] = useState([]);
  const [gotRestorent, setGotrestorent] = useState([]);
  const [plateitem, setPlateItem] = useState([]);

  useEffect(() => {}, [plateitem]);

  useEffect(() => {
    fetchItem();
  }, []);

  console.log("gotRestorent", gotRestorent);

  const fetchItem = async () => {
    const responseDeta = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5821195&lng=77.3266991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const finalDeta = await responseDeta.json();
    setSearchitem(
      finalDeta?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setPlateItem(finalDeta?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  };
  return searchitem === 0 ? (
    <ShimerUI />
  ) : (
    <div className="container">
       <div className="body">
      <div className="search">
        <span>
          <input
            type="text"
            className="input"
            placeholder="Search Items...."
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </span>
        <span>
          <button
            className="submit"
            onClick={() => {
              if (input.length > 0) {
                const findrestrorent = searchitem.filter(
                  (restro) =>
                    restro.info.name
                      .toLowerCase()
                      .includes(input.toLowerCase()) ||
                    restro?.info?.cuisines
                      .map((m) => m.toLowerCase())
                      .includes(input.toLowerCase())
                );
                if(findrestrorent.length===0){
                  toast.warn("No item found")
                }else{setGotrestorent(findrestrorent)}
                
              } else {
                toast.error("Please Enter item");
              }
            }}
          >
            Search
          </button>
        </span>
      </div>
      <div className="Res-container">
        {gotRestorent?.map((items) => (
          <Link key={items.info.id} to={"/Restorent/" + items.info.id}>
            <Restrocard resdetail={items} />
          </Link>
        ))}
      </div>

      {gotRestorent?.length <= 0 && (
        <div>
          <h3 style={{ fontWeight: "1500px" }}>Popular Cuisines</h3>
          <br />
          <div className="plateCrousel">
            {plateitem.map((plates) => (
              <Searchplate key={plates.id} allPlates={plates} />
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
   
  );
};

export default Search;
