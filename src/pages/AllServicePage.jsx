import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AllServicesPageComponent = React.lazy(() =>
  import("../components/AllServicesPageComponent")
);
const AllServicePage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>View All Service || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"View All Service"} />
          <AllServicesPageComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AllServicePage;
