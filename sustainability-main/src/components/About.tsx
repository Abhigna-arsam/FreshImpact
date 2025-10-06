import { 
  Target, 
  Users, 
  Globe, 
  Heart,
  Award,
  TrendingUp,
  Leaf,
  Shield
} from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Reducing global food waste through innovative technology and community action'
    },
    {
      icon: Users,
      title: 'Community-First',
      description: 'Building connections between individuals, businesses, and organizations'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating sustainable solutions that scale across communities worldwide'
    },
    {
      icon: Heart,
      title: 'Compassionate',
      description: 'Ensuring no one goes hungry while reducing environmental impact'
    }
  ];

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former sustainability consultant with 10+ years in food system optimization',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Technology leader passionate about using AI to solve environmental challenges',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Emily Johnson',
      role: 'Head of Sustainability',
      bio: 'Environmental scientist and researcher with expertise in food system sustainability',
      image: 'https://images.pexels.com/photos/3765353/pexels-photo-3765353.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Alex Thompson',
      role: 'Head of Community',
      bio: 'Community organizer dedicated to building partnerships with local organizations',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const milestones = [
    { year: '2021', title: 'Company Founded', description: 'Started with a vision to eliminate food waste' },
    { year: '2022', title: 'First 1,000 Users', description: 'Reached our initial community milestone' },
    { year: '2023', title: 'Partnership Program', description: 'Launched partnerships with major food retailers' },
    { year: '2024', title: 'Global Expansion', description: 'Extended services to 50+ cities worldwide' },
    { year: '2025', title: 'AI Innovation', description: 'Introduced advanced predictive analytics' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">
            About FoodImpact
          </h1>
          <p className="text-xl text-green-100 leading-relaxed">
            We're on a mission to create a world without food waste. Through innovative technology, 
            community partnerships, and sustainable practices, we're building a future where every 
            meal has purpose and nothing goes to waste.
          </p>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Food waste is one of the most pressing challenges of our time. With over 1.3 billion tons 
                of food wasted globally each year, we saw an opportunity to make a meaningful difference. 
                FoodImpact was born from the belief that technology can bridge the gap between food surplus 
                and food insecurity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive platform connects businesses with organizations, empowers individuals 
                with knowledge, and provides the tools needed to create lasting change in our communities.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-green-50 rounded-xl p-6">
                <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">75%</div>
                <p className="text-gray-600">Average Waste Reduction</p>
              </div>
              <div className="text-center bg-blue-50 rounded-xl p-6">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
                <p className="text-gray-600">Active Users</p>
              </div>
              <div className="text-center bg-purple-50 rounded-xl p-6">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <p className="text-gray-600">Cities Served</p>
              </div>
              <div className="text-center bg-orange-50 rounded-xl p-6">
                <Award className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">25M</div>
                <p className="text-gray-600">Meals Saved</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and drive our commitment to positive change
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working together to create a sustainable future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our mission to eliminate food waste</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Leaf className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you're a business looking to optimize operations, an organization seeking to help communities, 
            or an individual passionate about sustainability, there's a place for you in our movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}