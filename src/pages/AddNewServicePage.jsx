import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AddNewServiceComponent = React.lazy(() =>
  import("../components/AddNewServiceComponent")
);
const AddNewServicePage = () => {
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
          <AddNewServiceComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AddNewServicePage;
