import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { User, AuthContextType } from '../types'

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  const login = async (username: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call with loading delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (username.trim() && email.trim() && password.trim()) {
      const newUser: User = {
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

  const updateProfile = (data: Partial<User>) => {
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

  const value: AuthContextType = {
    user,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}