import React from "react";

import { Query, Article } from "../api.g";
import { ARTICLES_QUERY } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import {
  ArticleThumbnail,
  FeaturedArticleThumbnail,
} from "../components/Article";

function ArticlesFeed() {
  const { loading, error, data } = useQuery<{
    featuredArticle: Query["featuredArticle"];
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
    const { featuredArticle, articles } = data;

    const restOfArticles = articles.filter(
      (article) => !article.title.startsWith("Välkommen")
    );

    elementToRender = (
      <>
        {featuredArticle ? (
          <FeaturedArticleThumbnail
            image={featuredArticle.imgUrl}
            key={featuredArticle.id}
            introduction={featuredArticle.introduction}
            text={featuredArticle.text}
            title={featuredArticle.title}
            id={featuredArticle.id}
            url={`/artikel/${featuredArticle.id}`}
            video={featuredArticle.videoUrl}
          />
        ) : (
          <React.Fragment />
        )}
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
