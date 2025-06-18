/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Smartphone, Globe, Zap } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Integration",
      description:
        "Intelligent solutions powered by artificial intelligence to automate and enhance your business.",
    },
  ];

  return (
    <section
      id="about"
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
            About KMF Digital
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a cutting-edge software house specializing in mobile and web
            applications, enhanced with the power of artificial intelligence to
            deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
