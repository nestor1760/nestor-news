// 'use client'

// import { useAppSelector } from '@/app/hook'
// import { useParams } from 'next/navigation'
// import CenteredDiv from '../CenteredDiv/CenteredDiv'

// const ArticlePage = () => {
// const { articles } = useAppSelector(state => state.articles)
// const { slug } = useParams()

// console.log(articles);

// const article = articles.find((a) => a.title === title);

// if (!article) {
//   return (
//     <CenteredDiv>
//       Article not found
//     </CenteredDiv>
//   );
// }

//   return (
//     <CenteredDiv>
//       <div className='flex flex-col items-center justify-center'>
//         <h3>{article.title}</h3>
//         <h3>{article.description}</h3>
//       </div>
//     </CenteredDiv>
//   )
// }

// export default ArticlePage