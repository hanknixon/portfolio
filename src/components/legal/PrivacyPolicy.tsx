import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
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
            Privacy Policy
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-16">
            How I handle your data — clearly and honestly.
          </p>

          <div className="space-y-12">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">1. Data Controller</h2>
              <p className="leading-relaxed text-[17px]">
                The person responsible for processing your personal data on this website is Hank Nixon. You can contact me at{" "}
                <a href="mailto:hank.enixon@gmail.com" className="text-green-400 hover:text-green-300 underline decoration-green-400/30 underline-offset-4 transition-colors">
                  hank.enixon@gmail.com
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">2. What data I collect and why</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Contact enquiries</h3>
                  <p className="leading-relaxed text-[17px]">
                    If you reach out via email, I collect your name, email address and message content to respond to your enquiry. 
                    <br /><span className="text-gray-400">Legal basis:</span> legitimate interest. 
                    <br /><span className="text-gray-400">Retention:</span> until resolved, then deleted within 1 year.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Navigation and performance analytics</h3>
                  <p className="leading-relaxed text-[17px]">
                    I collect anonymized data about how visitors move through the site — which sections attract attention, where people drop off, and how the site performs technically. No personally identifiable information is stored.
                    <br /><span className="text-gray-400">Legal basis:</span> consent. 
                    <br /><span className="text-gray-400">Retention:</span> up to 2 years.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Chatbot & Cookies</h3>
                  <p className="leading-relaxed text-[17px]">
                    If you have accepted cookies, conversations are saved so I can understand what topics interest visitors. If you decline or withdraw consent, saved conversations are deleted automatically.
                    <br /><span className="text-gray-400">Legal basis:</span> consent. 
                    <br /><span className="text-gray-400">Retention:</span> until consent is withdrawn.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">3. No data sold or shared for advertising</h2>
              <p className="leading-relaxed text-[17px]">
                Your data is never sold, rented or shared with third parties for advertising or marketing purposes. Full stop.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">4. Your rights</h2>
              <p className="leading-relaxed text-[17px] mb-4">
                Under the GDPR, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[17px] ml-2 mb-6 text-gray-400">
                <li>Access the personal data I hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request erasure (right to be forgotten)</li>
                <li>Restrict or object to processing</li>
                <li>Request data portability</li>
              </ul>
              <p className="leading-relaxed text-[17px]">
                To exercise any of these rights, email me at{" "}
                <a href="mailto:hank.enixon@gmail.com" className="text-green-400 hover:text-green-300 underline decoration-green-400/30 underline-offset-4 transition-colors">
                  hank.enixon@gmail.com
                </a>. I will respond within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">5. Cookies</h2>
              <p className="leading-relaxed text-[17px]">
                For detailed information about the cookies used on this site, see the{" "}
                <button onClick={() => onPageChange("cookie-policy")} className="text-green-400 hover:text-green-300 underline decoration-green-400/30 underline-offset-4 transition-colors">
                  Cookie Policy
                </button>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">6. Changes to this policy</h2>
              <p className="leading-relaxed text-[17px]">
                This policy may be updated occasionally. The date at the top of this page always reflects the most recent version. Continued use of the site after changes constitutes acceptance of the updated policy.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
