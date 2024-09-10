//article news
interface ArticleSource {
  id: string;
  name: string;
}

export interface IArticle {
  source: ArticleSource;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: Date;
  content: string;
}