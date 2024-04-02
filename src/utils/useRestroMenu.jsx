// import React from 'react'
import { useState, useEffect } from "react";

const useRestroMenu = (restroID) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchDeta();
  }, []);

  const fetchDeta = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5821195&lng=77.3266991&restaurantId=" +
          restroID +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const data = await response.json();
      //    console.log(data);
      setResInfo(data.data);
      //    console.log("resinfo",resInfo)
    } catch (error) {
      console.error(error, "Somthing Went Wrong");
    }
  };
  return resInfo;
};

export default useRestroMenu;
