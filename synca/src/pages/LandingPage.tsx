import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Coffee, User, Mail, Lock, CheckCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'
import LoadingSpinner from '../components/ui/LoadingSpinner'

const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.username.trim()) {
      newErrors.username = 'Username cannot be blank'
    } else if (formData.username.length < 2) {
      newErrors.username = 'Username must be at least 2 characters'
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
      <div className="hidden lg:flex lg:w-3/5 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 flex-col justify-between p-12 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                <Coffee className="h-10 w-10 text-white" />
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold">KARIBU</h2>
                <h1 className="text-4xl font-bold">CAFESYNCA</h1>
              </div>
            </div>
            <div className="animate-bounce-gentle">
              <Coffee className="h-12 w-12 text-white/80" />
            </div>
          </div>
          
          <div className="space-y-6 text-white/90">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-lg">Premium Coffee Experience</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-lg">Artisan Crafted Beverages</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-lg">Modern Digital Ordering</p>
            </div>
          </div>
        </div>
        
        <div 
          className="flex-1 bg-cover bg-center bg-no-repeat rounded-3xl my-8 relative overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        
        <div className="text-center text-white relative z-10">
          <p className="text-xl leading-relaxed">
            Thanks for visiting<br />
            <span className="font-semibold text-2xl">Where every sip creates a moment to cherish</span>
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-primary-500 rounded-xl">
                <Coffee className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-neutral-900">CAFESYNCA</span>
                <p className="text-sm text-neutral-600 -mt-1">Premium Coffee Experience</p>
              </div>
            </div>
            <p className="text-neutral-600">Where every sip creates a moment to cherish</p>
          </div>

          <div className="card p-6 sm:p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-900 mb-2">Get Started</h2>
              <p className="text-neutral-600">
                Already have an account?{' '}
                <span className="text-primary-500 font-semibold cursor-pointer hover:underline">
                  Sign In
                </span>
              </p>
            </div>

            {/* Social Buttons */}
            <div className="space-y-3 mb-6">
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 border border-neutral-300 rounded-xl hover:bg-neutral-50 transition-all duration-200 group">
                <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium text-neutral-700">Sign up with Google</span>
              </button>
              <button className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-secondary-500 text-white rounded-xl hover:bg-secondary-600 transition-all duration-200 group">
                <img src="https://img.icons8.com/fluency/24/facebook-new.png" alt="Facebook" className="group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">Sign up with Facebook</span>
              </button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-neutral-500 font-medium">Or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div className="relative">
                <label htmlFor="username" className="block text-sm font-medium text-neutral-700 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
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
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.username}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
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
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className={`input-field pl-10 pr-20 ${
                      getFieldStatus('password') === 'error' ? 'border-red-500 focus:ring-red-500' :
                      getFieldStatus('password') === 'success' ? 'border-green-500 focus:ring-green-500' : ''
                    }`}
                  />
                  <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                    {getFieldStatus('password') === 'error' && (
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    )}
                    {getFieldStatus('password') === 'success' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 animate-fade-in">{errors.password}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" text="Creating Account..." />
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-neutral-500">
                By creating an account, you agree to our{' '}
                <span className="text-primary-500 hover:underline cursor-pointer">Terms of Service</span>
                {' '}and{' '}
                <span className="text-primary-500 hover:underline cursor-pointer">Privacy Policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage