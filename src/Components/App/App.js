import { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getArticles from "../../apiCalls";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "../ArticleDetails/ArticleDetails";
import FeaturedContainer from "../FeaturedContainer/FeaturedContainer";

function App() {
  const [articles, setArticles] = useState([]);
  const [articleNum, setArticleNum] = useState(null);
  const [query, setQuery] = useState("");
  const [formDisplayed, setFormDisplayed] = useState(true);

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
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
    </main>
  );
}

export default App;
