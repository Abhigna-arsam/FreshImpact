import { 
  BarChart3, 
  TrendingUp, 
  AlertTriangle, 
  Target, 
  Calendar,
  DollarSign,
  Package,
  Bell,
  Settings,
  Download
} from 'lucide-react';

export default function FoodTrack() {
  const metrics = [
    { label: 'Food Waste Reduction', value: '35%', trend: '+12%', color: 'green' },
    { label: 'Cost Savings', value: '$24,500', trend: '+8%', color: 'blue' },
    { label: 'Inventory Accuracy', value: '94%', trend: '+5%', color: 'purple' },
    { label: 'Demand Prediction', value: '89%', trend: '+15%', color: 'orange' }
  ];

  const alerts = [
    { item: 'Fresh Produce', level: 'high', expires: '2 days', amount: '45 items' },
    { item: 'Dairy Products', level: 'medium', expires: '4 days', amount: '23 items' },
    { item: 'Bakery Items', level: 'low', expires: '1 day', amount: '12 items' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Smart Inventory
                <span className="block text-blue-200">Management</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Leverage AI-powered demand prediction and real-time analytics to optimize 
                your inventory, reduce waste, and maximize profits for your business.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Demo
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Live Dashboard Preview</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Live Data</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm">Current Waste Level</span>
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="text-2xl font-bold">12.3%</div>
                  <div className="w-full bg-white/20 rounded-full h-2 mt-2">
                    <div className="bg-green-400 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-${metric.color}-100`}>
                    <BarChart3 className={`h-5 w-5 text-${metric.color}-600`} />
                  </div>
                  <span className={`text-sm font-medium text-${metric.color}-600 bg-${metric.color}-50 px-2 py-1 rounded-full`}>
                    {metric.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <p className="text-gray-600 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Chart Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Demand Prediction Analytics</h3>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50">
                      <Settings className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-50">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="h-64 bg-gradient-to-t from-blue-50 to-transparent rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Chart Visualization</p>
                    <p className="text-sm text-gray-500">Real-time demand patterns and predictions</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Deliveries</h3>
                <div className="space-y-4">
                  {[
                    { item: 'Fresh Vegetables', time: 'Today, 2:00 PM', quantity: '150 kg' },
                    { item: 'Dairy Products', time: 'Tomorrow, 9:00 AM', quantity: '80 units' },
                    { item: 'Meat & Poultry', time: 'Tomorrow, 11:00 AM', quantity: '45 kg' }
                  ].map((delivery, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Package className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900">{delivery.item}</p>
                          <p className="text-sm text-gray-500">{delivery.time}</p>
                        </div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{delivery.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Spoilage Alerts */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bell className="h-5 w-5 text-orange-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Spoilage Alerts</h3>
                </div>
                <div className="space-y-3">
                  {alerts.map((alert, index) => (
                    <div key={index} className={`p-3 rounded-lg border-l-4 ${
                      alert.level === 'high' ? 'border-red-400 bg-red-50' :
                      alert.level === 'medium' ? 'border-yellow-400 bg-yellow-50' :
                      'border-green-400 bg-green-50'
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-900">{alert.item}</span>
                        <AlertTriangle className={`h-4 w-4 ${
                          alert.level === 'high' ? 'text-red-500' :
                          alert.level === 'medium' ? 'text-yellow-500' :
                          'text-green-500'
                        }`} />
                      </div>
                      <p className="text-sm text-gray-600">Expires in {alert.expires}</p>
                      <p className="text-sm font-medium">{alert.amount}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">Update Demand Forecast</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">Schedule Delivery</span>
                    </div>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-purple-500" />
                      <span className="text-gray-700">View Cost Analysis</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already reducing waste and increasing profits with FoodTrack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Request Demo
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}