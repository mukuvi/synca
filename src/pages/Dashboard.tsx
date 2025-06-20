import React from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/AuthContext'
import { Coffee, Users, TrendingUp, Star, Clock, MapPin } from 'lucide-react'

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  const stats = [
    { icon: Coffee, label: 'Orders Today', value: '24', color: 'text-blue-600' },
    { icon: Users, label: 'Active Members', value: '1,234', color: 'text-green-600' },
    { icon: TrendingUp, label: 'Revenue', value: '$2,450', color: 'text-purple-600' },
    { icon: Star, label: 'Rating', value: '4.8', color: 'text-yellow-600' },
  ]

  const recentOrders = [
    { id: 1, item: 'Cappuccino', time: '2 mins ago', status: 'Preparing' },
    { id: 2, item: 'Latte', time: '5 mins ago', status: 'Ready' },
    { id: 3, item: 'Espresso', time: '8 mins ago', status: 'Delivered' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.username}! ☕
          </h1>
          <p className="text-gray-600">Here's what's happening at Cafesynca today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Orders</h2>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Coffee className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium text-gray-900">{order.item}</p>
                      <p className="text-sm text-gray-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {order.time}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Preparing' ? 'bg-yellow-100 text-yellow-800' :
                    order.status === 'Ready' ? 'bg-green-100 text-green-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-200">
                <Coffee className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-primary">New Order</p>
              </button>
              <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-green-600">View Members</p>
              </button>
              <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                <TrendingUp className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-purple-600">Analytics</p>
              </button>
              <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium text-blue-600">Locations</p>
              </button>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-8 card p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Today's Special</h2>
            <div className="max-w-md mx-auto">
              <img 
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Special Coffee" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Caramel Macchiato</h3>
              <p className="text-gray-600 mb-4">
                Rich espresso with steamed milk and caramel drizzle. A perfect blend of sweet and bold.
              </p>
              <button className="btn-primary">Order Now - $4.99</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard