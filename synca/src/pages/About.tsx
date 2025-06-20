import React from 'react'
import { Coffee, Heart, Users, Award } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: Coffee,
      title: 'Quality First',
      description: 'We source the finest coffee beans from sustainable farms around the world.'
    },
    {
      icon: Heart,
      title: 'Community Love',
      description: 'Building connections one cup at a time, creating spaces where people belong.'
    },
    {
      icon: Users,
      title: 'Expert Craftsmanship',
      description: 'Our skilled baristas are passionate about creating the perfect coffee experience.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering exceptional service and unforgettable moments.'
    }
  ]

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-500 to-secondary-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Cafesynca</h1>
          <p className="text-xl leading-relaxed">
            Where every sip creates a moment to cherish. We're more than just a coffee shop – 
            we're a community dedicated to bringing people together through exceptional coffee experiences.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Founded in 2020, Cafesynca began as a dream to create the perfect coffee experience. 
                Our founders, passionate coffee enthusiasts, traveled the world to discover the finest 
                beans and brewing techniques.
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Today, we're proud to serve our community with carefully crafted beverages, 
                fresh pastries, and a warm atmosphere that makes everyone feel at home.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Every cup we serve is a testament to our commitment to quality, sustainability, 
                and the belief that great coffee brings people together.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Coffee brewing"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              These core values guide everything we do, from sourcing our beans to serving our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our passionate team of coffee experts and friendly staff make every visit special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'Head Barista', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'Mike Chen', role: 'Coffee Roaster', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300' },
              { name: 'Emma Davis', role: 'Store Manager', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300' }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-neutral-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About