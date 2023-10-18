import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const AddNewTestimonialComponent = React.lazy(() =>
  import("../components/AddNewTestimonialComponent")
);
const AddNewTestimonialPage = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              Add New Testimonial Page || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Add New Testimonial Page"} />
          <AddNewTestimonialComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default AddNewTestimonialPage;
