import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Coffee, User, Menu as MenuIcon, LogOut } from 'lucide-react'

const Navbar: React.FC = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-gray-900">CAFESYNCA</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Dashboard
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Menu
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-primary transition-colors duration-200">
              Profile
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">{user?.username}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors duration-200"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar