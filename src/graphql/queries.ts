import { gql } from "@apollo/client";

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      label
      introduction
      information
    }
  }
`;

export const ARTICLES_QUERY = gql`
  query Articles {
    articles {
      url
      imgUrl
      videoUrl
      title
      text
      introduction
    }
  }
`;
