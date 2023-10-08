import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const HomePageEditComponent = React.lazy(() =>
  import("../components/HomePageEditComponent")
);
const HomePageEditPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              Home Page Edit Page || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Home Page Content Edit"} />
          <HomePageEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default HomePageEditPage;
