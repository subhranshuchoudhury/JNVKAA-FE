import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the cross icon from react-icons

const OSModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Detect if the user is on Windows or Android
    const detectPlatform = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;

      if (navigator.platform.indexOf('Win') !== -1) {
        return true; // Windows user
      }
      if (/android/i.test(userAgent)) {
        return true; // Android user
      }
      return false; // Otherwise, it's macOS or iOS
    };

    if (detectPlatform()) {
      setShowModal(true);
    }
  }, []);

  const handleDownload = () => {
   
    const downloadLink = 'https://github.com/subhranshuchoudhury/JNVKAA-FE/raw/refs/heads/main/JNVKAA.apk'; 
    window.location.href = downloadLink; 
  };


  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body">
              <h5>Discover Our Amazing Features</h5>
<p>Unlock the full experience with just a tap. Download our app now and explore endless possibilities!</p>

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
      )}
    </>
  );
};

export default OSModal;
