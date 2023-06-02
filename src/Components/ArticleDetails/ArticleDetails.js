import { Link } from "react-router-dom";
import "./ArticleDetails.css";
import notFound from "../../images/image-not-found-scaled.png";

const ArticleDetails = (props) => {
  const articleDisplayed = props.articles.find((article, index) => {
    return index === props.articleNum;
  });

  return (
    <div className="details-container">
      <Link className="back-btn" to="/">
        ⬅ Go Back
      </Link>
      <div className="text-container">
        <p>{articleDisplayed.publishedAt.split("").slice(0, 10).join("")}</p>
        <h3 className="detail-title">{articleDisplayed.title}</h3>
      </div>
      <img
        className="detail-img"
        src={
          !articleDisplayed.urlToImage ? notFound : articleDisplayed.urlToImage
        }
        alt="Poster"
      />
      <div className="text-container source-container">
        <p className="source">
          <span className="red">{articleDisplayed.source.name}</span> -{" "}
          {articleDisplayed.author}
        </p>
      </div>
      <div className="description-container">
        <p>{articleDisplayed.description}</p>
        <p className="content">{articleDisplayed.content}</p>
      </div>
    </div>
  );
};

export default ArticleDetails;
