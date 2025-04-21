/* eslint-disable react/no-unescaped-entities */

"use client";
import { Container } from "@/components/container";
import "@/app/globals.css";

export default function Cookies() {
  return (
    <main className="bg-neutral-50 dark:bg-neutral-950 py-24">
      <div className="soft-card max-w-3xl mx-auto p-8 space-y-6 text-neutral-800 dark:text-neutral-100">
        <h1 className="text-3xl font-bold">Cookie Policy</h1>
        <p><em>Last updated: 21&nbsp;April 2025</em></p>

        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p>This Cookie Policy explains how AKRIN Inc. ("we", "us", or "our") uses cookies and similar 
        technologies on our website. By using our website, you consent to the use of cookies as described 
        in this policy.</p>

        <h2 className="text-xl font-semibold mt-6">2. What Are Cookies?</h2>
        <p>Cookies are small text files that are placed on your device when you visit our website. They 
        help us recognize your device and provide various features and functionality. Cookies can be 
        "persistent" or "session" cookies.</p>

        <h2 className="text-xl font-semibold mt-6">3. Types of Cookies We Use</h2>
        <h3>3.1 Essential Cookies</h3>
        <p>These cookies are necessary for the website to function properly. They enable core functionality 
        such as security, network management, and accessibility. You may not opt-out of these cookies.</p>
        <ul>
          <li>Authentication and security</li>
          <li>Session management</li>
          <li>Load balancing</li>
          <li>User preferences</li>
        </ul>

        <h3>3.2 Analytics Cookies</h3>
        <p>We use analytics cookies to understand how visitors interact with our website, helping us improve 
        our services:</p>
        <ul>
          <li>Page view statistics</li>
          <li>Traffic sources</li>
          <li>User behavior patterns</li>
          <li>Performance metrics</li>
        </ul>

        <h3>3.3 Marketing Cookies</h3>
        <p>These cookies track your online activity to help us deliver more relevant advertising or to limit 
        how many times you see an ad:</p>
        <ul>
          <li>Conversion tracking</li>
          <li>Ad targeting and retargeting</li>
          <li>Campaign effectiveness</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. Third-Party Cookies</h2>
        <p>We use services from these third parties that may place cookies on your device:</p>
        <ul>
          <li>Google Analytics (analytics)</li>
          <li>Vercel (hosting and analytics)</li>
          <li>Cal.com (scheduling)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">5. Cookie Management</h2>
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already 
        on your computer and you can set most browsers to prevent them from being placed. However, if you 
        do this, you may have to manually adjust some preferences every time you visit our website and some 
        services and functionalities may not work.</p>

        <h3>5.1 Browser Settings</h3>
        <p>Most browsers allow you to:</p>
        <ul>
          <li>View your cookies</li>
          <li>Delete specific cookies</li>
          <li>Block third party cookies</li>
          <li>Block all cookies</li>
          <li>Block cookies from particular sites</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">6. Do Not Track</h2>
        <p>Some browsers have incorporated "Do Not Track" (DNT) features. When enabled, these send a signal 
        to websites requesting that your browsing is not tracked. However, since there is not yet a common 
        understanding of how to interpret the DNT signal, our website does not currently respond to browser 
        DNT signals.</p>

        <h2 className="text-xl font-semibold mt-6">7. Updates to This Policy</h2>
        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, 
        or our data practices. Any changes will become effective when we post the revised policy on our website.</p>

        <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
        <p>If you have any questions about our use of cookies, please contact us at:</p>
        <ul>
          <li>Email: privacy@akrin.ai</li>
          <li>Address: [Company Address]</li>
        </ul>
      </div>
    </main>
  );
} 