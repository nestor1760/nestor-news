import ArticlePage from '@/app/components/ArticlePage/ArticlePage';

const page = async ({ params }: { params: { title: string } }) => {

  return (
    <ArticlePage title={params.title} />
  )
}

export default page