// @flow

import gql from "graphql-tag";

export const GET_PENDING_POSTS = gql`
  {
    allPosts(filter: { acceptedForPosting: false }, orderBy: createdAt_DESC) {
      id
      content
      createdAt
    }
  }
`;

export const GET_ACCEPTED_POSTS = gql`
  {
    allPosts(filter: { acceptedForPosting: true }, orderBy: createdAt_DESC) {
      id
      content
      createdAt
    }
  }
`;
