// @flow

import * as React from "react";

type Props = {
  content: String,
  id: String,
  createdAt: String
};

const Post = (props: Props) => {
  const { content, id, createdAt } = props;
  return (
    <div>
      <p>{content}</p>
    </div>
  );
};

export default Post;
