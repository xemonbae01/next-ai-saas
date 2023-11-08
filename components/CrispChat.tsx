"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("acaed977-7471-4343-be4c-8c490d2fb71e");
  }, []);

  return null;
};
