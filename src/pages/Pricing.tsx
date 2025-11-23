import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Footer from "@/components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "$15",
      period: "/month",
      highlight: false,
      features: [
        "3 AI Speaking Tests per day",
        "Instant scoring (Fluency, Grammar, Vocabulary, Pronunciation)",
        "Real-time feedback",
        "Monthly progress summary",
        "Email support",
      ],
    },
    {
      name: "Pro Plan",
      price: "$25",
      period: "/month",
      highlight: true,
      features: [
        "6 AI Speaking Tests per day (24hrs)",
        "Advanced analytics",
        "Faster scoring",
        "Deep AI feedback",
        "Priority scoring queue",
        "Smart corrections",
        "All upcoming features included",
      ],
    },
    {
      name: "Elite Plan",
      price: "$40",
      period: "/month",
      highlight: false,
      features: [
        "12 AI Speaking Tests per day (24hrs)",
        "Live practice session with AI Tutor after each test",
        "Personalized study plan",
        "Advanced feedback reports",
        "Priority support",
        "All Pro features included",
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background">
      <div className="relative px-4 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-5xl font-thin tracking-tight text-foreground md:text-6xl lg:text-7xl">
              PeakIELTS{" "}
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Choose the plan that matches your IELTS goals.
            </p>
          </motion.div>

          <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-card relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.highlight
                    ? "neon-border-cyan neon-glow-cyan scale-105"
                    : "neon-border-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-4 py-1 text-xs font-light">
                    Recommended
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-light text-foreground">
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-thin text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-neon-cyan" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "neon-glow-cyan bg-primary/20 hover:bg-primary/30 text-neon-cyan"
                      : "bg-card/50 hover:bg-card/70 text-foreground"
                  } border border-border font-light`}
                  size="lg"
                >
                  Subscribe - {plan.price}/month
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-12 text-center max-w-4xl mx-auto"
          >
            <h2 className="mb-6 text-3xl font-light text-foreground">
              Why PeakIELTS?
            </h2>
            <ul className="grid gap-4 text-left md:grid-cols-2">
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-neon-cyan" />
                <span className="text-muted-foreground">
                  Practice anytime with exam-style speaking questions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-neon-cyan" />
                <span className="text-muted-foreground">AI-powered feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-neon-cyan" />
                <span className="text-muted-foreground">Track improvements</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-neon-cyan" />
                <span className="text-muted-foreground">
                  Affordable monthly pricing
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-neon-cyan" />
                <span className="text-muted-foreground">
                  No appointments required
                </span>
              </li>
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Refund Policy:{" "}
              <a
                href="/refund"
                className="text-neon-cyan hover:underline"
              >
                peakielts.com/refund
              </a>
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
