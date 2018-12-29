// @flow

import * as React from "react";
import { Mutation } from "react-apollo";

import {
  DELETE_POST,
  GET_PENDING_POSTS,
  GET_ACCEPTED_POSTS
} from "../../query";

type Props = {
  id: String
};

const DeleteButton = (props: Props) => {
  const { id } = props;
  return (
    <Mutation mutation={DELETE_POST}>
      {(deletePost, { data }) => (
        <div
          onClick={() => {
            deletePost({
              variables: { id: id },
              update: (proxy, { data: { deletePost } }) => {
                // Optimistically delete from pending
                const pendingPosts = proxy.readQuery({
                  query: GET_PENDING_POSTS
                }).allPosts;

                const deleteFromPendingPosts = pendingPosts.some(
                  post => post.id === id
                );

                if (deleteFromPendingPosts) {
                  const pendingPostsOptimistic = pendingPosts.filter(
                    post => post.id !== id
                  );
                  proxy.writeQuery({
                    query: GET_PENDING_POSTS,
                    data: { allPosts: pendingPostsOptimistic }
                  });
                }

                // Optimistically delete from accepted
                const acceptedPosts = proxy.readQuery({
                  query: GET_ACCEPTED_POSTS
                }).allPosts;

                const deleteFromAcceptedPosts = acceptedPosts.some(
                  post => post.id === id
                );

                if (deleteFromAcceptedPosts) {
                  const acceptedPostsOptimistic = acceptedPosts.filter(
                    post => post.id !== id
                  );
                  proxy.writeQuery({
                    query: GET_ACCEPTED_POSTS,
                    data: { allPosts: acceptedPostsOptimistic }
                  });
                }
              }
            });
          }}
        >
          Delete
        </div>
      )}
    </Mutation>
  );
};

export default DeleteButton;
