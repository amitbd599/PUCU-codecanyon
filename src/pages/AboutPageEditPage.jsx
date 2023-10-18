import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AboutPageEditComponent = React.lazy(() =>
  import("../components/AboutPageEditComponent")
);
const AboutPageEditPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              About Page Edit Page || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"About Page Content Edit"} />
          <AboutPageEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AboutPageEditPage;
