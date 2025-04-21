import { Login } from "@/components/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signup | AKRIN",
  description:
    "Join AKRIN for modern web solutions. Built with Next.js, Tailwind CSS, TypeScript and framer motion.",
};

export default function LoginPage() {
  return (
    <main className="">
      <Login />
    </main>
  );
}
