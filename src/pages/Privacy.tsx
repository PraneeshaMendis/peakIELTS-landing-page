import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <div className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="mb-6 text-5xl font-thin tracking-tight text-foreground md:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-muted-foreground">
              Effective Date: February 2025
            </p>
            <p className="mt-4 text-muted-foreground">
              Welcome to PeakIELTS. Your privacy is important to us.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 space-y-8"
          >
            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">1. Information We Collect</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Name, email, login credentials</li>
                <li>Usage data, test recordings (if applicable)</li>
                <li>Cookies & analytics</li>
                <li>Payment information (processed by Paddle, NOT stored by us)</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">2. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide speaking tests and feedback</li>
                <li>Ensure account security</li>
                <li>Analytics and error monitoring</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">3. Payment Processing via Paddle</h2>
              <p className="mb-3 text-muted-foreground">
                PeakIELTS uses Paddle as Merchant of Record. Paddle handles:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Payments</li>
                <li>Billing</li>
                <li>Tax compliance</li>
                <li>Invoices</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Your card data is securely handled by Paddle.
              </p>
              <p className="text-muted-foreground">
                Learn more:{" "}
                <a
                  href="https://paddle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:underline"
                >
                  paddle.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">4. Cookies</h2>
              <p className="text-muted-foreground">
                We use cookies for analytics and site functionality. You may disable them in your browser.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">5. Data Rights</h2>
              <p className="mb-3 text-muted-foreground">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access your data</li>
                <li>Request deletion</li>
                <li>Correct inaccuracies</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                Contact us at:{" "}
                <a href="mailto:pnethpriya2002@gmail.com" className="text-neon-cyan hover:underline">
                  pnethpriya2002@gmail.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">6. Children's Privacy</h2>
              <p className="text-muted-foreground">
                PeakIELTS is not intended for children under 5.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">7. Security</h2>
              <p className="text-muted-foreground">
                We use standard security measures, but no system is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">8. Contact Information</h2>
              <p className="text-muted-foreground">
                📧{" "}
                <a href="mailto:pnethpriya2002@gmail.com" className="text-neon-cyan hover:underline">
                  pnethpriya2002@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">
                📍 PeakIELTS, 264/2, Gorakagahawaththa, Thanthirimulla, Panadura, Sri Lanka
              </p>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
