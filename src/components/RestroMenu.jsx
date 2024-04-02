import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestroCategory from "./RestroCategory";
import TopImeges from "./TopImeges";

const RestroMenu = () => {
  const { restroID } = useParams();
  const resInfo = useRestroMenu(restroID);

  if (resInfo === null) return <MenuShimmer />;
  console.log(resInfo);

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    locality,
    totalRatingsString,
  } = resInfo?.cards[2]?.card?.card?.info || null
  const { lastMileTravelString } = resInfo?.cards[2]?.card?.card?.info?.sla || null
    const { text } =
    resInfo?.cards[0]?.card?.card || null;
  const { carousel } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || null

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="mainDiv">
      <div className="menuu">
        <div className="heading_container">
          <h3> {name}</h3>
          <small>{cuisines.join(" ,")}</small> <br />
          <small>
            {locality}, {lastMileTravelString}
          </small>
          <br /> <br />
          <p>🕙{text}</p>
        </div>

        <div className="rating">
          <h4 style={{ color: "green" }}>⭐{avgRating}</h4>
          <hr />
          <small>{totalRatingsString}</small>
        </div>
      </div>
      <br />
      <br />

      {carousel?.map((item) => item) && <h3>Top Pic</h3>}
      <div className="Top_picture">
        {carousel?.map((topPick) => (
          <TopImeges key={topPick?.bannerId} Allpic={topPick} />
        ))}
      </div>
      {categories?.map((c) => (
        <RestroCategory key={c?.card?.card?.title} deta={c?.card?.card} />
      ))}
    </div>
  );
};

export default RestroMenu;
