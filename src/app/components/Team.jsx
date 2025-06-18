/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";

export default function Team() {
  const team = [
    {
      name: "hamza",
      role: "CEO & Lead Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "furqan",
      role: "AI Specialist",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "sami",
      role: "Mobile Developer",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "jason",
      role: "UI/UX Designer",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <section
      id="team"
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
            Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals behind KMF Digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-purple-500/30"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-purple-400">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
