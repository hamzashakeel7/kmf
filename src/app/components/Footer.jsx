/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-t from-black to-gray-900 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              KMF Digital
            </motion.div>
            <p className="text-gray-400 mb-6">
              Transforming ideas into digital reality with AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="text-purple-400 hover:text-purple-300 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  AI Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-purple-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-purple-400" />
                hello@kmfdigital.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                0335303639
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                clifton
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 KMF Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
              Terms of Service
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center relative top-10">
          <p className="text-gray-400 text-xs">
            Developed by{" "}
            <a
              href="https://www.webwizdurrani.com"
              target="_blank"
              className="text-orange-500"
            >
              webwizdurrani.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
