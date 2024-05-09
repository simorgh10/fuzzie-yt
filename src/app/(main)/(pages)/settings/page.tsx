import ProfileForm from "@/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

type Props = {};

const Settings = async (props: Props) => {
  const authUser = await currentUser();
  if (!authUser) return null;

  const user = await db.user.findUnique({ where: { clerkId: authUser.id } });

  if (!user) return null;

  const removeProfileImage = async () => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: "",
      },
    });
    return response;
  };

  const uploadProfileImage = async (image: string) => {
    "use server";
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: image,
      },
    });
    return response;
  };

  const updateUserInfo = async (name: string) => {
    "use server";
    const updatedUser = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        name,
      },
    });
    return updatedUser;
  };

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
        <ProfilePicture
          userImage={user?.profileImage || null}
          onDelete={removeProfileImage}
          onUpload={uploadProfileImage}
        />
        <ProfileForm
        user={user}
        onUpdate={updateUserInfo}
        />
      </div>
    </div>
  );
};

export default Settings;
