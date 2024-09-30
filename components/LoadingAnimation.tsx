import { motion } from 'framer-motion'

export default function LoadingAnimation() {
  return (
    <div className="flex items-center space-x-2 mt-4">
      <motion.div
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
      />
      <motion.div
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop', delay: 0.1 }}
      />
      <motion.div
        className="w-3 h-3 bg-blue-500 rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop', delay: 0.2 }}
      />
    </div>
  )
}