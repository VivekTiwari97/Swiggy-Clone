import { CDN_URL } from "../utils/content";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/redux/cartSlice";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Cartitem = ({ allitem }) => {
  // eslint-disable-next-line react/prop-types
  const { name, price, defaultPrice, description, imageId, id } =
    // eslint-disable-next-line react/prop-types
    allitem.card.info;
  const dispatch = useDispatch();

  const handleOnRemove = (id) => {
    dispatch(removeItem(id));
    toast.error("Item Removed", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div className="Eachh-accordien">
      <div>
        <p style={{ marginLeft: "10px" }}>{name}</p>
        <p style={{ marginLeft: "10px" }}>
          ₹{price ? price / 100 : defaultPrice / 100}
        </p>
        <small>{description}</small>
      </div>
      <div>
        <img src={CDN_URL + imageId} alt="img" />
        <br />
        <button onClick={() => handleOnRemove(id)}>Remove</button>
      </div>
    </div>
  );
};

export default Cartitem;
