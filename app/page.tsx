import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Code, Laptop, Bot, ArrowRight, CheckCircle } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-blue-800/30 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">X</span>
              </div>
              <h1 className="text-2xl font-bold text-white">webX</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">Technology Solutions</Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">webX</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Your one-stop solution for web development, laptop services, and AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We provide comprehensive technology solutions to help your business thrive in the digital age
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Web Development */}
            <Card className="bg-slate-800/50 border-blue-800/30 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Website & WebApp Development</CardTitle>
                <CardDescription className="text-gray-400">
                  Custom websites and web applications built with modern technologies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                    Responsive Design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                    E-commerce Solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                    Custom Web Apps
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-cyan-400 mr-2" />
                    SEO Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Laptop Services */}
            <Card className="bg-slate-800/50 border-blue-800/30 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">Laptop Sale & Repairs</CardTitle>
                <CardDescription className="text-gray-400">
                  Quality laptops and professional repair services for all brands
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                    New & Refurbished Laptops
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                    Hardware Repairs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                    Software Installation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-purple-400 mr-2" />
                    Data Recovery
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* AI Automation */}
            <Card className="bg-slate-800/50 border-blue-800/30 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-white">AI Automation</CardTitle>
                <CardDescription className="text-gray-400">
                  Intelligent automation solutions to streamline your business processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    Process Automation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    Chatbot Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    Data Analysis
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                    Custom AI Solutions
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-slate-800/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose webX?</h3>
            <p className="text-gray-300 text-lg mb-8">
              We combine technical expertise with innovative solutions to deliver exceptional results. Our team is
              dedicated to helping businesses leverage technology for growth and efficiency.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5+</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Years Experience</h4>
                <p className="text-gray-400">Proven track record in technology solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">24/7</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Support</h4>
                <p className="text-gray-400">Round-the-clock assistance when you need it</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">100%</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Satisfaction</h4>
                <p className="text-gray-400">Committed to delivering quality results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h3>
              <p className="text-gray-400 text-lg">
                Ready to transform your business with technology? Contact us today for a consultation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-blue-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Contact Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">0247847633</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">jonesmccarthy.mj@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-blue-800/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Quick Contact</CardTitle>
                  <CardDescription className="text-gray-400">
                    Send us a message and we'll get back to you soon
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                      <Mail className="mr-2 h-4 w-4" />
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-blue-800/30 bg-slate-900/50 backdrop-blur-sm py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">X</span>
              </div>
              <span className="text-white font-semibold">webX</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 webX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
