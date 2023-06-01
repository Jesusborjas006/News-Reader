import { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getArticles from "../../apiCalls";
import { Route, Switch } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  const [articleClicked, setArticleClicked] = useState(0);
  console.log(articleClicked);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.articles));
  }, []);

  const getSpecificArticle = (articleNum) => {
    setArticleClicked(articleNum);
  };

  return (
    <main className="main-app">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <ArticleContainer
            articles={articles}
            getSpecificArticle={getSpecificArticle}
          />
        </Route>
        <Route path="/articleDetails/:id">
          <p>Details {articleClicked}</p>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
