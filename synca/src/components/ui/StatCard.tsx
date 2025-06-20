import React from 'react'
import { DivideIcon as LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  label: string
  value: string
  color: string
  trend?: {
    value: string
    isPositive: boolean
  }
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  color, 
  trend 
}) => {
  return (
    <div className="card p-6 hover:scale-105 transition-transform duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-xl ${color.replace('text-', 'bg-').replace('-600', '-100')}`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
        {trend && (
          <div className={`text-sm font-medium ${
            trend.isPositive ? 'text-green-600' : 'text-red-600'
          }`}>
            {trend.isPositive ? '+' : ''}{trend.value}
          </div>
        )}
      </div>
      
      <div>
        <p className="text-sm font-medium text-neutral-600 mb-1">{label}</p>
        <p className="text-2xl font-bold text-neutral-900">{value}</p>
      </div>
    </div>
  )
}

export default StatCard