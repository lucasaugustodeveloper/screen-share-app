import { useState, useEffect } from 'react';
import SocketIO from 'socket.io-client';

const socket = SocketIO.connect('http://localhost:4000')

const Modal = ({ url }) => {
  const [image, setImage] = useState('');

  useEffect(() => {
    socket.emit('browse', {
      url
    });
  }, [url]);

  return (
    <div className="popup">
      <div className="popup-ref">
        {image && <img src={image} alt="" />}
      </div>
    </div>
  );
};

export default Modal;
