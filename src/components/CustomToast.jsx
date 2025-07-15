import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white"
    >
      {children}
    </motion.div>
  );
};

const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName="!bg-transparent !border-0"
      bodyClassName="!text-white"
      toastStyle={{
        backgroundColor: 'transparent',
        border: 'none',
      }}
      theme="dark"
    />
  );
};

export { CustomToast, Toast };
