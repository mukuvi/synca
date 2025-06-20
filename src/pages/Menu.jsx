import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Coffee, Plus, Star, Filter, Search, ShoppingCart } from 'lucide-react'

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState({})
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'Coffee', 'Tea', 'Pastries', 'Sandwiches', 'Cold Drinks']

  const menuItems = [
    {
      id: 1,
      name: 'Cappuccino',
      description: 'Rich espresso with steamed milk foam and a touch of cinnamon',
      price: 4.50,
      image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      rating: 4.8,
      popular: true,
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam', 'Cinnamon']
    },
    {
      id: 2,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk and delicate foam art',
      price: 4.25,
      image: 'https://images.pexels.com/photos/324028/pexels-photo-324028.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      rating: 4.7,
      ingredients: ['Espresso', 'Steamed Milk', 'Milk Foam']
    },
    {
      id: 3,
      name: 'Green Tea',
      description: 'Fresh organic green tea leaves with antioxidants',
      price: 3.00,
      image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tea',
      rating: 4.5,
      ingredients: ['Organic Green Tea', 'Hot Water']
    },
    {
      id: 4,
      name: 'Croissant',
      description: 'Buttery, flaky French pastry baked fresh daily',
      price: 3.50,
      image: 'https://images.pexels.com/photos/2135/food-france-morning-breakfast.jpg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pastries',
      rating: 4.6,
      popular: true,
      ingredients: ['Butter', 'Flour', 'Yeast', 'Salt']
    },
    {
      id: 5,
      name: 'Club Sandwich',
      description: 'Triple-layer sandwich with turkey, bacon, lettuce and tomato',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Sandwiches',
      rating: 4.4,
      ingredients: ['Turkey', 'Bacon', 'Lettuce', 'Tomato', 'Mayo', 'Bread']
    },
    {
      id: 6,
      name: 'Espresso',
      description: 'Strong, concentrated coffee shot with rich crema',
      price: 2.50,
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Coffee',
      rating: 4.9,
      ingredients: ['Premium Coffee Beans']
    },
    {
      id: 7,
      name: 'Iced Coffee',
      description: 'Cold brew coffee served over ice with optional milk',
      price: 3.75,
      image: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cold Drinks',
      rating: 4.3,
      ingredients: ['Cold Brew Coffee', 'Ice', 'Milk (Optional)']
    },
    {
      id: 8,
      name: 'Blueberry Muffin',
      description: 'Moist muffin packed with fresh blueberries',
      price: 2.99,
      image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Pastries',
      rating: 4.2,
      ingredients: ['Blueberries', 'Flour', 'Sugar', 'Butter', 'Eggs']
    }
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (itemId) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }))
  }

  const removeFromCart = (itemId) => {
    setCart(prev => {
      const newCart = { ...prev }
      if (newCart[itemId] > 1) {
        newCart[itemId]--
      } else {
        delete newCart[itemId]
      }
      return newCart
    })
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
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Our Menu</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of beverages and treats, made with premium ingredients
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-10"
            />
          </div>
          <button className="btn-ghost flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-6 right-6 bg-primary-500 text-white p-4 rounded-2xl shadow-2xl z-50 animate-slide-up">
            <div className="flex items-center space-x-3">
              <ShoppingCart className="h-5 w-5" />
              <div>
                <div className="text-sm font-medium">
                  {getTotalItems()} items
                </div>
                <div className="text-lg font-bold">
                  ${getTotalPrice().toFixed(2)}
                </div>
              </div>
            </div>
            <button className="mt-3 w-full bg-white text-primary-500 px-4 py-2 rounded-xl font-medium hover:bg-neutral-100 transition-colors duration-200">
              View Cart
            </button>
          </div>
        )}

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="card overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    Popular
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1 shadow-lg">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{item.name}</h3>
                <p className="text-neutral-600 mb-4 text-sm leading-relaxed">{item.description}</p>
                
                {item.ingredients && (
                  <div className="mb-4">
                    <p className="text-xs text-neutral-500 mb-1">Ingredients:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.ingredients.slice(0, 3).map((ingredient, index) => (
                        <span key={index} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                          {ingredient}
                        </span>
                      ))}
                      {item.ingredients.length > 3 && (
                        <span className="text-xs text-neutral-500">+{item.ingredients.length - 3} more</span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-500">${item.price}</span>
                  <div className="flex items-center space-x-2">
                    {cart[item.id] && (
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 bg-neutral-200 text-neutral-600 rounded-full flex items-center justify-center hover:bg-neutral-300 transition-colors duration-200"
                      >
                        -
                      </button>
                    )}
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center space-x-2 bg-primary-500 text-white px-4 py-2 rounded-xl hover:bg-primary-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Add</span>
                    </button>
                    {cart[item.id] && (
                      <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium min-w-[2rem] text-center">
                        {cart[item.id]}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <Coffee className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-neutral-900 mb-2">No items found</h3>
            <p className="text-neutral-600">Try adjusting your search or selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu