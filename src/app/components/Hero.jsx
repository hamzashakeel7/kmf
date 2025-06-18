/* eslint-disable no-unused-vars */
"use client";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Button } from "../../components/ui/button";
import {
  Sparkles,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";

export default function Hero({ scrollYProgress }) {
  const y = useTransform(
    scrollYProgress || new MotionValue(0),
    [0, 1],
    ["0%", "50%"]
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-black to-violet-500/10"
        />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 px-6 py-3 rounded-full border border-purple-500/30 mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 40px rgba(168, 85, 247, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">
              AI-Powered Website Design
            </span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-purple-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            KMF Digital
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-4 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Transform Your Vision Into Reality With Our Revolutionary AI Design
            Generator
          </motion.p>
          <motion.p
            className="text-lg mb-8 text-purple-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            Get a professional website design in seconds, not weeks. Our AI
            creates stunning, custom designs tailored to your business needs
            instantly.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-8 py-4 text-lg group"
              onClick={() =>
                document
                  .getElementById("ai-design-generator")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              Design My Website Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:text-white px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            className="mt-8 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <motion.a
              href="#"
              className="bg-black/40 p-3 rounded-full border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600 transition-colors duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="#"
              className="bg-black/40 p-3 rounded-full border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600 transition-colors duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="#"
              className="bg-black/40 p-3 rounded-full border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600 transition-colors duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <Twitter className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </motion.a>
            <motion.a
              href="#"
              className="bg-black/40 p-3 rounded-full border border-purple-500/30 text-purple-400 hover:text-white hover:bg-purple-600 transition-colors duration-300"
              whileHover={{ y: -5, scale: 1.1 }}
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
