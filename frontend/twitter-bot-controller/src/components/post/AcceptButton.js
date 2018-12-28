// @flow

import * as React from "react";
import { Mutation } from "react-apollo";

import { ACCEPT_POST_FOR_PUBLISHING } from "../../query";

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
            acceptPostForPublishing({ variables: { id: id } });
          }}
        >
          Accept post
        </div>
      )}
    </Mutation>
  );
};

export default AcceptButton;
