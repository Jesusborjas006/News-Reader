import FeaturedArticle from "./FeaturedArticle";
import "./FeaturedContainer.css";

const FeaturedContainer = (props) => {
  return (
    <div className="featured-container">
      <FeaturedArticle articles={props.articles} />
      <div className="random-articles-container">
        <h3>Random Article</h3>
      </div>
    </div>
  );
};

export default FeaturedContainer;
