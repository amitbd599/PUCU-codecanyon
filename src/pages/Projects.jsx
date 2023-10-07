import React, { Fragment, Suspense } from "react";

import { Helmet } from "react-helmet";

import FullScreenLoader from "../layout/FullScreenLoader";
import MasterLayout from "../layout/MasterLayout";

const ProjectsComponent = React.lazy(() =>
  import("../components/ProjectsComponent")
);
const Projects = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<FullScreenLoader />}>
          <Helmet>
            <title>Projects || PUCU - React Portfolio Template</title>
            <meta
              name="description"
              content="PUCU - React Portfolio Template"
            />
          </Helmet>
          <ProjectsComponent />
        </Suspense>
      </MasterLayout>
    </Fragment>
  );
};

export default Projects;
