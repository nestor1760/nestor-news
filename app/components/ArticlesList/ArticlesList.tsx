"use client"

import { useAppDispatch, useAppSelector } from "@/app/hook"
import { fetchArticles } from "@/app/store/articlesSlice"
import { useEffect } from "react"


const ArticlesList = () => {
  const dispatch = useAppDispatch()
  const { articles, error, isLoading } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <div className="w-full h-screen">
      {isLoading && <p>Loading...</p>}

      {error && <p className="text-red-500">Error: {error}</p>}

      {!isLoading && !error && articles.length > 0 && (
        <div className="w-full h-full flex items-start justify-center overflow-y-auto">
          <div className="w-full flex items-start justify-start flex-wrap gap-4 p-4">
            {articles.map((article) => (
              <div key={article.url} className="w-[200px] h-[300px] bg-white p-4 rounded shadow-md">
                <img src={article.urlToImage} alt={article.title} className="w-full h-[150px] object-cover rounded" />
                <h4 className="text-sm mt-2">{article.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}

      {!isLoading && articles.length === 0 && <p>No articles found</p>}
    </div>

  );
}

export default ArticlesList