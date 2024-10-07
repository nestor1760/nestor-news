import ArticlePage from '@/app/components/ArticlePage/ArticlePage'
import { fetchArticlesFromAPI } from '@/app/lib/fetchArticles';
import { IArticle } from '@/app/types/types';

const page = async ({ params }: { params: { title: string } }) => {
  const articles: IArticle[] = await fetchArticlesFromAPI();

  return (
    <ArticlePage articles={articles} title={params.title} />
  )
}

export default page