// @flow

import * as React from "react";

import AcceptButton from "./AcceptButton";
import DeleteButton from "./DeleteButton";

type Props = {
  content: String,
  id: String,
  createdAt: String,
  isPending?: Boolean
};

const Post = (props: Props) => {
  const { content, id, createdAt, isPending } = props;
  return (
    <div>
      <p>{content}</p>
      {isPending && <AcceptButton id={id} />}
      <DeleteButton id={id} />
    </div>
  );
};

export default Post;
