"use client"

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hook";
import { fetchArticles } from "./store/articlesSlice";
import Dashboard from "./components/Dashboard";

export default function Home() {
  const dispatch = useAppDispatch()
  const { articles } = useAppSelector(state => state.articles)

  console.log(articles);

  useEffect(() => {
    dispatch(fetchArticles())
  }, [])

  return (
    <div className="w-screen flex items-center justify-center">
      <Dashboard />
    </div>
  );
}
