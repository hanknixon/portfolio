import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const CookiePolicy = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#1d1d22] text-gray-300 pt-32 pb-20 px-6 font-light">
      <div className="max-w-3xl mx-auto relative z-10">

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="group flex items-center gap-2 text-green-400 mb-12 hover:text-green-300 transition-colors"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-wide">Back</span>
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-gray-500 text-sm mb-6">
            Last updated: July 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 brutal-font tracking-tight">
            Cookie Policy
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-16">
            What cookies I use, why, and how to control them.
          </p>

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">1. What are cookies?</h2>
              <p className="leading-relaxed text-[17px]">
                Cookies are small text files stored on your device when you visit a website. They help the site function correctly and give me useful insights to improve the experience. Some cookies are essential; others are optional and only activated with your consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">2. Essential cookies (always active)</h2>
              <p className="leading-relaxed text-[17px] mb-6">
                These cookies are necessary for the site to work and cannot be disabled.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-gray-700 text-gray-400">
                      <th className="py-3 pr-4 font-medium">Name</th>
                      <th className="py-3 px-4 font-medium">Purpose</th>
                      <th className="py-3 px-4 font-medium">Duration</th>
                      <th className="py-3 pl-4 font-medium">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-300">
                    <tr>
                      <td className="py-4 pr-4 font-medium text-white">PHPSESSID</td>
                      <td className="py-4 px-4">Session management (language preference, form state)</td>
                      <td className="py-4 px-4">Session</td>
                      <td className="py-4 pl-4">First-party</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-white">cookie_consent</td>
                      <td className="py-4 px-4">Stores your cookie consent decision</td>
                      <td className="py-4 px-4">365 days</td>
                      <td className="py-4 pl-4">First-party</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-6 tracking-tight">3. Analytics & conversation cookies (require consent)</h2>
              <p className="leading-relaxed text-[17px] mb-6">
                These are only activated if you click Accept. If you decline or withdraw consent, they are not set — and any saved conversation data is deleted.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[15px]">
                  <thead>
                    <tr className="border-b border-gray-700 text-gray-400">
                      <th className="py-3 pr-4 font-medium">Purpose</th>
                      <th className="py-3 px-4 font-medium">What is collected</th>
                      <th className="py-3 pl-4 font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-gray-300">
                    <tr>
                      <td className="py-4 pr-4 font-medium text-white">Navigation analytics</td>
                      <td className="py-4 px-4">Anonymised interaction data: scroll depth, clicks, pages visited. No personally identifiable information.</td>
                      <td className="py-4 pl-4">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-white">Performance measurement</td>
                      <td className="py-4 px-4">Anonymised traffic metrics: pages visited, session duration, technical performance. IP is anonymised.</td>
                      <td className="py-4 pl-4">Up to 2 years</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4 font-medium text-white">Chatbot conversations</td>
                      <td className="py-4 px-4">Messages exchanged, grouped by session. Saved to understand what topics interest visitors. Deleted if consent is withdrawn.</td>
                      <td className="py-4 pl-4">Until consent withdrawn</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">4. Managing your preferences</h2>
              <p className="leading-relaxed text-[17px] mb-4">
                You can change your cookie preferences at any time by clicking <strong>Cookie preferences</strong> in the footer. You can also control or delete cookies via your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[17px] ml-2 mb-6 text-green-400">
                <li><a href="#" className="hover:text-green-300 underline decoration-green-400/30 underline-offset-4">Google Chrome</a></li>
                <li><a href="#" className="hover:text-green-300 underline decoration-green-400/30 underline-offset-4">Mozilla Firefox</a></li>
                <li><a href="#" className="hover:text-green-300 underline decoration-green-400/30 underline-offset-4">Apple Safari</a></li>
                <li><a href="#" className="hover:text-green-300 underline decoration-green-400/30 underline-offset-4">Microsoft Edge</a></li>
              </ul>
              <p className="leading-relaxed text-[17px] text-gray-400 italic">
                Note: disabling cookies may affect the functionality of this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">5. Third-party services</h2>
              <p className="leading-relaxed text-[17px]">
                This site uses third-party services to measure performance and understand how visitors use it. These services may set their own cookies and process data according to their own privacy policies. By accepting cookies on this site, you agree to their use under those policies.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicy;
