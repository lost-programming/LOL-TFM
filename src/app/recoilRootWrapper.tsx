"use client";

import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilRootWrapper = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootWrapper;
