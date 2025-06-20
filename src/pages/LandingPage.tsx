import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Coffee, User, Mail, Lock, CheckCircle, AlertCircle } from 'lucide-react'

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.username.trim()) {
      newErrors.username = 'Username cannot be blank'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email cannot be blank'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password cannot be blank'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsLoading(true)
    
    try {
      const success = await login(formData.username, formData.email, formData.password)
      if (success) {
        navigate('/dashboard')
      }
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const getFieldStatus = (fieldName: string) => {
    if (errors[fieldName]) return 'error'
    if (formData[fieldName as keyof typeof formData].trim()) return 'success'
    return 'default'
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-primary to-primary/80 flex-col justify-between p-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Coffee className="h-12 w-12 text-white" />
            <div className="text-white">
              <h2 className="text-2xl font-bold">KARIBU</h2>
              <h1 className="text-4xl font-bold">CAFESYNCA</h1>
            </div>
          </div>
          <Coffee className="h-12 w-12 text-white" />
        </div>
        
        <div 
          className="flex-1 bg-cover bg-center bg-no-repeat rounded-2xl my-8"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800')`
          }}
        />
        
        <div className="text-center text-white">
          <p className="text-xl leading-relaxed">
            Thanks for visiting<br />
            <span className="font-semibold">Where every sip creates a moment to cherish</span>
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-gray-900">CAFESYNCA</span>
            </div>
            <p className="text-gray-600">Where every sip creates a moment to cherish</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h2>
              <p className="text-gray-600">
                Already have an account?{' '}
                <span className="text-primary font-semibold cursor-pointer hover:underline">
                  Sign In
                </span>
              </p>
            </div>

            {/* Social Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" />
                <span className="font-medium text-gray-700">Sign up with Google</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors duration-200">
                <img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" />
                <span className="font-medium">Sign up with Facebook</span>
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="relative">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="James Ngandu"
                    className={`input-field pl-10 pr-10 ${
                      getFieldStatus('username') === 'error' ? 'border-red-500 focus:ring-red-500' :
                      getFieldStatus('username') === 'success' ? 'border-green-500 focus:ring-green-500' : ''
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {getFieldStatus('username') === 'error' && (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    {getFieldStatus('username') === 'success' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="youremail@gmail.com"
                    className={`input-field pl-10 pr-10 ${
                      getFieldStatus('email') === 'error' ? 'border-red-500 focus:ring-red-500' :
                      getFieldStatus('email') === 'success' ? 'border-green-500 focus:ring-green-500' : ''
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {getFieldStatus('email') === 'error' && (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    {getFieldStatus('email') === 'success' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={`input-field pl-10 pr-10 ${
                      getFieldStatus('password') === 'error' ? 'border-red-500 focus:ring-red-500' :
                      getFieldStatus('password') === 'success' ? 'border-green-500 focus:ring-green-500' : ''
                    }`}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    {getFieldStatus('password') === 'error' && (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    {getFieldStatus('password') === 'success' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Creating Account...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage