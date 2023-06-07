import { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getArticles from "../../apiCalls";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import FeaturedContainer from "../FeaturedContainer/FeaturedContainer";
import Footer from "../Footer/Footer";

function App() {
  const [articles, setArticles] = useState([]);
  const [articleNum, setArticleNum] = useState(null);
  const [query, setQuery] = useState("");
  const [formDisplayed, setFormDisplayed] = useState(true);
  const [featuredNum, setFeaturedNum] = useState(0);

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
      setFeaturedNum(Math.floor(Math.random() * 20));
    });
  }, []);

  const getSpecificArticle = (articleNumber) => {
    setArticleNum(articleNumber);
  };

  const toggleForm = () => {
    setFormDisplayed(!formDisplayed);
  };

  return (
    <main className="main-app">
      <Navbar
        query={query}
        setQuery={setQuery}
        formDisplayed={formDisplayed}
        toggleForm={toggleForm}
      />
      <Switch>
        <Route path="/" exact>
          <FeaturedContainer
            articles={articles}
            getSpecificArticle={getSpecificArticle}
            toggleForm={toggleForm}
            featuredNum={featuredNum}
            query={query}
          />
          <ArticleContainer
            articles={filteredArticles}
            getSpecificArticle={getSpecificArticle}
            toggleForm={toggleForm}
          />
        </Route>
        <Route path="/articleDetails/:id">
          <ArticleDetails
            articles={filteredArticles}
            articleNum={articleNum}
            toggleForm={toggleForm}
          />
        </Route>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;
