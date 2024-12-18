'use client'

import ListItems from '../ListItems/ListItems'
import ListWrapper from '../ArticlesList/ListWrapper'
import { useAppSelector } from '@/app/hook'
import ArticleCard from '../ArticleCard/ArticleCard'
import { useEffect, useState } from 'react'
import CenteredDiv from '../CenteredDiv/CenteredDiv'
import Loader from '@/app/UI/Loader/Loader'

const FavouritesList = () => {
  const { data } = useAppSelector(state => state.favourites)

  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <CenteredDiv>
        <Loader />
      </CenteredDiv>
    )
  }

  return (
    <>
      <h1>Favourites</h1>
      <ListWrapper>
        <ListItems>
          {data.map(article =>
            <ArticleCard
              title={article.title}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              description={article.description}
              author={article.author}
              key={article.title}
            />
          )}

        </ListItems>
      </ListWrapper>
    </>

  )
}

export default FavouritesList