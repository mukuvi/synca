import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const login = async (username, email, password) => {
    // Simulate API call with loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (username.trim() && email.trim() && password.trim()) {
      const newUser = {
        id: Date.now().toString(),
        username,
        email,
        joinDate: new Date().toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long' 
        }),
        favoriteOrder: 'Cappuccino with extra foam'
      }
      setUser(newUser)
      localStorage.setItem('cafesynca_user', JSON.stringify(newUser))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('cafesynca_user')
  }

  const updateProfile = (data) => {
    if (user) {
      const updatedUser = { ...user, ...data }
      setUser(updatedUser)
      localStorage.setItem('cafesynca_user', JSON.stringify(updatedUser))
    }
  }

  // Check for existing user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('cafesynca_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Error parsing saved user:', error)
        localStorage.removeItem('cafesynca_user')
      }
    }
  }, [])

  const value = {
    user,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}