import FeaturedArticle from "./FeaturedArticle";
import "./FeaturedContainer.css";

const FeaturedContainer = (props) => {
  const randomNumber = Math.floor(Math.random() * 20) + 1;

  const featuredCard = props.articles.map((article, index) => (
    <FeaturedArticle
      img={article.urlToImage}
      title={article.title}
      description={article.description}
      published={article.publishedAt}
      id={index}
      key={index}
      getSpecificArticle={props.getSpecificArticle}
      toggleForm={props.toggleForm}
    />
  ));

  const final = featuredCard.find((article) => {
    return article.props.id === randomNumber;
  });

  return (
    <div className="featured-container">
      {final}
      <div className="random-articles-container">
        <h3>Random Article</h3>
      </div>
    </div>
  );
};

export default FeaturedContainer;
