/* eslint-disable react/prop-types */

import { CDN_URL } from "../utils/content";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/redux/cartSlice";
import { toast } from "react-toastify";


const ItemList = ({item}) => {
  // console.log(item);
  const dispatch = useDispatch();

  const handleOnAdd = (allitem) => {
    dispatch(addItem(allitem));
    toast.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="mainn">
      {item?.map((allitem) => (
        <div key={allitem.card.info.id} className="Each-accordien">
          <div>
            <p style={{ marginLeft: "10px" }}>{allitem.card.info.name}</p>
            <p style={{ marginLeft: "10px" }}>
              ₹
              {allitem.card.info.price
                ? allitem.card.info.price / 100
                : allitem.card.info.defaultPrice / 100}
            </p>
            <small>{allitem.card.info.description}</small>
          </div>
          <div>
            <img src={CDN_URL + allitem.card.info.imageId} alt="img" />
            <br />
            <button onClick={() => handleOnAdd(allitem)}>ADD</button>
            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
