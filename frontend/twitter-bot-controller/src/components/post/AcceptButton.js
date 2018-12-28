// @flow

import * as React from "react";
import { Mutation } from "react-apollo";

import {
  ACCEPT_POST_FOR_PUBLISHING,
  GET_PENDING_POSTS,
  GET_ACCEPTED_POSTS
} from "../../query";

type Props = {
  id: String
};

const AcceptButton = (props: Props) => {
  const { id } = props;
  return (
    <Mutation mutation={ACCEPT_POST_FOR_PUBLISHING}>
      {(acceptPostForPublishing, { data }) => (
        <div
          onClick={() => {
            acceptPostForPublishing({
              variables: { id: id },
              update: (proxy, { data: { acceptPostForPublishing } }) => {
                const { allPosts } = proxy.readQuery({
                  query: GET_PENDING_POSTS
                });

                // Optimistically append to accepted
                const acceptedPost = allPosts.find(post => post.id == id);

                const updatedAcceptedPost = {
                  ...acceptedPost,
                  acceptPostForPublishing: true
                };

                const acceptedPosts = proxy.readQuery({
                  query: GET_ACCEPTED_POSTS
                }).allPosts;

                acceptedPosts.unshift(updatedAcceptedPost);

                proxy.writeQuery({
                  query: GET_ACCEPTED_POSTS,
                  data: { allPosts: acceptedPosts }
                });

                // Optimistically delete from pending
                const pendingPostsOptimistic = allPosts.filter(
                  post => post.id !== id
                );
                proxy.writeQuery({
                  query: GET_PENDING_POSTS,
                  data: { allPosts: pendingPostsOptimistic }
                });
              }
            });
          }}
        >
          Accept post
        </div>
      )}
    </Mutation>
  );
};

export default AcceptButton;
