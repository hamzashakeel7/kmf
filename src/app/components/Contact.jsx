/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can help you
            achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-300">hello@kmfdigital.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-300">0335303639</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-purple-400 mr-4" />
                <span className="text-gray-300">cliftopn</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-gray-900/50 border-purple-500/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none text-white resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
