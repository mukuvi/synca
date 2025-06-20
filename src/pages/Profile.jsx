import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../contexts/AuthContext'
import { User, Mail, Phone, MapPin, Calendar, Coffee, Star, Award, Edit3, Save, X } from 'lucide-react'

const Profile = () => {
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    phone: '+1 (555) 123-4567',
    location: 'New York, NY',
    favoriteOrder: 'Cappuccino with extra foam'
  })

  const stats = [
    { icon: Coffee, label: 'Orders', value: '47', color: 'text-blue-600' },
    { icon: Star, label: 'Points', value: '1,250', color: 'text-yellow-600' },
    { icon: Award, label: 'Level', value: 'Gold', color: 'text-purple-600' },
  ]

  const recentActivity = [
    { date: '2024-01-15', action: 'Ordered Cappuccino', points: '+25', type: 'order' },
    { date: '2024-01-14', action: 'Ordered Latte', points: '+20', type: 'order' },
    { date: '2024-01-13', action: 'Referred a friend', points: '+100', type: 'referral' },
    { date: '2024-01-12', action: 'Ordered Espresso', points: '+15', type: 'order' },
    { date: '2024-01-11', action: 'Left a review', points: '+10', type: 'review' },
  ]

  const achievements = [
    { title: 'Coffee Lover', description: 'Ordered 50+ drinks', icon: Coffee, earned: true },
    { title: 'Early Bird', description: 'Ordered before 7 AM', icon: Star, earned: true },
    { title: 'Social Butterfly', description: 'Referred 5 friends', icon: Award, earned: false },
  ]

  const handleSave = () => {
    updateProfile(profileData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setProfileData({
      username: user?.username || '',
      email: user?.email || '',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      favoriteOrder: 'Cappuccino with extra foam'
    })
    setIsEditing(false)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData(prev => ({ ...prev, [name]: value }))
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case 'order':
        return Coffee
      case 'referral':
        return Award
      case 'review':
        return Star
      default:
        return Coffee
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="card p-6 sm:p-8 mb-8 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-xl">
                <User className="h-16 w-16 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-white p-2 rounded-full shadow-lg">
                <Award className="h-5 w-5" />
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-neutral-900 mb-2">{profileData.username}</h1>
                  <p className="text-neutral-600 mb-4">Gold Member since {user?.joinDate}</p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className={`btn ${isEditing ? 'btn-outline' : 'btn-primary'} flex items-center space-x-2`}
                >
                  {isEditing ? (
                    <>
                      <X className="h-4 w-4" />
                      <span>Cancel</span>
                    </>
                  ) : (
                    <>
                      <Edit3 className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-neutral-50 rounded-xl">
                    <stat.icon className={`h-6 w-6 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-neutral-900">Profile Information</h2>
                {isEditing && (
                  <button
                    onClick={handleSave}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save</span>
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
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
                    <p className="text-neutral-900 p-3 bg-neutral-50 rounded-xl">{profileData.username}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
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
                    <p className="text-neutral-900 p-3 bg-neutral-50 rounded-xl">{profileData.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
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
                    <p className="text-neutral-900 p-3 bg-neutral-50 rounded-xl">{profileData.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
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
                    <p className="text-neutral-900 p-3 bg-neutral-50 rounded-xl">{profileData.location}</p>
                  )}
                </div>
                
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
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
                    <p className="text-neutral-900 p-3 bg-neutral-50 rounded-xl">{profileData.favoriteOrder}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">Achievements</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                      achievement.earned
                        ? 'border-primary-200 bg-primary-50'
                        : 'border-neutral-200 bg-neutral-50 opacity-60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <achievement.icon
                        className={`h-8 w-8 ${
                          achievement.earned ? 'text-primary-600' : 'text-neutral-400'
                        }`}
                      />
                      <div>
                        <h3 className="font-medium text-neutral-900">{achievement.title}</h3>
                        <p className="text-sm text-neutral-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">Recent Activity</h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const ActivityIcon = getActivityIcon(activity.type)
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary-100 rounded-lg">
                          <ActivityIcon className="h-4 w-4 text-primary-600" />
                        </div>
                        <div>
                          <p className="font-medium text-neutral-900 text-sm">{activity.action}</p>
                          <p className="text-xs text-neutral-600 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {activity.date}
                          </p>
                        </div>
                      </div>
                      <span className="text-green-600 font-semibold text-sm">{activity.points}</span>
                    </div>
                  )
                })}
              </div>
              
              <button className="w-full mt-4 text-primary-500 hover:text-primary-600 font-medium text-sm">
                View All Activity
              </button>
            </div>

            {/* Loyalty Program */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">Loyalty Rewards</h2>
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6 rounded-2xl mb-6">
                <h3 className="text-xl font-semibold mb-2">Gold Member</h3>
                <p className="text-lg mb-4">1,250 Points</p>
                <div className="bg-white/20 rounded-full h-2 mb-2">
                  <div className="bg-white rounded-full h-2 w-3/4"></div>
                </div>
                <p className="text-sm">250 points to Platinum</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-yellow-50 p-4 rounded-xl text-center">
                  <Coffee className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-yellow-800">Free Drink</p>
                  <p className="text-xs text-yellow-600">500 points</p>
                </div>
                <div className="bg-green-50 p-4 rounded-xl text-center">
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