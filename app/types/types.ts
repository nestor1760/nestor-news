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
