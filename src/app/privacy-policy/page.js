export default function PrivacyPolicy() {
  return (
    <main className="bg-[#E7F8F1] min-h-screen">
      <div className="container-custom py-16 px-4 md:px-0">
        <h1 className="text-4xl font-extrabold text-[#083B3C] mb-4">Sprout Privacy Policy</h1>
        <p className="text-lg mb-8 text-gray-600">Last updated: [Month Day, 2025]</p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">1. Who we are</h2>
          <p className="mb-4 text-[#3B3F44]">Sprout ("we," "us," or "our") is a chat‑first budgeting app for U.S. college students and young adults. We are preparing to incorporate in the State of Maryland. You can reach us at contact@sproutbudget.com.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">2. Who can use Sprout</h2>
          <p className="mb-4 text-[#3B3F44]">Sprout is intended for U.S. residents 18 years of age or older. We do not knowingly collect personal data from anyone under 18. If you are a parent or guardian and believe your child has provided us personal information, please email us so we can delete it.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">3. Information we collect</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#24C27A] text-white">
                  <th className="border p-2 text-left">Category</th>
                  <th className="border p-2 text-left">Examples</th>
                  <th className="border p-2 text-left">How we collect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2">Account info</td>
                  <td className="border p-2">Name, email, hashed password (if you create one), subscription status</td>
                  <td className="border p-2">Directly from you during sign‑up or upgrade</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Financial‑account tokens</td>
                  <td className="border p-2">Secure OAuth or Plaid access tokens that let us retrieve your balances & transactions</td>
                  <td className="border p-2">Via your explicit consent when you link a bank, credit‑card, or loan account</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2">Budget chat data</td>
                  <td className="border p-2">Messages you type to Sprout, category labels, goal amounts</td>
                  <td className="border p-2">From your in‑app activity</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Device & usage data</td>
                  <td className="border p-2">IP address, device type, crash logs, feature clicks</td>
                  <td className="border p-2">Via Google Analytics (GA4), PostHog, and Sentry</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2">Payment data</td>
                  <td className="border p-2">Last 4 digits of card, billing zip, Stripe customer ID</td>
                  <td className="border p-2">Collected and stored by Stripe; Sprout only sees limited tokenized details</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-[#3B3F44]">We never store your full bank credentials or raw transaction history on our servers. All sensitive financial data lives in encrypted third‑party vaults (Plaid & Stripe). Sprout's database holds only the anonymized or tokenized references needed to power your budget.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">4. How we use your information</h2>
          <ul className="list-disc pl-5 mb-4 text-[#3B3F44]">
            <li className="mb-2">Provide the service – display budgets, goals, and spending insights.</li>
            <li className="mb-2">Maintain security and debug – monitor crashes or suspicious logins with Sentry.</li>
            <li className="mb-2">Product analytics – understand which features students love (Google Analytics & PostHog).</li>
            <li className="mb-2">Payment processing – manage subscriptions and billing via Stripe.</li>
            <li className="mb-2">Communications – send wait‑list updates, onboarding tips, and (optional) product news.</li>
          </ul>
          <p className="mb-4 text-[#3B3F44]">You can opt out of marketing emails anytime via the "unsubscribe" link.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">5. Legal bases & disclosures</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#24C27A] text-white">
                  <th className="border p-2 text-left">Purpose</th>
                  <th className="border p-2 text-left">Legal basis (U.S.)</th>
                  <th className="border p-2 text-left">Disclosures</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2">Core budgeting service</td>
                  <td className="border p-2">Contractual necessity (your Terms of Service)</td>
                  <td className="border p-2">None beyond processors listed below</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Analytics & crash logs</td>
                  <td className="border p-2">Legitimate interest (service improvement)</td>
                  <td className="border p-2">Google Analytics, PostHog (self‑hosted), Sentry</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2">Payments</td>
                  <td className="border p-2">Contractual necessity</td>
                  <td className="border p-2">Stripe Payments LLC</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Legal compliance</td>
                  <td className="border p-2">Legal obligation</td>
                  <td className="border p-2">Government agencies if required (e.g., subpoenas)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-[#3B3F44]">We do not sell or share your personal information with advertisers.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">6. Third‑party processors</h2>
          <ul className="list-disc pl-5 mb-4 text-[#3B3F44]">
            <li className="mb-2">Stripe – payments & subscription management</li>
            <li className="mb-2">Plaid (or equivalent aggregator) – secure bank connectivity</li>
            <li className="mb-2">Google Analytics (GA4) – website and app usage stats</li>
            <li className="mb-2">PostHog – in‑app product analytics (self‑hosted on GCP)</li>
            <li className="mb-2">Sentry – error monitoring</li>
          </ul>
          <p className="mb-4 text-[#3B3F44]">Each provider is vetted for SOC 2 or ISO 27001 compliance where available.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">7. Data retention</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#24C27A] text-white">
                  <th className="border p-2 text-left">Data type</th>
                  <th className="border p-2 text-left">Retention period</th>
                  <th className="border p-2 text-left">Deletion trigger</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border p-2">Financial‑account tokens & derived budget data</td>
                  <td className="border p-2">Deleted 14 days after you disconnect all accounts or delete your profile</td>
                  <td className="border p-2">User‑initiated disconnect or deletion</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border p-2">Analytics events</td>
                  <td className="border p-2">26 months (GA4 default)</td>
                  <td className="border p-2">Automatic roll‑off</td>
                </tr>
                <tr className="bg-white">
                  <td className="border p-2">Payment records (Stripe)</td>
                  <td className="border p-2">7 years (tax & accounting)</td>
                  <td className="border p-2">End of statutory period</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-[#3B3F44]">You may delete your account at any time from Settings or by emailing privacy@sproutbudget.com. We'll confirm within 7 business days.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">8. Security</h2>
          <ul className="list-disc pl-5 mb-4 text-[#3B3F44]">
            <li className="mb-2">All traffic is encrypted in transit (TLS 1.2+).</li>
            <li className="mb-2">Secrets stored with Google Secret Manager; data at rest encrypted with AES‑256.</li>
            <li className="mb-2">Internal dashboards require MFA and role‑based access.</li>
            <li className="mb-2">We plan to pursue SOC 2 Type II certification in 2026.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">9. Your privacy rights (U.S.)</h2>
          <p className="mb-4 text-[#3B3F44]">Because Sprout serves only U.S. residents, federal GLBA rules apply to your financial data. Depending on your state (e.g., California's CCPA/CPRA), you may have rights to:</p>
          <ul className="list-disc pl-5 mb-4 text-[#3B3F44]">
            <li className="mb-2">Know what personal data we hold</li>
            <li className="mb-2">Request deletion or correction</li>
            <li className="mb-2">Opt out of data "sales" (we do none)</li>
            <li className="mb-2">Receive a copy of your data</li>
          </ul>
          <p className="mb-4 text-[#3B3F44]">Email privacy@sproutbudget.com with the subject "Privacy Request" and we'll respond within 30 days.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">10. Cookies</h2>
          <p className="mb-4 text-[#3B3F44]">Our public website uses a single first‑party cookie to remember wait‑list form submissions. We do not use advertising cookies or cross‑site tracking pixels.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">11. Changes to this policy</h2>
          <p className="mb-4 text-[#3B3F44]">We'll post any updates here and change the "Last updated" date. Material changes will be emailed to registered users at least 10 days before they take effect.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3 text-[#083B3C]">12. Contact us</h2>
          <p className="mb-4 text-[#3B3F44]">Questions? Email contact@sproutbudget.com or write to us (postal address coming after incorporation).</p>
        </section>

        <section className="bg-[#E2F5EB] p-5 rounded-lg border-l-4 border-[#24C27A]">
          <p className="text-[#083B3C] font-medium">Plain‑English summary: we collect just enough data to power your budget, keep it encrypted, never sell it, and delete it shortly after you leave. If you need anything, we're one email away.</p>
        </section>
      </div>
    </main>
  );
}
