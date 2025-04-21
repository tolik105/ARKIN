import React from "react";
import { cn } from "@/lib/utils";

type AgentStatus = "Success" | "Running" | "Failed" | "Scheduled";

interface AgentItem {
  name: string;
  status: AgentStatus;
  lastRun: string;
}

const agentItems: AgentItem[] = [
  { name: "Onboarding Agent",  status: "Scheduled", lastRun: "—" },
  { name: "IT Triage Agent",   status: "Scheduled", lastRun: "—" },
  { name: "Password Reset",    status: "Scheduled", lastRun: "—" },
  { name: "Compliance Agent",  status: "Scheduled", lastRun: "—" },
];

const StatusIcon = ({ status }: { status: AgentStatus }) => {
  const icons = {
    Success: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3334 4L6.00008 11.3333L2.66675 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Running: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1.33325V3.99992M8 11.9999V14.6666M3.33333 7.99992H1.33333M14.6667 7.99992H12.6667M12.7267 12.7266L10.8467 10.8466M12.7267 3.27325L10.8467 5.15325M3.27333 12.7266L5.15333 10.8466M3.27333 3.27325L5.15333 5.15325" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    Failed: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 5.33325V7.99992M8 10.6666H8.00667M14.6667 7.99992C14.6667 11.6818 11.6819 14.6666 8 14.6666C4.31811 14.6666 1.33334 11.6818 1.33334 7.99992C1.33334 4.31802 4.31811 1.33325 8 1.33325C11.6819 1.33325 14.6667 4.31802 14.6667 7.99992Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Scheduled: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 4.66675V8.00008L10 10.0001M14.6667 8.00008C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.31811 14.6667 1.33334 11.6819 1.33334 8.00008C1.33334 4.31818 4.31811 1.33341 8 1.33341C11.6819 1.33341 14.6667 4.31818 14.6667 8.00008Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };

  const statusColors = {
    Success: "text-green-500",
    Running: "text-blue-500 animate-pulse",
    Failed: "text-red-500",
    Scheduled: "text-yellow-500",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={cn("h-4 w-4", statusColors[status])}>
        {icons[status]}
      </div>
      <span className={cn(
        "text-sm",
        status === "Failed" ? "text-red-500" : "text-neutral-600 dark:text-neutral-300"
      )}>
        {status}
      </span>
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div className="w-full rounded-[20px] bg-white dark:bg-black p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
          Live AI Agents
        </h2>
      </div>
      
      {/* Desktop View */}
      <div className="hidden sm:block">
        <div className="space-y-4">
          {agentItems.map((item, index) => (
            <div
              key={index}
              className="group isolate flex flex-col rounded-2xl bg-white/50 dark:bg-black/50 p-6 ring-1 ring-neutral-900/5 dark:ring-white/5 transition duration-300 hover:bg-white dark:hover:bg-black border border-neutral-200 dark:border-neutral-700"
            >
              <div className="flex items-center justify-between rounded-lg border border-neutral-100 dark:border-neutral-800 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                      {item.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <StatusIcon status={item.status} />
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Last Run: {item.lastRun}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="sm:hidden space-y-4">
        {agentItems.map((item, index) => (
          <div
            key={index}
            className="group isolate flex flex-col rounded-2xl bg-white/50 dark:bg-black/50 p-6 ring-1 ring-neutral-900/5 dark:ring-white/5 transition duration-300 hover:bg-white dark:hover:bg-black border border-neutral-200 dark:border-neutral-700"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-neutral-800 dark:text-neutral-200">
                {item.name}
              </h3>
              <StatusIcon status={item.status} />
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">
              Last Run: {item.lastRun}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 