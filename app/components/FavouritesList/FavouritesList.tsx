'use client'

import ListItems from '../ListItems/ListItems'
import ListWrapper from '../ArticlesList/ListWrapper'
import { useAppSelector } from '@/app/hook'
import ArticleCard from '../ArticleCard/ArticleCard'
import { useEffect, useState } from 'react'
import CenteredDiv from '../CenteredDiv/CenteredDiv'
import Loader from '@/app/UI/Loader/Loader'
import FilterForm from '../FilterForm/FilterForm'
import { useFilter } from '@/app/hooks/useFilter'

const FavouritesList = () => {
  const { data } = useAppSelector(state => state.favourites)
  const { debouncedValue } = useAppSelector(state => state.filterValue)

  const [isClient, setIsClient] = useState(false)

  const filteredList = useFilter({ inputValue: debouncedValue, list: data })

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
      <FilterForm />
      <ListWrapper>
        <ListItems>
          {filteredList.map(article =>
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