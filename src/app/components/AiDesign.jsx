/* eslint-disable no-unused-vars */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import {
  Sparkles,
  Wand2,
  Palette,
  Layout,
  Zap,
  CheckCircle,
  X,
  ArrowRight,
  Loader2,
  Star,
  Heart,
  ThumbsUp,
} from "lucide-react";

export default function AIDesignGenerator() {
  const [websiteType, setWebsiteType] = useState("");
  const [designStyle, setDesignStyle] = useState("");
  const [colorScheme, setColorScheme] = useState("");
  const [requirements, setRequirements] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesign, setGeneratedDesign] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const websiteTypes = [
    { value: "real-estate", label: "Real Estate", icon: "🏠" },
    { value: "restaurant", label: "Restaurant", icon: "🍽️" },
    { value: "store", label: "E-Commerce Store", icon: "🛍️" },
    { value: "portfolio", label: "Portfolio", icon: "💼" },
    { value: "blog", label: "Blog", icon: "📝" },
    { value: "corporate", label: "Corporate", icon: "🏢" },
    { value: "healthcare", label: "Healthcare", icon: "🏥" },
    { value: "education", label: "Education", icon: "🎓" },
  ];

  const designStyles = [
    { value: "modern", label: "Modern & Minimalist" },
    { value: "creative", label: "Creative & Artistic" },
    { value: "professional", label: "Professional & Clean" },
    { value: "playful", label: "Playful & Colorful" },
    { value: "elegant", label: "Elegant & Luxury" },
    { value: "tech", label: "Tech & Futuristic" },
  ];

  const colorSchemes = [
    {
      value: "blue-white",
      label: "Blue & White",
      colors: ["#3B82F6", "#FFFFFF"],
    },
    {
      value: "dark-cyan",
      label: "Dark & Cyan",
      colors: ["#000000", "#06B6D4"],
    },
    {
      value: "green-nature",
      label: "Green & Nature",
      colors: ["#10B981", "#F0FDF4"],
    },
    {
      value: "purple-gradient",
      label: "Purple Gradient",
      colors: ["#8B5CF6", "#EC4899"],
    },
    {
      value: "orange-warm",
      label: "Orange & Warm",
      colors: ["#F97316", "#FFF7ED"],
    },
    {
      value: "monochrome",
      label: "Monochrome",
      colors: ["#000000", "#FFFFFF"],
    },
  ];

  const handleGenerate = async () => {
    if (!websiteType || !designStyle || !colorScheme) {
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation process
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Mock generated design
    const mockDesign = {
      id: Date.now(),
      type: websiteType,
      style: designStyle,
      colors: colorScheme,
      preview: `/placeholder.svg?height=400&width=600&text=${websiteType.toUpperCase()}+Design`,
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Loading",
        "Mobile Friendly",
        "Modern UI/UX",
      ],
    };

    setGeneratedDesign(mockDesign);
    setIsGenerating(false);
    setShowResult(true);
  };

  const handleConvinced = () => {
    // This would redirect to the form page
    alert("Redirecting to project details form...");
  };

  const handleNotConvinced = () => {
    setShowResult(false);
    setGeneratedDesign(null);
    // Reset form or show alternatives
  };

  return (
    <section
      id="ai-design-generator"
      className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative w-full overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
              AI-Powered Design Generator
            </span>
            <Sparkles className="w-5 h-5 text-purple-400" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              Design Your Website
            </span>
            <br />
            <span className="text-white">In Seconds</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of web design. Our AI creates stunning,
            professional websites tailored to your business in just seconds. No
            design skills required.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="generator"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-purple-500/30 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Form */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Layout className="w-5 h-5 text-purple-400" />
                          Website Type
                        </label>
                        <Select
                          value={websiteType}
                          onValueChange={setWebsiteType}
                        >
                          <SelectTrigger className="w-full h-12 bg-black/50 border-gray-700 text-white [&>span]:text-white [&>svg]:text-purple-400">
                            <SelectValue placeholder="Choose your website type" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-white">
                            {websiteTypes.map((type) => (
                              <SelectItem
                                key={type.value}
                                value={type.value}
                                className="text-white hover:text-purple-400 focus:text-white"
                              >
                                <span className="flex items-center gap-2">
                                  <span>{type.icon}</span>
                                  {type.label}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Wand2 className="w-5 h-5 text-purple-400" />
                          Design Style
                        </label>
                        <Select
                          value={designStyle}
                          onValueChange={setDesignStyle}
                        >
                          <SelectTrigger className="w-full h-12 bg-black/50 border-gray-700 text-white [&>span]:text-white [&>svg]:text-purple-400">
                            <SelectValue placeholder="Select design style" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-white">
                            {designStyles.map((style) => (
                              <SelectItem
                                key={style.value}
                                value={style.value}
                                className="text-white hover:text-purple-400 focus:text-white"
                              >
                                {style.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Palette className="w-5 h-5 text-purple-400" />
                          Color Scheme
                        </label>
                        <Select
                          value={colorScheme}
                          onValueChange={setColorScheme}
                        >
                          <SelectTrigger className="w-full h-12 bg-black/50 border-gray-700 text-white [&>span]:text-white [&>svg]:text-purple-400">
                            <SelectValue placeholder="Pick color scheme" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900 border-gray-700 text-white">
                            {colorSchemes.map((scheme) => (
                              <SelectItem
                                key={scheme.value}
                                value={scheme.value}
                                className="text-white hover:text-purple-400 focus:text-white"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="flex gap-1">
                                    {scheme.colors.map((color, index) => (
                                      <div
                                        key={index}
                                        className="w-4 h-4 rounded-full border border-gray-600"
                                        style={{ backgroundColor: color }}
                                      />
                                    ))}
                                  </div>
                                  {scheme.label}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </div>

                    {/* Right Column - Additional Requirements */}
                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Zap className="w-5 h-5 text-purple-400" />
                          Additional Requirements
                        </label>
                        <Textarea
                          value={requirements}
                          onChange={(e) => setRequirements(e.target.value)}
                          placeholder="Describe any specific features, content, or style preferences you have in mind..."
                          className="w-full h-32 bg-black/50 border-gray-700 focus:border-purple-500 text-gray-300 resize-none"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 p-6 rounded-lg border border-purple-500/20"
                      >
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-400" />
                          What You'll Get:
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Professional design mockup
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Mobile-responsive layout
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            SEO-optimized structure
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            Modern UI components
                          </li>
                        </ul>
                      </motion.div>
                    </div>
                  </div>

                  {/* Generate Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-8 text-center"
                  >
                    <Button
                      onClick={handleGenerate}
                      disabled={
                        !websiteType ||
                        !designStyle ||
                        !colorScheme ||
                        isGenerating
                      }
                      className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                          Generating Your Design...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
                          Generate My Website Design
                          <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-5xl mx-auto bg-gradient-to-br from-gray-900/80 to-black/80 border-2 border-green-500/30 backdrop-blur-xl shadow-2xl">
                <CardContent className="p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                  >
                    <div className="inline-flex items-center gap-2 bg-green-500/20 px-6 py-3 rounded-full border border-green-500/30 mb-4">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-medium">
                        Design Generated Successfully!
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      Your AI-Generated Website Design
                    </h3>
                    <p className="text-gray-300">
                      Here's your custom{" "}
                      {websiteTypes.find((t) => t.value === websiteType)?.label}{" "}
                      website design
                    </p>
                  </motion.div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Design Preview */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="relative group">
                        <img
                          src={generatedDesign?.preview || "/placeholder.svg"}
                          alt="Generated Design"
                          className="w-full rounded-lg shadow-2xl border border-gray-700 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Design Details */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4">
                          Design Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {generatedDesign?.features.map((feature, index) => (
                            <Badge
                              key={index}
                              className="bg-purple-500/20 text-purple-400 border-purple-500/30 justify-center py-2"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-gray-700">
                        <h5 className="text-lg font-semibold text-white mb-3">
                          Design Specifications:
                        </h5>
                        <div className="space-y-2 text-gray-300">
                          <p>
                            <span className="text-cyan-400">Type:</span>{" "}
                            {
                              websiteTypes.find((t) => t.value === websiteType)
                                ?.label
                            }
                          </p>
                          <p>
                            <span className="text-cyan-400">Style:</span>{" "}
                            {
                              designStyles.find((s) => s.value === designStyle)
                                ?.label
                            }
                          </p>
                          <p>
                            <span className="text-cyan-400">Colors:</span>{" "}
                            {
                              colorSchemes.find((c) => c.value === colorScheme)
                                ?.label
                            }
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 p-6 rounded-lg border border-yellow-500/20">
                        <div className="flex items-center gap-2 mb-3">
                          <Heart className="w-5 h-5 text-red-400" />
                          <h5 className="text-lg font-semibold text-white">
                            Love This Design?
                          </h5>
                        </div>
                        <p className="text-gray-300 mb-4">
                          This design is tailored specifically for your business
                          needs. Ready to bring it to life?
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
                  >
                    <Button
                      onClick={handleConvinced}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <ThumbsUp className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      I'm Convinced! Let's Build This
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>

                    <Button
                      onClick={handleNotConvinced}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
                    >
                      <X className="w-5 h-5 mr-3" />
                      Try Different Options
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
