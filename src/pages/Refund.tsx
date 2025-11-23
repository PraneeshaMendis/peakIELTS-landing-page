import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Refund = () => {
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
              Refund{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Policy
              </span>
            </h1>
            <p className="text-muted-foreground">
              Effective Date: November 2025
            </p>
            <p className="mt-4 text-muted-foreground">
              PeakIELTS provides subscription-based access to AI IELTS Speaking tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 md:p-12 space-y-8"
          >
            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">1. Refund Eligibility</h2>
              <p className="mb-3 text-muted-foreground">You are eligible for a refund if:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>You were charged by mistake</li>
                <li>You were charged after canceling</li>
                <li>You experienced a technical issue preventing usage</li>
                <li>Paddle confirms a billing error</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">2. Non-Refundable Situations</h2>
              <p className="mb-3 text-muted-foreground">Refunds are not issued for:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Forgetting to cancel</li>
                <li>Not using the service</li>
                <li>Poor IELTS exam results</li>
                <li>Changing your mind</li>
                <li>Partially used subscription periods</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">3. Refund Process</h2>
              <p className="mb-3 text-muted-foreground">
                All payments and refunds are handled by Paddle.com (Merchant of Record).
              </p>
              <p className="mb-3 text-muted-foreground">To request a refund:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Contact Paddle directly through your receipt OR</li>
                <li>
                  Email us at{" "}
                  <a href="mailto:pnethpriya2002@gmail.com" className="text-neon-cyan hover:underline">
                    pnethpriya2002@gmail.com
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-muted-foreground">
                We will assist you and coordinate with Paddle.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-light text-foreground">4. Cancellations</h2>
              <p className="text-muted-foreground">
                You may cancel anytime via your account. Access remains valid until the billing cycle ends.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Refund;
