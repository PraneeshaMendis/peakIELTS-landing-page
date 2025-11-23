import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const overlayTexts = [
  { text: "Real-time Speech Analysis", position: 20 },
  { text: "Instant Feedback", position: 40 },
  { text: "AI-Powered Evaluation", position: 60 },
  { text: "Detailed Performance Metrics", position: 80 },
];

const VideoShowcaseSection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const element = ref.current as HTMLElement;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress when element is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <section ref={ref} className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-thin tracking-tight text-foreground md:text-5xl lg:text-6xl">
            See{" "}
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              RemoraAI IELTS
            </span>{" "}
            in Action
          </h2>
        </motion.div>

        <div className="relative overflow-hidden rounded-3xl">
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="w-full rounded-3xl"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/80" />

          {/* Animated Text Overlays */}
          {overlayTexts.map((item, index) => {
            const shouldShow = scrollProgress * 100 >= item.position;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, rotateY: -45 }}
                animate={
                  shouldShow
                    ? { opacity: 1, x: 0, rotateY: 0 }
                    : { opacity: 0, x: -50, rotateY: -45 }
                }
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="absolute left-8 glass-card neon-border-cyan rounded-xl px-6 py-3"
                style={{ top: `${item.position}%` }}
              >
                <p className="text-lg font-light text-foreground md:text-xl">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
