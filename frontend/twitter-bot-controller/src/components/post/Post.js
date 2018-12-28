// @flow

import * as React from "react";

import AcceptButton from "./AcceptButton";

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
      <AcceptButton id={id} />
    </div>
  );
};

export default Post;
