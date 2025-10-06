import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Heart, 
  Utensils, 
  Recycle, 
  ArrowRight, 
  Users, 
  Leaf, 
  TrendingUp,
  Star,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';

export default function Homepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const modules = [
    {
      icon: BarChart3,
      title: 'FoodTrack',
      description: 'Predict demand & optimize inventory',
      emoji: '📊',
      color: 'blue',
      path: '/foodtrack',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Heart,
      title: 'FoodShare',
      description: 'Connect surplus food with charities',
      emoji: '🤝',
      color: 'green',
      path: '/foodshare',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Utensils,
      title: 'FoodWise',
      description: 'Recipes, tips, gamification for households',
      emoji: '🍽️',
      color: 'orange',
      path: '/foodwise',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Recycle,
      title: 'FoodCycle',
      description: 'Composting & recycling guides',
      emoji: '🌱',
      color: 'emerald',
      path: '/foodcycle',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Restaurant Owner',
      content: 'FoodTrack helped us reduce waste by 40% in just 3 months. The demand prediction is incredibly accurate!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3765353/pexels-photo-3765353.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Mike Chen',
      role: 'Community Manager',
      content: 'Through FoodShare, we\'ve connected with 50+ local charities and helped feed thousands of families.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emma Davis',
      role: 'Home Cook',
      content: 'FoodWise transformed how my family approaches cooking. We waste 60% less food now!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100/20 to-blue-100/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Together Towards{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Zero Food Waste
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join the global movement to reduce food waste through innovative technology, 
              community connections, and sustainable practices. Every meal saved makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Modules
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Join Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Four Pillars of Change
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for businesses, communities, and individuals 
              to tackle food waste at every level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon;
              return (
                <Link
                  key={module.path}
                  to={module.path}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-${module.color}-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-8 w-8 text-${module.color}-600`} />
                    </div>
                    <div className="text-4xl mb-4">{module.emoji}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {module.description}
                    </p>
                    <div className="flex items-center text-green-600 font-semibold group-hover:text-green-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Global Impact</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Real numbers from our community of food waste warriors making a difference worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-white/10 rounded-2xl p-8 group-hover:bg-white/20 transition-colors duration-300">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">10,000+</div>
                <p className="text-lg opacity-90">Meals Shared</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 rounded-2xl p-8 group-hover:bg-white/20 transition-colors duration-300">
                <Leaf className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-lg opacity-90">Tons Saved</p>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 rounded-2xl p-8 group-hover:bg-white/20 transition-colors duration-300">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <div className="text-4xl font-bold mb-2">75%</div>
                <p className="text-lg opacity-90">Waste Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our community members who are making a real impact.
            </p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mb-6 object-cover"
                />
                <div className="flex mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}