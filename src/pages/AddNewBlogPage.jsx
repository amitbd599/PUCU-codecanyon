import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AddNewBlogComponent = React.lazy(() =>
  import("../components/AddNewBlogComponent")
);
const AddNewBlogPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Add New Blog Page || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Add New Blog Page"} />
          <AddNewBlogComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AddNewBlogPage;
