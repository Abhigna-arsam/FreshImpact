import { 
  Recycle, 
  Leaf, 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Users,
  CheckCircle,
  Sprout,
  TreePine,
  Droplets
} from 'lucide-react';

export default function FoodCycle() {
  const guides = [
    {
      title: 'Composting Basics for Beginners',
      description: 'Learn the fundamentals of home composting and turn your food scraps into garden gold.',
      readTime: '8 min read',
      category: 'Composting',
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Advanced Vermicomposting Techniques',
      description: 'Master worm composting to accelerate decomposition and create nutrient-rich fertilizer.',
      readTime: '12 min read',
      category: 'Vermicomposting',
      difficulty: 'Advanced',
      image: 'https://images.pexels.com/photos/4505012/pexels-photo-4505012.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Zero Waste Kitchen Setup',
      description: 'Transform your kitchen into a zero-waste zone with practical tips and sustainable practices.',
      readTime: '6 min read',
      category: 'Zero Waste',
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/4099355/pexels-photo-4099355.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Urban Gardening with Compost',
      description: 'Use your homemade compost to create thriving gardens in small urban spaces.',
      readTime: '10 min read',
      category: 'Urban Gardening',
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/4505166/pexels-photo-4505166.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Bokashi Fermentation Method',
      description: 'Explore this Japanese composting technique that can handle all types of food waste.',
      readTime: '9 min read',
      category: 'Fermentation',
      difficulty: 'Intermediate',
      image: 'https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Community Composting Programs',
      description: 'Start or join community composting initiatives to amplify your environmental impact.',
      readTime: '7 min read',
      category: 'Community',
      difficulty: 'Beginner',
      image: 'https://images.pexels.com/photos/4503274/pexels-photo-4503274.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const processes = [
    {
      title: 'Collection',
      description: 'Separate organic waste from regular trash',
      icon: Recycle,
      color: 'blue'
    },
    {
      title: 'Composting',
      description: 'Break down materials using natural decomposition',
      icon: Sprout,
      color: 'green'
    },
    {
      title: 'Fertilization',
      description: 'Use rich compost to nourish plants and soil',
      icon: TreePine,
      color: 'emerald'
    }
  ];

  const stats = [
    { label: 'CO₂ Reduced', value: '2.3 tons', icon: Leaf },
    { label: 'Compost Created', value: '450 lbs', icon: Sprout },
    { label: 'Water Saved', value: '1,200 gal', icon: Droplets }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Close the Loop with
              <span className="block text-emerald-200">FoodCycle</span>
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover comprehensive guides for composting, recycling, and sustainable practices. 
              Transform your food waste into valuable resources for a healthier planet.
            </p>
          </div>

          {/* Process Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-10 w-10" />
                    </div>
                    {index < processes.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full">
                        <ArrowRight className="h-6 w-6 text-white/60 mx-auto" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-emerald-100">{process.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Environmental Impact</h2>
            <p className="text-xl text-gray-600">See the positive change you're making through sustainable practices</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
                  <Icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Guides & Resources
              </h2>
              <p className="text-xl text-gray-600">
                Expert-curated content to help you master sustainable practices
              </p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>All Categories</option>
                <option>Composting</option>
                <option>Zero Waste</option>
                <option>Urban Gardening</option>
              </select>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={guide.image} 
                    alt={guide.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm ${
                      guide.difficulty === 'Beginner' ? 'text-green-700' :
                      guide.difficulty === 'Intermediate' ? 'text-yellow-700' : 'text-red-700'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{guide.category}</span>
                    <span className="text-gray-300">•</span>
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500">{guide.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {guide.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                    Read Guide
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Users className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Sustainability Community
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Connect with like-minded individuals, share your composting journey, 
              and learn from experienced sustainable living practitioners.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Expert Tips</p>
                <p className="text-sm text-gray-600">Weekly advice from sustainability experts</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Community Support</p>
                <p className="text-sm text-gray-600">Get help from fellow eco-warriors</p>
              </div>
              <div className="text-center">
                <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">Track Progress</p>
                <p className="text-sm text-gray-600">Monitor your environmental impact</p>
              </div>
            </div>
            
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Sustainability Journey Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Every step towards sustainable living makes a difference. 
            Begin with small changes that create lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Start Composting Guide
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Browse All Guides
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}