import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const TestimonialPageEditComponent = React.lazy(() =>
  import("../components/TestimonialPageEditComponent")
);
const TestimonialPageEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              Testimonial Page Edit Page || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Testimonial Page Content Edit"} />
          <TestimonialPageEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default TestimonialPageEdit;
