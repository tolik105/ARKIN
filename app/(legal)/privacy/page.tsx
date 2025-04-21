/* eslint-disable react/no-unescaped-entities */

"use client";
import { Container } from "@/components/container";
import "@/app/globals.css";

export default function PrivacyPolicy() {
  return (
    <main className="bg-neutral-50 dark:bg-neutral-950 py-24">
      <div className="soft-card max-w-3xl mx-auto p-8 space-y-6 text-neutral-800 dark:text-neutral-100">
        <h1 className="text-3xl font-bold">Privacy&nbsp;Policy</h1>
        <p><em>Last updated: 21&nbsp;April 2025</em></p>

        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p>AKRIN Inc. ("AKRIN", "we", "us", "our") respects your privacy and is committed 
        to protecting your personal data. This privacy policy explains how we collect, use, 
        and safeguard your information when you use our website or join our waitlist.</p>

        <h2 className="text-xl font-semibold mt-6">2. Information We Collect</h2>
        <h3>2.1 Information you provide us:</h3>
        <ul>
          <li>Name and contact details (email address, phone number)</li>
          <li>Company information (name, size, industry)</li>
          <li>Job title and role</li>
          <li>Communication preferences</li>
        </ul>

        <h3>2.2 Information automatically collected:</h3>
        <ul>
          <li>IP address and location data</li>
          <li>Browser and device information</li>
          <li>Usage data (pages visited, features used)</li>
          <li>Cookies and similar technologies (see our <a href="/cookies">Cookie Policy</a>)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">3. How We Use Your Information</h2>
        <ul>
          <li>To manage your waitlist registration and account</li>
          <li>To send you product updates and marketing communications (with consent)</li>
          <li>To analyze and improve our website performance</li>
          <li>To comply with legal obligations</li>
          <li>To detect and prevent fraud or security breaches</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">4. Legal Basis for Processing</h2>
        <p>We process your personal data under the following legal bases:</p>
        <ul>
          <li><strong>Consent:</strong> For marketing communications and cookies</li>
          <li><strong>Contract:</strong> To provide our services and manage waitlist</li>
          <li><strong>Legitimate Interests:</strong> To improve our services and security</li>
          <li><strong>Legal Obligation:</strong> To comply with applicable laws</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">5. Data Sharing and International Transfers</h2>
        <p>We may share your data with:</p>
        <ul>
          <li>Service providers (hosting, analytics, email services)</li>
          <li>Professional advisers (lawyers, auditors)</li>
          <li>Law enforcement when required by law</li>
        </ul>
        <p>Data may be transferred outside Japan with appropriate safeguards under APPI 
        and GDPR standards.</p>

        <h2 className="text-xl font-semibold mt-6">6. Data Retention</h2>
        <p>We retain your data for:</p>
        <ul>
          <li>Waitlist data: 24 months or until service launch</li>
          <li>Marketing preferences: Until you unsubscribe</li>
          <li>Usage data: 12 months</li>
          <li>Legal requirements: As required by law</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">7. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing</li>
          <li>Data portability</li>
          <li>Withdraw consent</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">8. Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your 
        data, including encryption, access controls, and regular security assessments.</p>

        <h2 className="text-xl font-semibold mt-6">9. Children's Privacy</h2>
        <p>Our services are not intended for children under 16. We do not knowingly 
        collect data from children.</p>

        <h2 className="text-xl font-semibold mt-6">10. Updates to This Policy</h2>
        <p>We may update this policy occasionally. Material changes will be notified 
        via email or website notice.</p>

        <h2 className="text-xl font-semibold mt-6">11. Contact Us</h2>
        <p>For privacy inquiries:</p>
        <ul>
          <li>Email: privacy@akrin.ai</li>
          <li>Address: [Company Address]</li>
          <li>Data Protection Officer: dpo@akrin.ai</li>
        </ul>
      </div>
    </main>
  );
} 