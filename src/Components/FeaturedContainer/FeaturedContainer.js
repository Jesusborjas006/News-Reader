import FeaturedArticle from "./FeaturedArticle";
import "./FeaturedContainer.css";
import SideArticle from "./SideArticle";

const FeaturedContainer = (props) => {
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
    return article.props.id === props.featuredNum;
  });

  const sideArticles = props.articles.map((article, index) => (
    <SideArticle
      img={article.urlToImage}
      title={article.title}
      publishedAt={article.publishedAt}
      id={index}
      key={index}
      getSpecificArticle={props.getSpecificArticle}
      toggleForm={props.toggleForm}
    />
  ));

  return (
    <div className="featured-container">
      {final}
      <div className="random-articles-container">
        {sideArticles.splice(5, 3)}
      </div>
    </div>
  );
};

export default FeaturedContainer;
