import { Link } from "react-router-dom";
import "./Article.css";
import notFound from "../../images/image-not-found-scaled.png";

const Article = (props) => {
  console.log(props.published.split("").slice(0, 10).join(""))
  return (
    <div className="article-card">
      <Link to={`/articleDetails/${props.id}`}>
        <img
          className="article-img"
          src={!props.img ? notFound : props.img}
          alt="Article shot"
          onClick={() => props.getSpecificArticle(props.id)}
        />
      </Link>
      <p className="published">{props.published.split("").slice(0, 10).join("")}</p>
      <Link to={`/articleDetails/${props.id}`}>
        <h2
          onClick={() => props.getSpecificArticle(props.id)}
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
