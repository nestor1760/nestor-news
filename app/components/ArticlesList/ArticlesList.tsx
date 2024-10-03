"use client"

import { useAppDispatch, useAppSelector } from "@/app/hook"
import { fetchArticles } from "@/app/store/articlesSlice"
import { useEffect } from "react"
import ArticlesItem from "../ArticlesItem/ArticlesItem"
import Loader from "@/app/UI/Loader/Loader"
import CenteredDiv from "../CenteredDiv/CenteredDiv"


const ArticlesList = () => {
  const dispatch = useAppDispatch()
  const { articles, error, isLoading } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <div className="w-full h-screen overflow-y-auto flex items-start justify-center scrollbar-thin scrollbar-thumb-transparent">
      {isLoading && (
        <CenteredDiv>
          <Loader />
        </CenteredDiv>
      )}

      {error && (
        <CenteredDiv>
          <h3 className="text-red-500">Error: {error}</h3>
        </CenteredDiv>
      )}

      {!isLoading && !error && articles.length > 0 && (
        <div className="flex items-stretch justify-center flex-wrap gap-6 p-3">
          {articles.map((article) => (
            <ArticlesItem
              title={article.title}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              description={article.description}
              url={article.url}
              author={article.author}
              key={article.title}
            />
          ))}
        </div>
      )}

      {!isLoading && articles.length === 0 && <CenteredDiv>No articles found...</CenteredDiv>}
    </div>
  );
}

export default ArticlesList