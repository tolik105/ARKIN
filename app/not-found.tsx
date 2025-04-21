/* eslint-disable react/no-unescaped-entities */

"use client";

import Link from "next/link";
import { Button } from "@/components/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-4"
        >
          404 - Page Not Found
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-neutral-600 dark:text-neutral-300 mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/"
              variant="dark"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
            >
              Back to Home
            </Button>
            
            <Button
              as={Link}
              href="/#contact"
              variant="primary"
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Contact Support
            </Button>
          </div>

          <div className="mt-12 space-y-4">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
              Popular Pages
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-neutral-600 dark:text-neutral-400">
              <Link href="/#features" className="hover:text-blue-600 dark:hover:text-blue-400">
                Features
              </Link>
              <Link href="/#platform" className="hover:text-blue-600 dark:hover:text-blue-400">
                Platform
              </Link>
              <Link href="/login" className="hover:text-blue-600 dark:hover:text-blue-400">
                Login
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 