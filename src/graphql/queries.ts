import { gql } from "@apollo/client";

export const CATEGORY_QUERY = gql`
  query CategoryAndRelated($id: String!) {
    categoryAndRelated(id: $id) {
      label
      introduction
      information
      services {
        id
        name
        link
      }
    }
  }
`;

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

