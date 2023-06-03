const getArticles = () => {
  return fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
  ).then((response) => response.json());
};

export default getArticles;
