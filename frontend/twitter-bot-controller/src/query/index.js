// @flow

import gql from "graphql-tag";

export const GET_PENDING_POSTS = gql`
  query GetPendingPosts {
    allPosts(filter: { acceptedForPosting: false }, orderBy: createdAt_DESC) {
      id
      content
      createdAt
    }
  }
`;

export const GET_ACCEPTED_POSTS = gql`
  query GetAcceptedPosts {
    allPosts(filter: { acceptedForPosting: true }, orderBy: createdAt_DESC) {
      id
      content
      createdAt
    }
  }
`;

export const ACCEPT_POST_FOR_PUBLISHING = gql`
  mutation acceptPostForPublishing($id: ID!) {
    updatePost(id: $id, acceptedForPosting: true) {
      id
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;
