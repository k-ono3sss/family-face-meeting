'use client';

import { motion } from 'framer-motion';

interface OverlappingRingsProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16'
};

export default function OverlappingRings({ className = '', size = 'md' }: OverlappingRingsProps) {
  const ringSize = sizeClasses[size];
  
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* First Ring */}
      <motion.div
        className={`absolute ${ringSize} rounded-full border-3 border-rose-300 bg-gradient-to-br from-rose-100 to-rose-200 shadow-lg`}
        style={{
          transform: 'translateX(-6px) rotate(-15deg)',
          background: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f9a8d4 100%)',
          borderColor: '#f9a8d4',
          borderWidth: '2px',
          boxShadow: '0 4px 12px rgba(249, 168, 212, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.5)'
        }}
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: -15 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {/* Inner highlight for depth */}
        <div 
          className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent"
          style={{ transform: 'rotate(45deg)' }}
        />
        {/* Diamond accent */}
        <div 
          className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-gradient-to-br from-pink-200 to-pink-400 transform -translate-x-1/2 -translate-y-0.5"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
          }}
        />
      </motion.div>

      {/* Second Ring */}
      <motion.div
        className={`absolute ${ringSize} rounded-full border-3 border-blue-300 bg-gradient-to-br from-blue-100 to-blue-200 shadow-lg`}
        style={{
          transform: 'translateX(6px) rotate(15deg)',
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
          borderColor: '#93c5fd',
          borderWidth: '2px',
          boxShadow: '0 4px 12px rgba(147, 197, 253, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.5)'
        }}
        initial={{ scale: 0, rotate: 15 }}
        animate={{ scale: 1, rotate: 15 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        {/* Inner highlight for depth */}
        <div 
          className="absolute inset-1 rounded-full bg-gradient-to-br from-white/40 to-transparent"
          style={{ transform: 'rotate(-45deg)' }}
        />
        {/* Simple band detail */}
        <div 
          className="absolute inset-2 rounded-full border border-blue-400/30"
        />
      </motion.div>

      {/* Subtle sparkle effects */}
      <motion.div
        className="absolute w-1 h-1 bg-pink-300 rounded-full"
        style={{ top: '10%', left: '20%' }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1
        }}
      />
      <motion.div
        className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full"
        style={{ bottom: '15%', right: '25%' }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1.5
        }}
      />
    </div>
  );
}