import Article from "../Article/Article";
import "./ArticleContainer.css";

const ArticleContainer = (props) => {
  const articleCards = props.articles.map((article, index) => <Article title={article.title} img={article.urlToImage} id={index} key={index}/>)
  return (
    <div className="article-container">
      {articleCards}
    </div>
  );
};

export default ArticleContainer;
