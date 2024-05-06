import ProfileForm from "@/components/forms/profile-form";
import React from "react";

type Props = {};

const Settings = (props: Props) => {
  // WIP: Wire up profile picture
  return (
    <div className="flex flex-col gap-4">
      <h1
        className="sticky top-0 z-[10] text-4xl p-6 bg-background/50
    backdrop-blur-lg flex items-center justify-between border-b"
      >
        Settings
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <ProfileForm />
      </div>
    </div>
  );
};

export default Settings;
