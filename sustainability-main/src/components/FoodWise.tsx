import { 
  Utensils, 
  Trophy, 
  Star, 
  Clock, 
  BookOpen, 
  Gamepad2,
  Award,
  Target,
  Lightbulb,
  ChefHat,
  Zap,
  Download
} from 'lucide-react';

export default function FoodWise() {
  const badges = [
    { name: 'Meal Planner', icon: ChefHat, earned: true, color: 'blue' },
    { name: 'Waste Warrior', icon: Trophy, earned: true, color: 'green' },
    { name: 'Recipe Master', icon: Star, earned: false, color: 'purple' },
    { name: 'Sustainability Hero', icon: Award, earned: true, color: 'orange' }
  ];

  const challenges = [
    {
      title: 'Zero Waste Week',
      description: 'Go 7 days without throwing away any food',
      progress: 65,
      reward: '500 points',
      difficulty: 'Medium'
    },
    {
      title: 'Recipe Remix',
      description: 'Create 3 new recipes using leftover ingredients',
      progress: 33,
      reward: '300 points',
      difficulty: 'Easy'
    },
    {
      title: 'Community Helper',
      description: 'Share 5 food waste reduction tips with friends',
      progress: 80,
      reward: '400 points',
      difficulty: 'Easy'
    }
  ];

  const recipes = [
    {
      title: 'Leftover Vegetable Stir-Fry',
      time: '15 min',
      difficulty: 'Easy',
      waste_saved: '2 cups vegetables',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Bread Pudding Delight',
      time: '45 min',
      difficulty: 'Medium',
      waste_saved: '6 slices bread',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      title: 'Fruit Peel Smoothie',
      time: '5 min',
      difficulty: 'Easy',
      waste_saved: '1 cup fruit peels',
      rating: 4.3,
      image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ];

  const tips = [
    { tip: 'Store herbs like flowers in water to keep them fresh longer', category: 'Storage' },
    { tip: 'Freeze leftover wine in ice cube trays for cooking', category: 'Preservation' },
    { tip: 'Use vegetable scraps to make homemade broth', category: 'Cooking' },
    { tip: 'Plan meals around ingredients that expire soonest', category: 'Planning' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Cook Smart,
                <span className="block text-orange-200">Waste Less</span>
              </h1>
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Transform your kitchen habits with our gamified approach to reducing food waste. 
                Earn badges, complete challenges, and discover amazing recipes using leftovers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
                  Start Challenge
                </button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Food Saved This Month</span>
                  <span className="font-bold">15.2 lbs</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Recipes Tried</span>
                  <span className="font-bold">23</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Current Streak</span>
                  <span className="font-bold">12 days</span>
                </div>
                <div className="bg-white/20 rounded-full h-3">
                  <div className="bg-orange-300 h-3 rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recipe Cards */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Leftover Recipes</h2>
                  <button className="text-orange-600 hover:text-orange-700 font-medium">View All</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recipes.map((recipe, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative overflow-hidden rounded-lg mb-4">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium">
                          ⭐ {recipe.rating}
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                        {recipe.title}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {recipe.time} • {recipe.difficulty}
                        </div>
                        <div className="flex items-center text-green-600">
                          <Target className="h-4 w-4 mr-2" />
                          Saves: {recipe.waste_saved}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Tips */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Lightbulb className="h-6 w-6 text-yellow-500" />
                  <h2 className="text-2xl font-bold text-gray-900">Daily Tips</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tips.map((tip, index) => (
                    <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 border border-yellow-200">
                      <div className="flex items-start space-x-3">
                        <div className="bg-yellow-100 rounded-full p-2 mt-1">
                          <Zap className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div>
                          <span className="inline-block bg-yellow-200 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                            {tip.category}
                          </span>
                          <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Badges */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-5 w-5 text-purple-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Your Badges</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {badges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div key={index} className={`text-center p-3 rounded-lg border-2 transition-all duration-300 ${
                        badge.earned 
                          ? `border-${badge.color}-200 bg-${badge.color}-50 hover:bg-${badge.color}-100` 
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}>
                        <Icon className={`h-8 w-8 mx-auto mb-2 ${
                          badge.earned ? `text-${badge.color}-600` : 'text-gray-400'
                        }`} />
                        <p className={`text-xs font-medium ${
                          badge.earned ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {badge.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Active Challenges */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Gamepad2 className="h-5 w-5 text-green-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Active Challenges</h3>
                </div>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          challenge.difficulty === 'Easy' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span>Progress</span>
                          <span>{challenge.progress}%</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${challenge.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-green-600">{challenge.reward}</span>
                        <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Recipes Tried</span>
                    <span className="font-semibold text-gray-900">5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Food Saved</span>
                    <span className="font-semibold text-green-600">3.2 lbs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Points Earned</span>
                    <span className="font-semibold text-orange-600">850</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Kitchen?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of home cooks making a difference, one meal at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Download App
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300">
              Browse Recipes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}