//get all articles from API

export const fetchArticlesFromAPI = async (page: number = 1) => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const q = 'Bitcoin';
  const language = 'en';
  const pageSize = 5;

  const url = `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${pageSize}&language=${language}&apiKey=${API_KEY}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetch error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};
