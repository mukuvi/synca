import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Coffee, Plus, Star } from 'lucide-react'

interface MenuItem {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  popular?: boolean
}

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState<Record<number, number>>({})

  const categories = ['All', 'Coffee', 'Tea', 'Pastries', 'Sandwiches']

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Cappuccino',
      description: 'Rich espresso with steamed milk foam',
      price: 4.50,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      rating: 4.8,
      popular: true
    },
    {
      id: 2,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk',
      price: 4.25,
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Green Tea',
      description: 'Fresh organic green tea leaves',
      price: 3.00,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tea',
      rating: 4.5
    },
    {
      id: 4,
      name: 'Croissant',
      description: 'Buttery, flaky French pastry',
      price: 3.50,
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pastries',
      rating: 4.6,
      popular: true
    },
    {
      id: 5,
      name: 'Club Sandwich',
      description: 'Triple-layer sandwich with turkey and bacon',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sandwiches',
      rating: 4.4
    },
    {
      id: 6,
      name: 'Espresso',
      description: 'Strong, concentrated coffee shot',
      price: 2.50,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      rating: 4.9
    }
  ]

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  const addToCart = (itemId: number) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0)
  }

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, count]) => {
      const item = menuItems.find(item => item.id === parseInt(itemId))
      return total + (item ? item.price * count : 0)
    }, 0)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600">Discover our carefully crafted selection of beverages and treats</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-4 right-4 bg-primary text-white p-4 rounded-lg shadow-lg z-50">
            <div className="text-sm font-medium">
              {getTotalItems()} items - ${getTotalPrice().toFixed(2)}
            </div>
            <button className="mt-2 w-full bg-white text-primary px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors duration-200">
              View Cart
            </button>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="card overflow-hidden group">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">${item.price}</span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add</span>
                    {cart[item.id] && (
                      <span className="bg-white text-primary px-2 py-1 rounded-full text-sm font-medium">
                        {cart[item.id]}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No items found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu