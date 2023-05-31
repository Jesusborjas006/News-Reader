const getArticles = () => {
  return fetch(
    `https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};

export default getArticles;
