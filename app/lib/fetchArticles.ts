import { IArticle, TFetchProps } from "../types/types";

const fetchFromAPI = async ({ url }: TFetchProps) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.articles as IArticle[];
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Fetch error: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
}

//get articles from API with page limit
export const fetchArticlesFromAPI = async (page: number = 1) => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const q = 'Adidas';
  const language = 'en';
  const pageSize = 5;

  const url = `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${pageSize}&language=${language}&apiKey=${API_KEY}`;

  return fetchFromAPI({ url })
};

//get article by title from API
export const fetchArticleByTitle = async (title: string) => {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const language = 'en';
  const q = 'Adidas';
  const url = `https://newsapi.org/v2/everything?q=${q}&language=${language}&apiKey=${API_KEY}`;

  const articles: IArticle[] = await fetchFromAPI({ url });

  const decodeTitle = decodeURIComponent(title as string).replace(/-/g, ' ');
  const article = articles.find((art) => art.title.toLowerCase() === decodeTitle.toLowerCase());

  if (!article) {
    throw new Error('Article not found');
  }

  return article
};
