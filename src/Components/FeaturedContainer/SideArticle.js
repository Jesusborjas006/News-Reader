import { Link } from "react-router-dom";
import "./FeaturedContainer.css";

const SideArticle = (props) => {
  const date = new Date(props.publishedAt);
  let day = props.publishedAt.split("").slice(8, 10).join("");
  const year = props.publishedAt.split("").slice(0, 4).join("");
  const month = date.toLocaleString("en-US", {
    month: "long",
  });

  if (day.split("")[0] === "0") {
    day = day.split("")[1];
  }

  return (
    <Link
      to={`/articleDetails/${props.id}`}
      onClick={() => {
        props.getSpecificArticle(props.id);
        props.toggleForm();
      }}
    >
      <div className="side-article">
        <img
          className="side-article-img"
          src={props.img}
          alt="Featured aticle"
        />
        <div className="side-article-text">
          <p>{`${month} ${day}, ${year}`}</p>
          <h4 className="side-article-title">{props.title}</h4>
        </div>
      </div>
    </Link>
  );
};

export default SideArticle;
