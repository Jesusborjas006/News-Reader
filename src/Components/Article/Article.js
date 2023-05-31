import "./Article.css";

const Article = (props) => {
  return (
    <div className="article-card">
      <img className="article-img" src={props.img} alt="Article shot" />
      <h2>{props.title}</h2>
    </div>
  );
};

export default Article;
