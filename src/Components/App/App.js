import { useEffect, useState } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import getArticles from "../../apiCalls";

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => setArticles(data.articles));
  }, []);

  return (
    <main className="main-app">
      <Navbar />
      <ArticleContainer articles={articles}/>
    </main>
  );
}

export default App;
