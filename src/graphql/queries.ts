import { gql } from "@apollo/client";

export const CATEGORY_QUERY = gql`
  query CategoryAndRelated($id: String!) {
    categoryAndRelated(id: $id) {
      thumbnailUrl
      imageUrl
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
      thumbnailUrl
    }
  }
`;

export const ARTICLES_QUERY = gql`
  query Articles {
    featuredArticle {
      id
      url
      imgUrl
      videoUrl
      title
      text
      introduction
    }

    articles {
      id
      url
      imgUrl
      videoUrl
      title
      text
      introduction
    }
  }
`;

export const ARTICLE_QUERY = gql`
  query Article($id: String!) {
    article(id: $id) {
      id
      url
      imgUrl
      videoUrl
      title
      text
      introduction
    }
  }
`;
