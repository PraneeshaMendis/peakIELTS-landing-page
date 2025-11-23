import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ScoreReportSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    { name: "Fluency & Coherence", score: 7.5, max: 9 },
    { name: "Lexical Resource", score: 7.0, max: 9 },
    { name: "Grammatical Range", score: 6.5, max: 9 },
    { name: "Pronunciation", score: 7.0, max: 9 },
  ];

  return (
    <section ref={ref} className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-thin tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Your Band Score,{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Explained Clearly
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card neon-border-purple rounded-3xl p-8 md:p-12"
        >
          {/* Overall Score */}
          <div className="mb-12 text-center">
            <div className="mb-2 text-lg font-light text-muted-foreground">
              Overall Band Score
            </div>
            <div className="neon-glow-cyan text-8xl font-thin text-neon-cyan">
              7.0
            </div>
          </div>

          {/* Category Scores */}
          <div className="space-y-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-light text-foreground">
                    {category.name}
                  </span>
                  <span className="text-lg text-neon-cyan">{category.score}</span>
                </div>
                <div className="relative h-2 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: `${(category.score / category.max) * 100}%` }
                        : { width: 0 }
                    }
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feedback Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 space-y-6"
          >
            <div className="rounded-xl border border-border/30 bg-card/30 p-6">
              <h4 className="mb-2 font-light text-neon-cyan">Strengths</h4>
              <p className="text-sm text-muted-foreground">
                Excellent vocabulary range and natural fluency. Good use of complex sentences.
              </p>
            </div>
            <div className="rounded-xl border border-border/30 bg-card/30 p-6">
              <h4 className="mb-2 font-light text-neon-purple">Areas to Improve</h4>
              <p className="text-sm text-muted-foreground">
                Focus on reducing filler words and improving grammatical accuracy with conditional sentences.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScoreReportSection;
