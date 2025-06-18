/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";

export default function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-purple-500/20"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            KMF Digital
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Team", "Process", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-purple-400 transition-colors text-white duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
