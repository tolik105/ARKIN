/* eslint-disable react/no-unescaped-entities */

"use client";
import { Container } from "@/components/container";
import "@/app/globals.css";

export default function Terms() {
  return (
    <main className="bg-neutral-50 dark:bg-neutral-950 py-24">
      <div className="soft-card max-w-3xl mx-auto p-8 space-y-6 text-neutral-800 dark:text-neutral-100">
        <h1 className="text-3xl font-bold">Terms of&nbsp;Service</h1>
        <p><em>Last updated: 21&nbsp;April 2025</em></p>

        <h2 className="text-xl font-semibold mt-6">1. Agreement to Terms</h2>
        <p>By accessing our website or joining our waitlist, you agree to be bound by these Terms of Service 
        ("Terms") and our <a href="/privacy">Privacy Policy</a>. If you disagree with any part of these terms, 
        you may not access our services.</p>

        <h2 className="text-xl font-semibold mt-6">2. Early-Access Status</h2>
        <p>Our platform is currently in early-access phase. By joining our waitlist:</p>
        <ul>
          <li>You acknowledge the service is not yet publicly available</li>
          <li>You understand features and availability may be limited</li>
          <li>You accept there may be changes before public release</li>
          <li>You agree not to share access credentials or invite links</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. Intellectual Property Rights</h2>
        <p>The Service and its original content (excluding Content provided by users), features, and functionality are 
        and will remain the exclusive property of AKRIN Inc. and its licensors. The Service is protected by copyright, 
        trademark, and other laws of Japan and foreign countries.</p>

        <h3>3.1 License Grant</h3>
        <p>Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to:</p>
        <ul>
          <li>Access and use the Service for your internal business purposes</li>
          <li>Create and manage AI agents within our platform guidelines</li>
          <li>Download and store necessary components for Service operation</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. User Responsibilities</h2>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate registration information</li>
          <li>Maintain the security of your account</li>
          <li>Use the Service in compliance with applicable laws</li>
          <li>Not engage in unauthorized access or use</li>
          <li>Not introduce malicious code or interfere with the Service</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">5. Prohibited Activities</h2>
        <p>You may not:</p>
        <ul>
          <li>Use the Service for any illegal purpose</li>
          <li>Attempt to gain unauthorized access to systems</li>
          <li>Interfere with other users' access to the Service</li>
          <li>Copy, modify, or create derivative works</li>
          <li>Reverse engineer the Service</li>
          <li>Use the Service to build a competing product</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">6. Data Processing and Security</h2>
        <p>We implement industry-standard security measures but cannot guarantee absolute security. 
        You are responsible for:</p>
        <ul>
          <li>Maintaining confidentiality of your credentials</li>
          <li>Ensuring lawful basis for data processing</li>
          <li>Complying with data protection regulations</li>
          <li>Notifying us of unauthorized access</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">7. Disclaimer of Warranties</h2>
        <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
        WHETHER EXPRESS OR IMPLIED. We do not warrant that the Service will be uninterrupted, 
        secure, or error-free.</p>

        <h2 className="text-xl font-semibold mt-6">8. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, AKRIN INC. SHALL NOT BE LIABLE FOR ANY 
        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF 
        PROFITS OR REVENUES.</p>

        <h2 className="text-xl font-semibold mt-6">9. Indemnification</h2>
        <p>You agree to indemnify and hold harmless AKRIN Inc. and its officers, directors, 
        employees, and agents from any claims arising from your use of the Service or violation 
        of these Terms.</p>

        <h2 className="text-xl font-semibold mt-6">10. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. We will notify you of any 
        material changes via email or through the Service.</p>

        <h2 className="text-xl font-semibold mt-6">11. Governing Law</h2>
        <p>These Terms shall be governed by the laws of Japan. Any disputes shall be resolved 
        in the Tokyo District Court.</p>

        <h2 className="text-xl font-semibold mt-6">12. Contact</h2>
        <p>For any questions about these Terms, please contact us at:</p>
        <ul>
          <li>Email: legal@akrin.ai</li>
          <li>Address: [Company Address]</li>
        </ul>
      </div>
    </main>
  );
} 