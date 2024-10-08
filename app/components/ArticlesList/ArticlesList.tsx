import { IArticlesListProps } from "@/app/types/types";
import ArticleCard from "../ArticleCard/ArticleCard";
import CenteredDiv from "../CenteredDiv/CenteredDiv";

const ArticlesList = ({ articles, error }: IArticlesListProps) => {

  if (error) {
    return <h3 className="text-red-500">Error: {error}</h3>;
  }

  if (!articles || articles.length === 0) {
    return <CenteredDiv>No articles found...</CenteredDiv>;
  }

  return (
    <div className="w-full h-screen overflow-y-auto flex items-start justify-center scrollbar-thin scrollbar-thumb-transparent">
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

    </div>
  );
}

export default ArticlesList