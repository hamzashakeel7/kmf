/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

export default function Process() {
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your requirements and define project scope",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Creating wireframes and visual designs that align with your vision",
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with clean, scalable code",
    },
    {
      step: "04",
      title: "Testing",
      description: "Rigorous testing to ensure quality and performance",
    },
    {
      step: "05",
      title: "Launch",
      description: "Deploying your solution and providing ongoing support",
    },
  ];

  return (
    <section id="process" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            How we transform your ideas into reality
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-violet-500 hidden md:block" />

          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 md:px-8">
                <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-3xl font-bold text-purple-400 mr-4">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              <div className="hidden md:block w-8 h-8 bg-purple-500 rounded-full border-4 border-black relative z-10" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
