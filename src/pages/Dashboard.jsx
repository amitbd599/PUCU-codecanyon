import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const DashboardComponent = React.lazy(() =>
  import("../components/DashboardComponent")
);
const Dashboard = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Dashboard || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Blog Page Content Edit"} />
          <DashboardComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default Dashboard;
