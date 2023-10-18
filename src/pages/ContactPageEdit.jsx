import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import DashboardMasterLayout from "../layout/DashboardMasterLayout";
import Breadcrumb from "../components/Breadcrumb";

const ContactPageEditComponent = React.lazy(() =>
  import("../components/ContactPageEditComponent")
);
const ContactPageEdit = () => {
  return (
    <Fragment>
      <DashboardMasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>
              Contact Page Edit Page || PUCU - React Portfolio Template
            </title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <Breadcrumb title={"Contact Page Content Edit"} />
          <ContactPageEditComponent />
        </Suspense>
      </DashboardMasterLayout>
    </Fragment>
  );
};

export default ContactPageEdit;
