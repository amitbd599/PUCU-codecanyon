import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const BlogDetailsComponent = React.lazy(() =>
  import("../components/BlogDetailsComponent")
);
const BlogDetails = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Blog Details || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <BlogDetailsComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default BlogDetails;
