import "./FeaturedContainer.css";
import { Link } from "react-router-dom";
import notFound from "../../images/image-not-found-scaled.png";

const FeaturedArticle = (props) => {
  return (
    <Link
      to={`/articleDetails/${props.id}`}
      className="featured-card"
      onClick={() => {
        props.getSpecificArticle(props.id);
        props.toggleForm();
      }}
    >
      <div>
        <>
          <img
            className="featured-img"
            src={!props.img ? notFound : props.img}
            alt="Featured article"
          />
          <h3 className="featured-heading">Featured Story</h3>
          <div className="featured-text">
            <p className="featured-title">{props.title}</p>
          </div>
        </>
      </div>
    </Link>
  );
};

export default FeaturedArticle;
