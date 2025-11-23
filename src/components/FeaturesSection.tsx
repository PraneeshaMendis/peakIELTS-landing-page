import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Target, BarChart3, BookOpen, TrendingUp, Award } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Conversation Practice",
    description: "Speak naturally with AI",
  },
  {
    icon: Target,
    title: "Full IELTS Test Simulation",
    description: "Part 1, 2, and 3",
  },
  {
    icon: Award,
    title: "Instant Band Score",
    description: "Accurate breakdown",
  },
  {
    icon: BookOpen,
    title: "Grammar & Pronunciation Analysis",
    description: "Detailed feedback",
  },
  {
    icon: TrendingUp,
    title: "Personalized Improvements",
    description: "Targeted recommendations",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking Dashboard",
    description: "Monitor your growth",
  },
];

const FeaturesSection = () => {
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
          <h2 className="mb-4 text-4xl font-thin tracking-tight text-foreground md:text-5xl lg:text-6xl">
            A Smarter Way to Prepare for{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              IELTS Speaking
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              >
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                  <Icon className="h-8 w-8 text-neon-cyan transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="mb-2 text-xl font-light text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
