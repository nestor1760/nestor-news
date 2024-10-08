import { ReactNode } from "react";

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
  publishedAt: string;
  content: string;
}

//for SessionProvider.tsx
export interface ISessionProps {
  children: ReactNode,
}

//for Avatar.tsx
export type TAvatarProps = {
  path: string
}

//for ArticlesItem.tsx
export type ArticlesProps = Partial<IArticle>;

//for ArticlesList.tsx
export interface IArticlesListProps {
  initialArticles: IArticle[],
  error?: string
}

//for ArticlesPage.tsx
export interface IArticlesPageProps {
  articles: IArticle[];
  title: string;
}

//for CardInfo.tsx
export interface ICardInfoProps {
  publishedAt: string | undefined,
  author: string | undefined,
  title: string | undefined
}

//for Image.tsx
export interface IImageProps {
  title: string | undefined,
  urlToImage: string | undefined,
  className?: string
}

//for ArticlePageinfo.tsx 
export interface IArticlePageInfoProps {
  description: string | undefined,
  title: string | undefined,
}
