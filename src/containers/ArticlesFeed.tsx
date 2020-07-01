import React from "react";

import { Query, Article } from "../api.g";
import { ARTICLES_QUERY } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { ArticleThumbnail } from "../components/Article";

function ArticlesFeed() {
  const { loading, error, data } = useQuery<{
    articles: Query["articles"];
  }>(ARTICLES_QUERY);

  let elementToRender = null;

  if (loading) {
    elementToRender = <p>Loading...</p>;
  }

  if (error) {
    elementToRender = <p>{error.message}</p>;
  }

  if (data) {
    /* TODO(@all): This should happen in the API */
    const [welcomeArticle] = data.articles.filter((article) =>
      article.title.startsWith("Välkommen")
    );

    const restOfArticles = data.articles.filter(
      (article) => !article.title.startsWith("Välkommen")
    );

    elementToRender = (
      <>
        <ArticleThumbnail
          image={welcomeArticle.imgUrl}
          key={welcomeArticle.id}
          text={welcomeArticle.introduction}
          title={welcomeArticle.title}
          id={welcomeArticle.id}
          url={`/artikel/${welcomeArticle.id}`}
          video={welcomeArticle.videoUrl}
        />
        {restOfArticles.map((article: Article) => (
          <ArticleThumbnail
            image={article.imgUrl}
            key={article.id}
            text={article.introduction}
            title={article.title}
            id={article.id}
            url={`/artikel/${article.id}`}
            video={article.videoUrl}
          />
        ))}
      </>
    );
  }

  if (elementToRender) {
    return <>{elementToRender}</>;
  } else {
    return null;
  }
}

export default ArticlesFeed;
