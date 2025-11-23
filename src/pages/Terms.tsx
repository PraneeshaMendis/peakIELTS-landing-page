import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Terms = () => {
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
              Terms &{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>
            <p className="text-muted-foreground">
              Effective Date: February 2025
            </p>
            <p className="mt-4 text-muted-foreground">
              Welcome to PeakIELTS. By accessing our website and services, you agree to the following terms.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 space-y-8"
          >
            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">1. Service Overview</h2>
              <p className="text-muted-foreground">
                PeakIELTS offers AI-powered IELTS Speaking practice, automated scoring, analytics, and feedback via subscription.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">2. Accounts</h2>
              <p className="mb-3 text-muted-foreground">To use our service you must:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Create an account or login with Google</li>
                <li>Provide accurate details</li>
                <li>Be at least 13 years old</li>
                <li>Not share your account with others</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">3. Subscription & Billing</h2>
              <p className="mb-3 text-muted-foreground">
                By subscribing, you authorize Paddle.com to charge you monthly until cancellation.
              </p>
              <p className="mb-3 text-muted-foreground">
                Prices and plans are listed at:{" "}
                <a href="/pricing" className="text-neon-cyan hover:underline">
                  peakielts.com/pricing
                </a>
              </p>
              <p className="text-muted-foreground">
                You may cancel anytime via your account or Paddle's billing portal.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">4. Refund Policy</h2>
              <p className="text-muted-foreground">
                Our refund details are available at:{" "}
                <a href="/refund" className="text-neon-cyan hover:underline">
                  peakielts.com/refund
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">5. Merchant of Record</h2>
              <p className="mb-3 text-muted-foreground">
                All payments are processed by Paddle.com, our Merchant of Record. Paddle manages all taxes, billing, and invoicing.
              </p>
              <p className="text-muted-foreground">
                PeakIELTS does not store payment card details.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">6. Acceptable Use Policy</h2>
              <p className="mb-3 text-muted-foreground">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Engage in unlawful activities</li>
                <li>Attempt to reverse engineer or misuse the service</li>
                <li>Abuse or overload the AI system</li>
                <li>Upload harmful or offensive content</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">7. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, branding, and software belong to PeakIELTS. Reproduction or distribution without permission is prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">8. Limitation of Liability</h2>
              <p className="mb-3 text-muted-foreground">PeakIELTS is not liable for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>IELTS exam outcomes</li>
                <li>AI scoring inaccuracies</li>
                <li>Technical outages</li>
                <li>Data loss or service interruptions</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">9. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms at any time. Continued use means acceptance of updated Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">10. Contact</h2>
              <p className="text-muted-foreground">
                📧{" "}
                <a href="mailto:pnethpriya2002@gmail.com" className="text-neon-cyan hover:underline">
                  pnethpriya2002@gmail.com
                </a>
              </p>
              <p className="text-muted-foreground">📍 Sri Lanka</p>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
