export interface User {
  id: string
  username: string
  email: string
  phone?: string
  location?: string
  joinDate?: string
  favoriteOrder?: string
  avatar?: string
}

export interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  popular?: boolean
  ingredients?: string[]
  allergens?: string[]
}

export interface CartItem {
  id: number
  quantity: number
  customizations?: string[]
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'preparing' | 'ready' | 'delivered' | 'cancelled'
  createdAt: string
  estimatedTime?: number
}

export interface AuthContextType {
  user: User | null
  login: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
  updateProfile: (data: Partial<User>) => void
}