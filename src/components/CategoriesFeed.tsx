import React from "react";
import { Link } from "react-router-dom";
import { Container, Column, Center, BackgroundColor, Spacing } from "./Layout";
import { H2, H3 } from "./Typography";

import { Query } from "../api.g";
import { CATEGORIES_QUERY } from "../graphql/queries";
import { useQuery } from "@apollo/client";

function CategoriesFeed() {
  const { loading, error, data } = useQuery<{
    categories: Query["categories"];
  }>(CATEGORIES_QUERY);

  let elementToRender = null;

  if (loading) {
    elementToRender = <p>Loading...</p>;
  }

  if (error) {
    elementToRender = <p>{error.message}</p>;
  }

  if (data) {
    elementToRender = (
      <Column>
        <H2>Utforska</H2>
        <p>
          Ingress som kortfattat beskriver vad användaren kan hitta under de
          olika temana som presenteras nedanför.
        </p>
        <Column cols={2} colsDesktop={4}>
          {data.categories.map((category) => {
            return (
              <Container key={category.label}>
                <Center>
                  <img src={category.label} alt={category.label} />
                  <Link to={`/tema/${category.label}`}>
                    <H3>{category.label}</H3>
                  </Link>
                </Center>
              </Container>
            );
          })}
        </Column>
      </Column>
    );
  }

  if (elementToRender) {
    return (
      <Container backgroundColor={BackgroundColor.Beige} spacing={Spacing.S}>
        <Center>{elementToRender}</Center>
      </Container>
    );
  } else {
    return null;
  }
}

export default CategoriesFeed;
