import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AddNewImageComponent = React.lazy(() =>
  import("../components/AddNewImageComponent")
);
const AddNewImagePage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Add New Image Page || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Add New Image Page"} />
          <AddNewImageComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AddNewImagePage;
