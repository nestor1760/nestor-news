'use client'

import { IArticlesListProps } from "@/app/types/types";
import ArticleCard from "../ArticleCard/ArticleCard";
import CenteredDiv from "../CenteredDiv/CenteredDiv";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from "react";
import { fetchArticlesFromAPI } from "@/app/lib/fetchArticles";
import { useAppDispatch, useAppSelector } from "@/app/hook";
import { setPage } from "@/app/store/pageSlice";
import { setArticles } from "@/app/store/articlesSlice";
import Loader from "@/app/UI/Loader/Loader";
import ListItems from "../ListItems/ListItems";
import ListWrapper from "./ListWrapper";

const ArticlesList = ({ initialArticles, error }: IArticlesListProps) => {
  const [hasMore, setHasMore] = useState<boolean>(true)
  const { page } = useAppSelector(state => state.page)
  const { data } = useAppSelector(state => state.articles)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data.length === 0 && initialArticles.length > 0) {
      dispatch(setArticles(initialArticles));
      dispatch(setPage(2))
    }
  }, []);

  const fetchMoreArticles = async () => {
    try {
      const newArticles = await fetchArticlesFromAPI(page);

      if (newArticles.length === 0) {
        setHasMore(false);
        return;
      }

      dispatch(setArticles(newArticles));
      dispatch(setPage(page + 1));
    } catch (error) {
      console.log("Error fetching more articles:", error);
      setHasMore(false);
    }
  };

  if (error) {
    return <h3 className="text-red-500">Error: {error}</h3>;
  }

  if (!data || data.length === 0) {
    return (
      <CenteredDiv>
        <Loader />
      </CenteredDiv>
    )
  }

  return (
    <ListWrapper id="scrollableDiv">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreArticles}
        hasMore={hasMore}
        scrollableTarget="scrollableDiv"
        scrollThreshold={0.7}
        loader={<div className="flex items-center justify-center mt-2">Loading...</div>}
        endMessage={<div className="flex items-center justify-center mt-7">No more articles to load...</div>}
      >
        <ListItems>
          {data.map((article) => (
            <ArticleCard
              title={article.title}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              description={article.description}
              author={article.author}
              key={article.title}
            />
          ))}
        </ListItems>
      </InfiniteScroll>
    </ListWrapper>
  );
}

export default ArticlesList