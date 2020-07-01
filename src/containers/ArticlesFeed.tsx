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
    elementToRender = data.articles.map((article: Article) => (
      <ArticleThumbnail
        image={article.imgUrl}
        key={article.title}
        text={article.introduction}
        title={article.title}
        url={article.url}
        video={article.videoUrl}
      />
    ));
  }

  if (elementToRender) {
    return <>{elementToRender}</>;
  } else {
    return null;
  }
}

export default ArticlesFeed;
