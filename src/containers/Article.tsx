import React from "react";
import { Markdown } from "../components/Markdown";
import { H2, Strong } from "../components/Typography";
import {
  Column,
  Container,
  Wrapper,
  Spacing,
  BackgroundColor,
} from "../components/Layout";
import { Query } from "../api.g";
import { ARTICLE_QUERY } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

function Article() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let { article } = useParams();

  const { loading, error, data } = useQuery<{
    article: Query["article"];
  }>(ARTICLE_QUERY, {
    variables: {
      id: article,
    },
  });

  let elementToRender = null;

  if (loading) {
    elementToRender = <p>Loading...</p>;
  }

  if (error) {
    elementToRender = <p>{error.message}</p>;
  }

  if (data && data.article) {
    elementToRender = (
      <Column>
        <Container>
          <img
            src={`${process.env.REACT_APP_API_ENDPOINT}${data?.article?.imgUrl}`}
            className="w-full h-auto md:h-64"
            alt=""
          />
          <Container spacing={Spacing.M}>
            <Column gap={Spacing.M}>
              <H2>{data.article.title}</H2>
              <Strong>{data.article.introduction}</Strong>
              <Markdown text={data.article.text} />
            </Column>
          </Container>
        </Container>
      </Column>
    );
  }

  if (elementToRender) {
    return (
      <Wrapper backgroundColor={BackgroundColor.Beige}>
        {elementToRender}
      </Wrapper>
    );
  } else {
    return null;
  }
}

export default Article;
