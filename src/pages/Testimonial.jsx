import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const TestimonialComponent = React.lazy(() =>
  import("../components/TestimonialComponent")
);
const Testimonial = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Testimonial || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <TestimonialComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Testimonial;
