import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { CONSTANTS } from "@/constants/links";
import { Container } from "@/components/container";

export function Footer() {
  const pages = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "AI Agents",
      href: "#",
    },
    {
      title: "Platform",
      href: "#",
    },
    {
      title: "Insights",
      href: "#",
    },
  ];

  const socials = [
    {
      title: "Facebook",
      href: "#",
    },
    {
      title: "Instagram",
      href: "#",
    },
    {
      title: "Twitter",
      href: "#",
    },
    {
      title: "LinkedIn",
      href: "#",
    },
  ];
  const legals = [
    {
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      title: "Terms of Service",
      href: "/terms",
    },
    {
      title: "Cookie Policy",
      href: "/cookies",
    },
  ];

  const careers = [
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Partner with Us",
      href: "#",
    },
  ];

  const signups = [
    {
      title: "Join Waitlist",
      href: "#waitlist",
    },
    {
      title: "Login",
      href: CONSTANTS.LOGIN_LINK,
    },
  ];
  return (
    <footer>
      <Container>
        <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
            <div className="flex flex-col items-center gap-2 text-sm text-neutral-500">
              <Logo />
              <p>© 2024 AKRIN, Inc. All rights reserved.</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
              <div className="flex justify-center space-y-4 flex-col w-full">
                <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                  Platform
                </p>
                <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                  {pages.map((page, idx) => (
                    <li key={"pages" + idx} className="list-none">
                      <Link
                        className="transition-colors hover:text-text-neutral-800"
                        href={page.href}
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center space-y-4 flex-col">
                <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                  Company
                </p>
                <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                  {careers.map((item, idx) => (
                    <li key={"career" + idx} className="list-none">
                      <Link
                        className="transition-colors hover:text-text-neutral-800"
                        href={item.href}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center space-y-4 flex-col">
                <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                  Legal
                </p>
                <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                  {legals.map((legal, idx) => (
                    <li key={"legal" + idx} className="list-none">
                      <Link
                        className="transition-colors hover:text-text-neutral-800"
                        href={legal.href}
                      >
                        {legal.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center space-y-4 flex-col">
                <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
                  Get Started
                </p>
                <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4">
                  {signups.map((auth, idx) => (
                    <li key={"auth" + idx} className="list-none">
                      <Link
                        className="transition-colors hover:text-text-neutral-800"
                        href={auth.href}
                      >
                        {auth.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
