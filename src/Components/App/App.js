import { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getArticles from "../../apiCalls";
import { Route, Switch } from "react-router-dom";
import ArticleDetails from "../ArticleDetails/ArticleDetails";

function App() {
  const [articles, setArticles] = useState([]);
  const [articleNum, setArticleNum] = useState(null);
  const [query, setQuery] = useState("");
  

  const filteredArticles = articles.filter((article) => {
    return article.title.toLowerCase().includes(query.toLowerCase());
  });

  useEffect(() => {
    getArticles().then((data) => setArticles(data.articles));
  }, []);

  const getSpecificArticle = (articleNumber) => {
    setArticleNum(articleNumber);
  };

  return (
    <main className="main-app">
      <Navbar query={query} setQuery={setQuery}/>
      <Switch>
        <Route path="/" exact>
          <ArticleContainer
            articles={filteredArticles}
            getSpecificArticle={getSpecificArticle}
          />
        </Route>
        <Route path="/articleDetails/:id">
          <ArticleDetails articles={filteredArticles} articleNum={articleNum} />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
