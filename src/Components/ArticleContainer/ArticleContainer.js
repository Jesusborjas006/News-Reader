import Article from "../Article/Article";
import "./ArticleContainer.css";

const ArticleContainer = (props) => {
  const articleCards = props.articles.map((article, index) => (
    <Article
      img={article.urlToImage}
      title={article.title}
      description={article.description}
      published={article.publishedAt}
      id={index}
      key={index}
      getSpecificArticle={props.getSpecificArticle}
    />
  ));
  return <div className="article-container">{articleCards}</div>;
};

export default ArticleContainer;
