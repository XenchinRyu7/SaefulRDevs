"use client";
import { useEffect } from "react";
import JOS from "jos-animation";

export function JOSInit() {
  useEffect(() => {
    JOS.init();
  }, []);
  return null;
}
