import React from "react";
import WorkflowButton from "./_components/workflow-button";
import Workflows from "./_components";

type Props = {};

const WorkflowsPage = (props: Props) => {
  return (
    <div className="relative flex flex-col">
      <h1
        className="sticky top-0 z-[10] text-4xl p-6 bg-background/50
backdrop-blur-lg flex items-center justify-between border-b"
      >
        Workflows
        <WorkflowButton />
      </h1>
      <Workflows />
    </div>
  );
};

export default WorkflowsPage;
