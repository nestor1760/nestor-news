"use client"

import { useAppDispatch, useAppSelector } from "@/app/hook"
import { fetchArticles } from "@/app/store/articlesSlice"
import { useEffect } from "react"
import ArticlesItem from "../ArticlesItem/ArticlesItem"


const ArticlesList = () => {
  const dispatch = useAppDispatch()
  const { articles, error, isLoading } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <div className="w-full h-screen overflow-y-auto flex items-start justify-center">
      {isLoading && <p>Loading...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {!isLoading && !error && articles.length > 0 && (
        <div className="flex items-stretch justify-center flex-wrap gap-4 p-3">
          {articles.map((article) => (
            <ArticlesItem
              title={article.title}
              urlToImage={article.urlToImage}
              url={article.url}
            />
          ))}
        </div>
      )}

      {!isLoading && articles.length === 0 && <p>No articles found</p>}
    </div>

  );
}

export default ArticlesList