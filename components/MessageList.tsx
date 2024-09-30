import { motion } from 'framer-motion'
import { ThumbsUp, ThumbsDown, RefreshCw, Share2, MoreHorizontal } from 'lucide-react'

interface Message {
  id: string
  content: string
  sender: 'user' | 'ai'
}

interface MessageListProps {
  messages: Message[]
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <motion.div
          key={message.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-3/4 ${message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-700'} rounded-lg p-3`}>
            <p>{message.content}</p>
            {message.sender === 'ai' && (
              <div className="flex mt-2 space-x-2">
                <button className="p-1 hover:bg-gray-600 rounded"><ThumbsUp className="w-4 h-4" /></button>
                <button className="p-1 hover:bg-gray-600 rounded"><ThumbsDown className="w-4 h-4" /></button>
                <button className="p-1 hover:bg-gray-600 rounded"><RefreshCw className="w-4 h-4" /></button>
                <button className="p-1 hover:bg-gray-600 rounded"><Share2 className="w-4 h-4" /></button>
                <button className="p-1 hover:bg-gray-600 rounded"><MoreHorizontal className="w-4 h-4" /></button>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  )
}