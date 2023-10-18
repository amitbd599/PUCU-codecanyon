import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AllTestimonialsPageComponent = React.lazy(() =>
  import("../components/AllTestimonialsPageComponent")
);
const AllTestimonialsPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              View All Testimonial || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"View All Testimonial"} />
          <AllTestimonialsPageComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AllTestimonialsPage;
