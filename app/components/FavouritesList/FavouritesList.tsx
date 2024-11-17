import ListItems from '../ListItems/ListItems'
import ListWrapper from '../ArticlesList/ListWrapper'

const FavouritesList = () => {

  const data: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

  return (
    <>
      <h1>Favourites</h1>
      <ListWrapper>
        <ListItems>
          {data.map(item =>
            <div key={item} className='w-[250px] h-[250px] border-solid border-black border-[1px] flex-wrap m-4 p-3'>
              {item}
            </div>
          )}

        </ListItems>
      </ListWrapper>
    </>

  )
}

export default FavouritesList