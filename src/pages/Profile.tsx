import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/AuthContext'
import { User, Mail, Phone, MapPin, Calendar, Coffee, Star, Award } from 'lucide-react'

const Profile: React.FC = () => {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    joinDate: 'January 2024',
    favoriteOrder: 'Cappuccino with extra foam'
  })

  const stats = [
    { icon: Coffee, label: 'Orders', value: '47', color: 'text-blue-600' },
    { icon: Star, label: 'Points', value: '1,250', color: 'text-yellow-600' },
    { icon: Award, label: 'Level', value: 'Gold', color: 'text-purple-600' },
  ]

  const recentActivity = [
    { date: '2024-01-15', action: 'Ordered Cappuccino', points: '+25' },
    { date: '2024-01-14', action: 'Ordered Latte', points: '+20' },
    { date: '2024-01-13', action: 'Referred a friend', points: '+100' },
    { date: '2024-01-12', action: 'Ordered Espresso', points: '+15' },
  ]

  const handleSave = () => {
    setIsEditing(false)
    // Here you would typically save to a backend
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="card p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
                <User className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white p-2 rounded-full">
                <Award className="h-5 w-5" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.username}</h1>
              <p className="text-gray-600 mb-4">Gold Member since {profileData.joinDate}</p>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-1`} />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="btn-primary"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-2" />
                  Username
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={profileData.username}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.username}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-2" />
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-2" />
                  Phone
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.phone}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-2" />
                  Location
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={profileData.location}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.location}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Coffee className="inline h-4 w-4 mr-2" />
                  Favorite Order
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="favoriteOrder"
                    value={profileData.favoriteOrder}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                ) : (
                  <p className="text-gray-900">{profileData.favoriteOrder}</p>
                )}
              </div>
              
              {isEditing && (
                <button onClick={handleSave} className="btn-primary w-full">
                  Save Changes
                </button>
              )}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {activity.date}
                    </p>
                  </div>
                  <span className="text-green-600 font-semibold">{activity.points}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 text-primary hover:text-primary/80 font-medium">
              View All Activity
            </button>
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="card p-8 mt-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Loyalty Rewards</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-6 rounded-xl mb-6">
                <h3 className="text-xl font-semibold mb-2">Gold Member</h3>
                <p className="text-lg">1,250 Points</p>
                <div className="mt-4 bg-white/20 rounded-full h-2">
                  <div className="bg-white rounded-full h-2 w-3/4"></div>
                </div>
                <p className="text-sm mt-2">250 points to Platinum</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <Coffee className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-yellow-800">Free Drink</p>
                  <p className="text-xs text-yellow-600">500 points</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-green-800">Free Pastry</p>
                  <p className="text-xs text-green-600">300 points</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile