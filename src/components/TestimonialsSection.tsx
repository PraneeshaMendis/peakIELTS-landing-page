import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Student, Malaysia",
    avatar: "SC",
    quote: "RemoraAI IELTS helped me increase from Band 5 to Band 7 in 3 weeks. The AI feedback is incredibly accurate!",
  },
  {
    name: "Ahmed Hassan",
    role: "Engineer, UAE",
    avatar: "AH",
    quote: "The instant scoring system is amazing. I can practice anytime and track my improvements in real-time.",
  },
  {
    name: "Maria Garcia",
    role: "Teacher, Spain",
    avatar: "MG",
    quote: "Best IELTS prep tool I've used. The pronunciation analysis helped me identify issues I never noticed before.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-thin tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card neon-border-cyan group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,229,255,0.3)]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-lg font-light">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-light text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.quote}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
