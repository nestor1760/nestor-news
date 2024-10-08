'use client'

import { IArticle, IArticlesListProps } from "@/app/types/types";
import ArticleCard from "../ArticleCard/ArticleCard";
import CenteredDiv from "../CenteredDiv/CenteredDiv";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from "react";
import { fetchArticlesFromAPI } from "@/app/lib/fetchArticles";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { setPage } from "@/app/store/pageSlice";

const ArticlesList = ({ initialArticles, error }: IArticlesListProps) => {
  const [articles, setArticles] = useState<IArticle[]>(initialArticles)
  const [hasMore, setHasMore] = useState<boolean>(true)
  const { page } = useAppSelector(state => state.page)
  const dispatch = useAppDispatch()

  const fetchMoreArticles = async () => {
    try {
      const newArticles = await fetchArticlesFromAPI(page);

      if (newArticles.length === 0) {
        setHasMore(false);
        return;
      }

      setArticles(prevArticles => [...prevArticles, ...newArticles]);
      dispatch(setPage(page + 1));
    } catch (error) {
      console.error("Error fetching more articles:", error);
      setHasMore(false);
    }
  };

  if (error) {
    return <h3 className="text-red-500">Error: {error}</h3>;
  }

  if (!articles || articles.length === 0) {
    return <CenteredDiv>No articles found...</CenteredDiv>;
  }

  return (
    <div
      id="scrollableDiv"
      className="w-full h-screen overflow-y-auto flex items-start justify-center scrollbar-thin scrollbar-thumb-transparent"
    >
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreArticles}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
        loader={<CenteredDiv>Loading...</CenteredDiv>}
        endMessage={<CenteredDiv>No more articles to load...</CenteredDiv>}
      >
        <div className="flex w-full items-stretch justify-center flex-wrap gap-4 p-3">
          {articles.map((article) => (
            <ArticleCard
              title={article.title}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              description={article.description}
              author={article.author}
              key={article.title}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default ArticlesList