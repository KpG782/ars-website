import React from 'react'
import { TrendingUp, Users, Star, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: Users,
      number: '12,000',
      label: 'App Downloads (Year-1 Target)',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      number: '1,500',
      label: 'Registered Mechanics (Year-1)',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Star,
      number: '6,000',
      label: 'Successful Repairs (Year-1)',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Clock,
      number: '10 min',
      label: 'Avg. Time to Booking',
      color: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <section className="py-12 bg-white relative z-10 -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
