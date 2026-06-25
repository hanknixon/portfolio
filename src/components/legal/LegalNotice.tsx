import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const LegalNotice = ({ onPageChange }: { onPageChange: (page: string) => void }) => {
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
            Last updated: March 2026
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 brutal-font tracking-tight">
            Legal Notice
          </h1>
          
          <div className="space-y-12 mt-16">
            
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">1. Website Owner</h2>
              <div className="leading-relaxed text-[17px] space-y-2 mb-6">
                <p><strong className="text-white">Name:</strong> Hank Emmanuel Nixon</p>
                <p><strong className="text-white">Email:</strong> <a href="mailto:hank.enixon@gmail.com" className="text-green-400 hover:text-green-300 underline decoration-green-400/30 underline-offset-4">hank.enixon@gmail.com</a></p>
                <p><strong className="text-white">Website:</strong> www.hanknixon.me</p>
              </div>
              <p className="leading-relaxed text-[17px]">
                This website is a personal portfolio operated by Hank Emmanuel Nixon and does not represent a registered company, partnership, or commercial enterprise unless otherwise stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">2. Purpose</h2>
              <p className="leading-relaxed text-[17px]">
                This website is intended to present the professional experience, projects, achievements, and portfolio of Hank Emmanuel Nixon, Software Engineer. The information provided is for informational and professional networking purposes only and does not constitute a binding offer of services, employment, partnership, or commercial transaction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">3. Intellectual Property</h2>
              <p className="leading-relaxed text-[17px] mb-4">
                Unless otherwise indicated, all content on this website, including but not limited to text, source code, designs, graphics, images, case studies, documentation, and other materials, is the intellectual property of Hank Emmanuel Nixon.
              </p>
              <p className="leading-relaxed text-[17px] mb-4">
                Content made available through this website is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) License. You may copy, share, and adapt the material provided that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[17px] ml-2 mb-6 text-gray-400">
                <li>Appropriate credit is given to the original author;</li>
                <li>The material is not used for commercial purposes; and</li>
                <li>Any modified or derivative works are distributed under the same license.</li>
              </ul>
              <p className="leading-relaxed text-[17px]">
                Any third-party trademarks, logos, brand names, or client materials displayed on this website remain the property of their respective owners and are used solely for identification, reference, or portfolio purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">4. Disclaimer and Limitation of Liability</h2>
              <p className="leading-relaxed text-[17px] mb-4">
                Reasonable efforts are made to ensure that the information published on this website is accurate and up to date. However, no warranties or representations, express or implied, are made regarding the completeness, accuracy, reliability, or suitability of the information provided.
              </p>
              <p className="leading-relaxed text-[17px] mb-4">
                The content on this website is provided for general informational purposes only. Visitors use the information at their own discretion and risk.
              </p>
              <p className="leading-relaxed text-[17px]">
                To the fullest extent permitted by applicable law, Hank Emmanuel Nixon shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of, or reliance upon, this website or its content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">5. External Links</h2>
              <p className="leading-relaxed text-[17px] mb-4">
                This website may contain links to third-party websites for informational or convenience purposes. Hank Emmanuel Nixon has no control over and assumes no responsibility for the content, policies, security, availability, or practices of any third-party websites.
              </p>
              <p className="leading-relaxed text-[17px]">
                The inclusion of any external link does not imply endorsement or affiliation unless expressly stated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4 tracking-tight">6. Governing Law</h2>
              <p className="leading-relaxed text-[17px] mb-4">
                This Legal Notice shall be governed by and construed in accordance with the laws applicable in the jurisdiction where the website owner is legally resident or conducts business operations.
              </p>
              <p className="leading-relaxed text-[17px]">
                Any disputes arising from or relating to the use of this website shall be subject to the exclusive jurisdiction of the competent courts of that jurisdiction, unless otherwise required by applicable law.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalNotice;
