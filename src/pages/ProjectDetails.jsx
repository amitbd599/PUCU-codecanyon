import React, { Fragment, Suspense } from "react";
import { Helmet } from "react-helmet";
import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";
const ProjectsDetailsComponent = React.lazy(() =>
  import("../components/ProjectsDetailsComponent")
);
const ProjectDetails = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Projects Details || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <ProjectsDetailsComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default ProjectDetails;
