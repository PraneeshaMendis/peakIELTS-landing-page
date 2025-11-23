import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    subtitle: "After Login",
    price: "Free",
    features: [
      "One 3-minute speaking session",
      "Basic evaluation",
      "No full report",
    ],
    cta: "Start Trial",
    highlight: false,
  },
  {
    name: "Monthly Plan",
    subtitle: "Good Start",
    price: "$15",
    period: "/month",
    features: [
      "3 tests/day",
      "Full evaluation",
      "Feedback breakdown",
      "Progress graphs",
    ],
    cta: "Choose Plan",
    highlight: false,
  },
  {
    name: "Pro Plan",
    subtitle: "Most Popular",
    price: "$25",
    period: "/month",
    features: [
      "6 tests/day",
      "Advanced grammar breakdown",
      "Vocabulary recommendations",
      "Deep analytics",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Elite Plan",
    subtitle: "Best Value",
    price: "$40",
    period: "/month",
    features: [
      "12 tests/day",
      "Live practice session with AI Tutor",
      "Personalized study plan",
      "Advanced feedback reports",
      "Priority support",
    ],
    cta: "Get Elite",
    highlight: false,
  },
  {
    name: "Enterprise",
    subtitle: "Custom",
    price: "Contact",
    features: [
      "Bulk student accounts",
      "Institute dashboard",
      "LMS/API integration",
      "Priority support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-thin tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Plan
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "neon-border-cyan neon-glow-cyan scale-105"
                  : "neon-border-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-4 py-1 text-xs font-light">
                  {plan.subtitle}
                </div>
              )}

              <div className="mb-8">
                <h3 className="mb-2 text-2xl font-light text-foreground">
                  {plan.name}
                </h3>
                {!plan.highlight && plan.subtitle && (
                  <p className="text-sm text-muted-foreground">{plan.subtitle}</p>
                )}
              </div>

              <div className="mb-8">
                <span className="text-5xl font-thin text-foreground">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
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
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
