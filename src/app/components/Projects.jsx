/* eslint-disable no-unused-vars */
"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description:
        "Full-stack e-commerce solution with AI-powered recommendations",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Healthcare Mobile App",
      category: "Mobile Development",
      description: "Patient management system with telemedicine capabilities",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "AI Analytics Dashboard",
      category: "AI Integration",
      description: "Real-time business intelligence with predictive analytics",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our latest work and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-gray-900/50 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <Badge className="bg-purple-500/20 text-purple-400 mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
