import "./Article.css";

const Article = (props) => {
  return (
    <div className="article-card">
      <img className="article-img" src={props.img} alt="Article shot" />
      <p className="published">{props.published}</p>
      <h2 className="title">{props.title}</h2>
      <p className="description">{props.description}</p>
    </div>
  );
};

export default Article;
