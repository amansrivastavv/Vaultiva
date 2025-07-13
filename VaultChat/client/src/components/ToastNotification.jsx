import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification = ({ message, type = 'info' }) => {
  const [showToast, setShowToast] = useState(false);

  const showToastNotification = () => {
    setShowToast(true);
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div>
      <ToastContainer />
      {showToast && <button onClick={showToastNotification}>Show Toast</button>}
    </div>
  );
};

export default ToastNotification;
