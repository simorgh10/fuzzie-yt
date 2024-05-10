"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  router.replace("/workflows");
};

export default Page;
