import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/top_video.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-6xl font-thin tracking-tight text-foreground md:text-7xl lg:text-8xl"
        >
          <span className="block">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              AI-Powered IELTS Speaking Tutor by
            </span>{" "}
            <span className="font-semibold text-white">REMORA</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 max-w-3xl text-lg text-muted-foreground md:text-xl"
        >
          Practice real speaking tests, get instant band scores, analyze your mistakes, 
          and track your progress — all powered by an intelligent AI examiner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="neon-glow-cyan animate-glow-pulse border border-neon-cyan bg-primary/20 px-8 py-6 text-lg font-light hover:bg-primary/30"
          >
            Start 3-Minute Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="neon-border-cyan border-2 bg-transparent px-8 py-6 text-lg font-light hover:bg-primary/10"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo Video
          </Button>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
