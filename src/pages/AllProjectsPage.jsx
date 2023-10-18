import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AllProjectsComponent = React.lazy(() =>
  import("../components/AllProjectsComponent")
);
const AllProjectsPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>View All Projects || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"View All Projects"} />
          <AllProjectsComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AllProjectsPage;
