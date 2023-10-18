import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AllBlogPageComponent = React.lazy(() =>
  import("../components/AllBlogPageComponent")
);
const AllBlogPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>View All Blog || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"View All Blog"} />
          <AllBlogPageComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AllBlogPage;
