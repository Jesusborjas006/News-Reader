import "./FeaturedContainer.css";

const FeaturedArticle = (props) => {
  return (
    <div className="featured-card">
      {props.articles.length ? (
        <>
          <img
            className="featured-img"
            src={props.articles[9].urlToImage}
            alt="Featured article"
          />
          <h3 className="featured-heading">Featured Story</h3>
          <div className="featured-text">
            <p className="featured-title">{props.articles[9].title}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FeaturedArticle;
