"use client";

import WorkflowForm from "@/components/forms/workflow-form";
import CustomModal from "@/components/global/custom-modal";
import { Button } from "@/components/ui/button";
import { useBilling } from "@/providers/billing-provider";
import { useModal } from "@/providers/modal-provider";
import { time } from "console";
import { Plus } from "lucide-react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen } = useModal();
  const { credits } = useBilling();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title={"Create a Workflow Automation"}
        subheading={
          "Workflows are a powerful tool that help you automate tasks"
        }
      >
        <WorkflowForm title={""} subtitle={""} />
      </CustomModal>
    );
  };

  return (
    <Button
      size={"icon"}
      {...(credits !== "0"
        ? {
            onClick: handleClick,
          }
        : {
            disabled: true,
          })}
    >
      <Plus />
    </Button>
  );
};

export default WorkflowButton;
