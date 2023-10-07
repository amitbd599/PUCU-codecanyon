import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import HomePageEditPageMasterLayout from "../layout/HomePageEditPageMasterLayout";

const HomePageEditPageComponent = React.lazy(() =>
  import("../components/HomePageEditPageComponent")
);
const HomePageEditPage = () => {
  return (
    <Fragment>
      <HomePageEditPageMasterLayout>
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
          <HomePageEditPageComponent />
        </Suspense>
      </HomePageEditPageMasterLayout>
    </Fragment>
  );
};

export default HomePageEditPage;
