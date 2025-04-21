"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";
import { CONSTANTS } from "@/constants/links";

export function CTA() {
  const calOptions = useCalEmbed({
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    styles: {
      branding: {
        brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
      },
    },
    hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
    layout: CONSTANTS.CALCOM_LAYOUT,
  });
  return (
    <div
      id="contact"
      className="px-4 w-full md:px-8 bg-white dark:bg-neutral-950 py-20"
    >
      <div className="max-w-7xl mx-auto 0 flex flex-col md:flex-row justify-between items-center w-full">
        <div className="flex flex-col">
          <motion.h2 className="text-black dark:text-white text-xl text-center md:text-left md:text-3xl font-bold mx-auto md:mx-0 max-w-xl ">
            Ready to automate your first ticket?
          </motion.h2>
        </div>
      </div>
    </div>
  );
}
