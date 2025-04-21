"use client";
import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export function SimpleCenteredContactForm() {
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    /* TODO: wire to backend */
  };

  const socials = [
    {
      title: "twitter",
      href: "https://twitter.com/yourHandle",
      icon: (
        <IconBrandX className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
      ),
    },
    {
      title: "github",
      href: "https://github.com/yourOrg",
      icon: (
        <IconBrandGithub className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
      ),
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/company/yourOrg",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-neutral-600 dark:text-neutral-400 hover:text-black" />
      ),
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-neutral-900 w-full flex items-center justify-center">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="mx-auto w-full max-w-lg bg-white dark:bg-neutral-950 px-4 md:px-10 py-8 shadow-input rounded-3xl">
          <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-black dark:text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm max-w-sm">
            Please reach out and we'll get back to you at warp speed.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 py-8">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400">
              Full Name
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm dark:text-white"
              />
            </label>

            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400">
              Email
              <input
                id="email"
                type="email"
                placeholder="hello@company.com"
                className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm dark:text-white"
              />
            </label>

            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400">
              Company
              <input
                id="company"
                type="text"
                placeholder="AKRIN Inc."
                className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm dark:text-white"
              />
            </label>

            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400">
              Message
              <textarea
                id="message"
                rows={5}
                placeholder="Enter your message here"
                className="mt-2 block w-full bg-white dark:bg-neutral-900 px-4 rounded-md border-0 py-1.5 shadow-input text-black placeholder:text-gray-400 focus:ring-2 focus:ring-neutral-400 focus:outline-none sm:text-sm dark:text-white"
              />
            </label>

            <button
              type="submit"
              className="bg-black dark:bg-white dark:text-black text-white w-full rounded-full py-2 mt-4 hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>

          <div className="flex items-center justify-center space-x-4 pt-4">
            {socials.map((s) => (
              <Link href={s.href} key={s.title} aria-label={s.title}>
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 