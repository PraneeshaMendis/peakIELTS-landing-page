import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Start a Test",
    description: "Choose your test type and begin your IELTS speaking session",
  },
  {
    number: "02",
    title: "AI Asks IELTS Questions",
    description: "Experience real IELTS questions from our intelligent AI examiner",
  },
  {
    number: "03",
    title: "You Speak Your Answers",
    description: "Respond naturally while our AI analyzes your speech in real-time",
  },
  {
    number: "04",
    title: "AI Evaluates You",
    description: "Advanced algorithms assess your grammar, vocabulary, and fluency",
  },
  {
    number: "05",
    title: "Get a Detailed Report",
    description: "Receive comprehensive feedback with your band score and improvements",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-thin tracking-tight text-foreground md:text-5xl lg:text-6xl">
            How{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              PeakIELTS Works
            </span>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
              }
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`flex flex-col gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              <div className="flex-1">
                <div className="mb-4 text-6xl font-thin text-neon-cyan/30">
                  {step.number}
                </div>
                <h3 className="mb-3 text-3xl font-light text-foreground">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <div className="glass-card neon-border-cyan flex h-64 w-full flex-1 items-center justify-center rounded-2xl md:h-80">
                <div className="text-center text-muted-foreground">
                  Step {step.number} Visual
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
