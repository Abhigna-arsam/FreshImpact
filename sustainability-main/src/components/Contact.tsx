import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Users,
  Building,
  Send
} from 'lucide-react';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      details: 'hello@foodimpact.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      details: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      details: '123 Sustainability Ave, Green City, GC 12345',
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday - Friday',
      details: '9:00 AM - 6:00 PM PST',
      action: 'Schedule Meeting'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: MessageSquare },
    { value: 'partnership', label: 'Partnership Opportunities', icon: Users },
    { value: 'business', label: 'Business Solutions', icon: Building },
    { value: 'support', label: 'Technical Support', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Have questions about FoodImpact? Want to partner with us? 
            We'd love to hear from you and discuss how we can work together 
            to create a more sustainable future.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-gray-600 mb-3">{method.description}</p>
                  <p className="font-medium text-gray-900 mb-4">{method.details}</p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    {method.action}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your first name"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Your last name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div>
              <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                Inquiry Type
              </label>
              <select 
                id="inquiryType"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                <option value="">Select inquiry type</option>
                {inquiryTypes.map((type, index) => (
                  <option key={index} value={type.value}>{type.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                Organization (Optional)
              </label>
              <input
                type="text"
                id="organization"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Your company or organization"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center mx-auto"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions about FoodImpact</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does FoodImpact help reduce food waste?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our platform offers four integrated modules: FoodTrack for demand prediction, 
                FoodShare for connecting surplus with need, FoodWise for household education, 
                and FoodCycle for composting guidance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is FoodImpact suitable for small businesses?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! We offer scalable solutions for businesses of all sizes, 
                from local restaurants to large grocery chains. Our tools are designed 
                to be user-friendly and cost-effective.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can individuals use FoodImpact without a business?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! FoodWise and FoodCycle are specifically designed for households and 
                individuals looking to reduce their personal food waste and adopt more 
                sustainable practices.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How do I get started with FoodImpact?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simply explore our modules to find the best fit for your needs. 
                Businesses can request a demo, while individuals can start with 
                our free resources and mobile app.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}