import React from 'react'

const ChatBubbleButton = ({text, icon}) => {
  return (
    <button className="bg-white border border-gray-300 rounded-md px-2 py-0.5 text-gray-700 hover:bg-gray-100 text-xxs flex items-center gap-1">
    {icon}
    {text}
    </button>

  )
}

export default ChatBubbleButton