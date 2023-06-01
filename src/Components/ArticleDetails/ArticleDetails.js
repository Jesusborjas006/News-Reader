import "./ArticleDetails.css"

const ArticleDetails = (props) => {
  console.log(props.specificArticle)
  return (
    <div className="details-container">
      <img src={props.specificArticle.urlToImage} alt="Poster"/>
      <p>{props.specificArticle.publishedAt}</p>
      <p>{props.specificArticle.source.name}</p>
      <p>{props.specificArticle.author}</p>
      <h3>{props.specificArticle.title}</h3>
      <p>{props.specificArticle.description}</p>
      <p>{props.specificArticle.content}</p>
    </div>
  )
}

export default ArticleDetails