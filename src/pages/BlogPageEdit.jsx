import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const BlogPageEditComponent = React.lazy(() =>
  import("../components/BlogPageEditComponent")
);
const BlogPageEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              Blog Page Edit Page || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Blog Page Content Edit"} />
          <BlogPageEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default BlogPageEdit;
