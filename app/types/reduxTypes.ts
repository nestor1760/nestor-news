import { IArticle } from "./types";

//for newsSlice.ts
export interface IArticlesState {
  articles: IArticle[],
  isLoading: boolean,
  error: string | undefined
}