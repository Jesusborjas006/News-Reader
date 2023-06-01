import { Link } from "react-router-dom";
import "./Article.css";

const Article = (props) => {
  return (
    <div className="article-card">
      <Link to={`/articleDetails/${props.id}`}>
        <img
          className="article-img"
          src={props.img}
          alt="Article shot"
          onClick={() => props.getSpecificArticle(props.id)}
        />
      </Link>
      <p className="published">{props.published}</p>
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
