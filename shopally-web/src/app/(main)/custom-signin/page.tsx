// src/app/api/auth/custom-signin/page.tsx
"use client";

import dynamic from "next/dynamic";

const CustomSignIn = dynamic(
  () => import("../../components/AuthComponents/CustomSignInComponent"),
  { ssr: false } // This disables server-side rendering
);

export default function Page() {
  return <CustomSignIn />;
}
