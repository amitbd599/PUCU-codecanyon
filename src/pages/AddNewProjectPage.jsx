import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AddNewProjectComponent = React.lazy(() =>
  import("../components/AddNewProjectComponent")
);
const AddNewProjectPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              Add New Project Page || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Add New Project Page"} />
          <AddNewProjectComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AddNewProjectPage;
