'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import markMessageAsRead from '@/app/actions/markMessageAsRead';
import deleteMessage from '@/app/actions/deleteMessage';

const MessageCard = ({ message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleReadClick = async () => {
    try {
      const read = await markMessageAsRead(message._id);
      setIsRead(read);
      toast.success(`Message marked as ${read ? 'read' : 'unread'}`);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteClick = async () => {
    await deleteMessage(message._id);
    setIsDeleted(true);
    toast.success('Message Deleted');
  }

  if (isDeleted) {
    return <p className="text-center">Deleted Message</p>;
  }

  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
      {!isRead && (
        <div className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-md text-sm font-bold">
          New
        </div>
      )}
      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquiry: </span>
        { message.property.name }
      </h2>
      <p className="text-gray-700">{ message.body }</p>
      <ul className="mt-4">
        <li>
          <strong>Reply Email: </strong>
          <a className="text-blue-500" href={`mailto:${message.email}`}>{ message.email }</a>
        </li>
        <li>
          <strong>Reply Phone: </strong>
          <a className="text-blue-500" href={`tel:${message.phone}`}>{ message.phone }</a>
        </li>
        <li>
          <strong>Received: </strong>
          { new Date(message.createdAt).toLocaleString() }
        </li>
      </ul>
      <button onClick={handleReadClick} className="mt-4 mr-3 bg-blue-500 text-white py-1 px-3 rounded-md">{ isRead ? 'Mark as Unread' : 'Mark as Read' }</button>
      <button onClick={handleDeleteClick} className="mt-4 bg-red-500 text-white py-1 px-3 rounded-md">Delete</button>
    </div>
  )
};

export default MessageCard;