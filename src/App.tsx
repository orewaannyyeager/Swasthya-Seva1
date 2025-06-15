import React, { useState } from 'react';
import { 
  Heart, 
  Truck, 
  Phone, 
  Bot, 
  Users, 
  CreditCard, 
  Package, 
  Radio, 
  Plane, 
  Smartphone, 
  FileText,
  MapPin,
  Mail,
  Facebook,
  Star,
  ChevronRight,
  Menu,
  X,
  Shield,
  Clock,
  Award
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    village: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', phone: '', village: '', service: '' });
  };

  const services = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "TeleHealth on Wheels",
      description: "Mobile medical vans with telemedicine kits that connect rural patients to city doctors via video consultation.",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Missed Call Health Access",
      description: "Just a missed call connects villagers with trained healthcare workers, even without internet connection.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI-Powered Diagnosis Kiosks",
      description: "Solar-powered kiosks for BP, glucose, temperature checkups with AI-driven health suggestions.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Health Ambassadors",
      description: "Local women and youth trained as 'Swastha Saathis' for basic healthcare and health awareness programs.",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Digital Medicine Card",
      description: "Smart health cards that store prescriptions, offer medicine discounts, and work offline for rural areas.",
      color: "from-teal-400 to-teal-600"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Essential Care Kits Delivery",
      description: "Monthly delivery of personalized rural care kits including sanitary pads, ORS, vitamins, and medicines.",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Voice-Based Health Education",
      description: "Audio health content in regional languages delivered via loudspeakers, radio broadcasts, and phones.",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Drone Emergency Delivery",
      description: "Emergency medicine delivery using drones to reach remote villages or disaster-affected areas quickly.",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "One-App for All Health Needs",
      description: "Low-data regional-language mobile app for appointments, medicine orders, health tracking, and SOS alerts.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Digital Health ID",
      description: "Lifetime offline-to-online health record system for every rural citizen with secure data storage.",
      color: "from-cyan-400 to-cyan-600"
    }
  ];

  const testimonials = [
    {
      name: "Sushma Devi",
      village: "Rampur Village, Bihar",
      text: "The mobile van came to our village when my daughter was very sick. The doctor on video call helped us immediately. Now she is healthy and playing again.",
      rating: 5
    },
    {
      name: "Ravi Kumar",
      village: "Khetri Village, Rajasthan",
      text: "I just gave a missed call and the Swastha Saathi came to check my father's blood pressure. The medicine card gives us 40% discount. Very helpful service.",
      rating: 5
    },
    {
      name: "Meera Ben",
      village: "Bavla Village, Gujarat",
      text: "The health education program in Gujarati language helped me understand diabetes. Now I take better care of my family's health. Thank you Swasthya Seva.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-green-600 p-2 rounded-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Swasthya Seva</h1>
                <p className="text-sm text-gray-600">स्वास्थ्य सेवा</p>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Stories</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">Contact</a>
            </nav>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#services" className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors">About</a>
                <a href="#testimonials" className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors">Stories</a>
                <a href="#contact" className="text-gray-700 hover:text-orange-600 font-medium py-2 transition-colors">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 via-orange-500 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Healthcare at Your Doorstep,<br />
            <span className="text-yellow-300">Hope in Every Visit</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Bringing quality healthcare to rural India through innovative technology, 
            community care, and accessible medical services that reach every village.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Know When We're Coming
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#services" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors inline-flex items-center justify-center">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">500+</div>
              <div className="text-gray-700">Villages Served</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">25,000+</div>
              <div className="text-gray-700">Patients Helped</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">100+</div>
              <div className="text-gray-700">Health Ambassadors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">24/7</div>
              <div className="text-gray-700">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Student-Led Innovation for Rural Health
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Founded by passionate students who believe healthcare is a fundamental right, 
              Swasthya Seva bridges the gap between urban medical facilities and rural communities 
              through technology, innovation, and compassionate care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Trusted Care</h4>
              <p className="text-gray-600">Qualified doctors and trained health workers ensuring quality care for every patient.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Always Available</h4>
              <p className="text-gray-600">24/7 emergency support and regular health checkup schedules for all villages.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">Award-Winning</h4>
              <p className="text-gray-600">Recognized by government and NGOs for innovative healthcare delivery solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Healthcare Solutions
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From mobile medical vans to AI-powered diagnostics, we bring modern healthcare 
              directly to rural communities with services designed for local needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
                <div className={`bg-gradient-to-r ${service.color} p-3 rounded-lg w-fit mb-4`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Stories from Our Villages
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real experiences from the people we serve - their health, their hope, their happiness.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.village}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">
              Know When We're Coming to Your Area
            </h3>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Register your village to get notified about our mobile van visits, 
              health camps, and new services. Healthcare is coming to your doorstep!
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8">
              <h4 className="text-2xl font-semibold mb-6">Register Your Village</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    placeholder="Enter mobile number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Village Name & District</label>
                  <input
                    type="text"
                    required
                    value={formData.village}
                    onChange={(e) => setFormData({...formData, village: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    placeholder="Village, District, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  >
                    <option value="" className="text-gray-900">Select a service</option>
                    <option value="mobile-van" className="text-gray-900">Mobile Medical Van</option>
                    <option value="health-camp" className="text-gray-900">Health Camp</option>
                    <option value="emergency" className="text-gray-900">Emergency Support</option>
                    <option value="health-education" className="text-gray-900">Health Education</option>
                    <option value="all-services" className="text-gray-900">All Services</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Register Now
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-6">Get in Touch</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <div className="font-medium">Emergency Helpline</div>
                      <div className="opacity-90">+91 98765 43210</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6" />
                    <div>
                      <div className="font-medium">Email Support</div>
                      <div className="opacity-90">help@swasthyaseva.org</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <div className="font-medium">Service Areas</div>
                      <div className="opacity-90">Bihar, Jharkhand, Odisha, Chhattisgarh</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Phone className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white bg-opacity-20 p-3 rounded-lg hover:bg-opacity-30 transition-colors">
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-3">Emergency? Call Now!</h5>
                <p className="opacity-90 mb-4">
                  For medical emergencies in rural areas, call our 24/7 helpline. 
                  We'll coordinate immediate help or drone delivery if needed.
                </p>
                <a href="tel:+919876543210" className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors inline-flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-green-600 p-2 rounded-lg">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Swasthya Seva</h3>
                  <p className="text-sm text-gray-400">स्वास्थ्य सेवा</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed">
                "Healthcare at Your Doorstep, Hope in Every Visit" - 
                Bringing quality healthcare to rural India through innovation, 
                technology, and compassionate community care.
              </p>
              <p className="text-sm text-gray-500">
                A student-led initiative supported by medical professionals and rural communities.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency: +91 98765 43210</li>
                <li>Help: help@swasthyaseva.org</li>
                <li>Volunteer: join@swasthyaseva.org</li>
                <li>Donate: donate@swasthyaseva.org</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Swasthya Seva. All rights reserved. Made with ❤️ for rural India.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;