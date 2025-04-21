"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <div
      id="features"
      className="w-full  mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-8000 dark:text-neutral-100 text-neutral-800">
          AI for Work — Coming Soon
        </h2>
      </Header>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        Launching in 2025, AKRIN will deliver localized AI agents and no‑code workflows that automate IT and business processes for Japanese enterprises.
      </p>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Column 1 */}
        <Card className="surface-card flex flex-col justify-between">
          <CardContent>
            <CardTitle className="flex items-center gap-2">
              AI for Work Suite
              <span className="px-2 py-0.5 text-xs bg-yellow-400 text-yellow-900 rounded-full dark:bg-yellow-400/80 dark:text-yellow-950">
                Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Workspace search, an intelligent orchestrator, and JP‑tuned
              pre‑built agents packaged for rapid deployment.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Column 2 */}
        <Card className="surface-card flex flex-col justify-between">
          <CardContent>
            <CardTitle className="flex items-center gap-2">
              IT Self‑Service Use Cases
              <span className="px-2 py-0.5 text-xs bg-yellow-400 text-yellow-900 rounded-full dark:bg-yellow-400/80 dark:text-yellow-950">
                Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Password resets, device requests, and knowledge search—24 / 7 in
              English and Japanese.
            </CardDescription>
          </CardContent>
        </Card>

        {/* Column 3 */}
        <Card className="surface-card flex flex-col justify-between">
          <CardContent>
            <CardTitle className="flex items-center gap-2">
              Native Integrations
              <span className="px-2 py-0.5 text-xs bg-yellow-400 text-yellow-900 rounded-full dark:bg-yellow-400/80 dark:text-yellow-950">
                Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Connect instantly to ServiceNow, Okta, Microsoft Entra ID,
              Device42, and other tools common in Japanese enterprises.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0,
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        style={{
          transformOrigin: "top-left",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
      </motion.div>
      {children}
    </div>
  );
};

// Card structure
const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "font-sans text-base font-medium tracking-tight text-neutral-700 dark:text-neutral-100",
        className
      )}
    >
      {children}
    </h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-sans max-w-xs text-base font-normal tracking-tight mt-2 text-neutral-500 dark:text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col rounded-2xl bg-white dark:bg-neutral-900 shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
