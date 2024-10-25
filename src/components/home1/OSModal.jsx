import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const OSModal = ({ modalIndex, onClose }) => {
  const modalContent = [
    {
      title: "Welcome!",
      body: "Discover Our Amazing Features. Unlock the full experience with just a tap.",
    },
    {
      title: "Welcome!",
      body: "Learn about the amazing features of our app.",
    },
    {
      title: "Welcome!",
      body: "Explore how our app can benefit you.",
    },
    
  ];

  // Ensure valid modalIndex
  if (modalIndex < 0 || modalIndex >= modalContent.length) {
    return null; 
  }

  useEffect(() => {
    
  }, []);

  const handleDownload = () => {
    const downloadLink = 'https://github.com/subhranshuchoudhury/JNVKAA-FE/raw/refs/heads/main/JNVKAA.apk'; 
    window.location.href = downloadLink; 
  };

  return (
    <div
      className="modal fade show"
      tabIndex="-1"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}
      onClick={onClose} // Close on overlay click
    >
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}> {/* Prevent close on dialog click */}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalContent[modalIndex].title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            >
              <FaTimes />
            </button>
          </div>
          <div className="modal-body">
            <h5>{modalContent[modalIndex].body}</h5>
          </div>
          <div className="modal-footer" style={{ justifyContent: 'center' }}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleDownload} 
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OSModal;
