import * as React from "react";

import "./PageTitle.scss";

const PageTitle = props => {
  return (
    <div className={"pageTitle"}>
      <h1>{props.pageTitle}</h1>
    </div>
  );
};

export default PageTitle;
