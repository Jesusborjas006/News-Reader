import { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getArticles from "../../apiCalls";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

function App() {
  const [articles, setArticles] = useState([]);
  const [articleNum, setArticleNum] = useState(0);
  const [specificArticle, setSpecificArticle] = useState({});

  useEffect(() => {
    getArticles().then((data) => setArticles(data.articles));
  }, []);

  const getSpecificArticle = (articleNumber) => {
    setArticleNum(articleNumber);
    console.log(articleNum);
    const articleDetails = articles.find(
      (article, index) => index === articleNum
    );
    setSpecificArticle(articleDetails);
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
          <ArticleDetails specificArticle={specificArticle}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
