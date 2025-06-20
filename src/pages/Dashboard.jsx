import React from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/AuthContext'
import { Coffee, Users, TrendingUp, Star, Clock, MapPin, ShoppingBag, Award } from 'lucide-react'

const Dashboard = () => {
  const { user } = useAuth()

  const stats = [
    { 
      icon: Coffee, 
      label: 'Orders Today', 
      value: '24', 
      color: 'text-blue-600',
      trend: { value: '12%', isPositive: true }
    },
    { 
      icon: Users, 
      label: 'Active Members', 
      value: '1,234', 
      color: 'text-green-600',
      trend: { value: '8%', isPositive: true }
    },
    { 
      icon: TrendingUp, 
      label: 'Revenue', 
      value: '$2,450', 
      color: 'text-purple-600',
      trend: { value: '15%', isPositive: true }
    },
    { 
      icon: Star, 
      label: 'Rating', 
      value: '4.8', 
      color: 'text-yellow-600',
      trend: { value: '0.2', isPositive: true }
    },
  ]

  const recentOrders = [
    { id: 1, item: 'Cappuccino', customer: 'John D.', time: '2 mins ago', status: 'Preparing', amount: '$4.50' },
    { id: 2, item: 'Latte', customer: 'Sarah M.', time: '5 mins ago', status: 'Ready', amount: '$4.25' },
    { id: 3, item: 'Espresso', customer: 'Mike R.', time: '8 mins ago', status: 'Delivered', amount: '$2.50' },
    { id: 4, item: 'Americano', customer: 'Lisa K.', time: '12 mins ago', status: 'Delivered', amount: '$3.75' },
  ]

  const quickActions = [
    { icon: Coffee, label: 'New Order', color: 'bg-primary-50 hover:bg-primary-100 text-primary-600' },
    { icon: Users, label: 'View Members', color: 'bg-green-50 hover:bg-green-100 text-green-600' },
    { icon: TrendingUp, label: 'Analytics', color: 'bg-purple-50 hover:bg-purple-100 text-purple-600' },
    { icon: MapPin, label: 'Locations', color: 'bg-blue-50 hover:bg-blue-100 text-blue-600' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Preparing':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Ready':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'Delivered':
        return 'bg-gray-100 text-gray-800 border-gray-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-2">
                Welcome back, {user?.username}! ☕
              </h1>
              <p className="text-neutral-600 text-lg">Here's what's happening at Cafesynca today.</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                <Clock className="h-4 w-4" />
                <span>{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-up">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.color.replace('text-', 'bg-').replace('-600', '-100')}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                {stat.trend && (
                  <div className={`text-sm font-medium ${
                    stat.trend.isPositive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend.isPositive ? '+' : ''}{stat.trend.value}
                  </div>
                )}
              </div>
              
              <div>
                <p className="text-sm font-medium text-neutral-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="xl:col-span-2">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Recent Orders</h2>
                <button className="text-primary-500 hover:text-primary-600 font-medium text-sm">
                  View All
                </button>
              </div>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition-colors duration-200">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Coffee className="h-5 w-5 text-primary-600" />
                      </div>
                      <div>
                        <p className="font-medium text-neutral-900">{order.item}</p>
                        <p className="text-sm text-neutral-600">by {order.customer}</p>
                        <p className="text-xs text-neutral-500 flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {order.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-neutral-900 mb-1">{order.amount}</p>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions & Performance */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-200 hover:scale-105 ${action.color}`}
                  >
                    <action.icon className="h-6 w-6 mx-auto mb-2" />
                    <p className="text-sm font-medium">{action.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Performance Summary */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">Performance</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Daily Goal</span>
                  <span className="text-sm font-medium text-neutral-900">80%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-500 h-2 rounded-full w-4/5"></div>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm text-neutral-600">Customer Satisfaction</span>
                  <span className="text-sm font-medium text-neutral-900">96%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[96%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mt-8 card p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Today's Special</h2>
            <div className="max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <img 
                  src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Special Coffee" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Limited Time
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Caramel Macchiato</h3>
              <p className="text-neutral-600 mb-6">
                Rich espresso with steamed milk and caramel drizzle. A perfect blend of sweet and bold flavors.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <button className="btn-primary">Order Now - $4.99</button>
                <div className="flex items-center space-x-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-medium text-neutral-700">4.9 (127 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard