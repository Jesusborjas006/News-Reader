import { Link } from "react-router-dom";
import "./ArticleDetails.css";
import notFound from "../../images/image-not-found-scaled.png";

const ArticleDetails = (props) => {
  const articleDisplayed = props.articles.find((article, index) => {
    return index === props.articleNum;
  });

  const date = new Date(articleDisplayed.publishedAt);
  let day = articleDisplayed.publishedAt.split("").slice(8, 10).join("");
  const year = articleDisplayed.publishedAt.split("").slice(0, 4).join("");
  const month = date.toLocaleString("en-US", {
    month: "long",
  });

  if (day.split("")[0] === "0") {
    day = day.split("")[1];
  }

  return (
    <div className="details-container">
      <Link className="back-btn" to="/" onClick={() => props.toggleForm()}>
        ⬅ Go Back
      </Link>
      <div className="text-container">
        <p>{`${month} ${day}, ${year}`}</p>
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
