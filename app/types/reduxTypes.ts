import { IArticle } from "./types";

//for newsSlice.ts
export interface IPageState {
  page: number
}

//for articlesSlice.ts
export interface IArticlesState {
  data: IArticle[],
}

//for favouritesSlice.ts
export interface IFavouritesState {
  data: IArticle[]
}