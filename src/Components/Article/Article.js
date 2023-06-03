import { Link } from "react-router-dom";
import "./Article.css";
import notFound from "../../images/image-not-found-scaled.png";

const Article = (props) => {
  const date = new Date(props.published);
  let day = props.published.split("").slice(8, 10).join("");
  const year = props.published.split("").slice(0, 4).join("");
  const month = date.toLocaleString("en-US", {
    month: "long",
  });

  if (day.split("")[0] === "0") {
    day = day.split("")[1];
  }

  return (
    <div className="article-card">
      <Link to={`/articleDetails/${props.id}`}>
        <img
          className="article-img"
          src={!props.img ? notFound : props.img}
          alt="Article shot"
          onClick={() => {
            props.getSpecificArticle(props.id);
            props.toggleForm();
          }}
        />
      </Link>
      <p className="published">{`${month} ${day}, ${year}`}</p>
      <Link to={`/articleDetails/${props.id}`}>
        <h2
          onClick={() => {
            props.getSpecificArticle(props.id);
            props.toggleForm();
          }}
          className="title"
        >
          {props.title}
        </h2>
      </Link>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Article;
