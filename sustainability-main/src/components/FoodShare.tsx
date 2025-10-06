import { 
  MapPin, 
  Heart, 
  Users, 
  Clock, 
  ArrowRight, 
  Phone, 
  Mail,
  Navigation,
  Package,
  CheckCircle,
  Truck
} from 'lucide-react';

export default function FoodShare() {
  const donors = [
    { name: 'Green Valley Restaurant', type: 'Restaurant', distance: '0.5 mi', items: '15 meals', status: 'available' },
    { name: 'Metro Grocery Store', type: 'Grocery', distance: '1.2 mi', items: '50 items', status: 'available' },
    { name: 'University Cafeteria', type: 'Institution', distance: '2.1 mi', items: '100 portions', status: 'pending' }
  ];

  const charities = [
    { name: 'Hope Community Center', type: 'Food Bank', capacity: '200 people', time: 'Open until 6 PM' },
    { name: 'Shelter House', type: 'Homeless Shelter', capacity: '80 people', time: '24/7 Available' },
    { name: 'Youth Center', type: 'Community Center', capacity: '150 people', time: 'Open until 8 PM' }
  ];

  const steps = [
    { 
      icon: Package, 
      title: 'Post', 
      description: 'List your surplus food with details and pickup time',
      color: 'blue'
    },
    { 
      icon: Heart, 
      title: 'Connect', 
      description: 'Get matched with nearby charities and organizations',
      color: 'green'
    },
    { 
      icon: Truck, 
      title: 'Pickup', 
      description: 'Coordinate pickup and deliver food to those who need it',
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-6">
              Share Food,
              <span className="block text-green-200">Share Hope</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Connect surplus food with local charities and communities. 
              Every shared meal creates a ripple of positive impact in your neighborhood.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="bg-white/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-10 w-10" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full">
                        <ArrowRight className="h-6 w-6 text-white/60 mx-auto" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-green-100">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Map Interface */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h2 className="text-2xl font-bold text-gray-900">Food Sharing Network</h2>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>All Categories</option>
                    <option>Restaurants</option>
                    <option>Grocery Stores</option>
                    <option>Cafeterias</option>
                  </select>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Add Food Donation
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
              {/* Map Area */}
              <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-blue-50 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Food Map</h3>
                    <p className="text-gray-500 max-w-sm">
                      Real-time locations of food donors and recipient organizations in your area
                    </p>
                    <div className="mt-8 grid grid-cols-2 gap-4 max-w-xs mx-auto">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Donors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">Recipients</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar with listings */}
              <div className="bg-gray-50 p-6 overflow-y-auto">
                <div className="space-y-6">
                  {/* Donors Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Package className="h-5 w-5 text-green-600 mr-2" />
                      Available Donations
                    </h3>
                    <div className="space-y-3">
                      {donors.map((donor, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-gray-900">{donor.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              donor.status === 'available' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {donor.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{donor.type}</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="flex items-center text-gray-500">
                              <MapPin className="h-4 w-4 mr-1" />
                              {donor.distance}
                            </span>
                            <span className="font-medium text-gray-700">{donor.items}</span>
                          </div>
                          <button className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
                            Contact Donor
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recipients Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Heart className="h-5 w-5 text-blue-600 mr-2" />
                      Recipient Organizations
                    </h3>
                    <div className="space-y-3">
                      {charities.map((charity, index) => (
                        <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                          <h4 className="font-medium text-gray-900 mb-2">{charity.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{charity.type}</p>
                          <div className="space-y-1 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-2" />
                              {charity.capacity}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {charity.time}
                            </div>
                          </div>
                          <div className="flex space-x-2 mt-3">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                              <Phone className="h-4 w-4 mr-1" />
                              Call
                            </button>
                            <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-medium transition-colors flex items-center justify-center">
                              <Mail className="h-4 w-4 mr-1" />
                              Email
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Real impact from our food sharing community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <CheckCircle className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">5,000+ Meals</h3>
              <p className="text-gray-600">Successfully shared with local food banks and shelters this month</p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">200+ Partners</h3>
              <p className="text-gray-600">Active restaurants, groceries, and organizations in our network</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <Heart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Communities</h3>
              <p className="text-gray-600">Served across the metropolitan area through food sharing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join the Food Sharing Movement
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you have food to share or need to connect with resources, 
            every action makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Donate Food
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Find Food Resources
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}