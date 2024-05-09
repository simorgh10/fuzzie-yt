"use client";
import { User } from "@prisma/client";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  onUpload: (image: string) => Promise<User>;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  //   const ctxProviderRef = useRef<
  //   typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  //   >(null);
  const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype>(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) router.refresh();
    };

    ctxProviderRef.current?.addEventListener(
      "file-upload-success",
      handleUpload
    );
    // ctxProviderRef.current?.addEventListener(
    //   "file-upload-success",
    //   handleUpload
    // );
  }, [onUpload, router]);

  return (
    <div>
      <lr-config ctx-name="my-uploader" pubkey="a5c525ac0b4bc993b487" />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}
        ${LR.PACKAGE_VERSION}
        ${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
      />
      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
