import React, { useState, useEffect } from "react";

const AppDownloadModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown before in the current session
    const hasShownModal = sessionStorage.getItem("hasShownModal");
    if (!hasShownModal) {
      setShowModal(true);
      sessionStorage.setItem("hasShownModal", "true");
    }
  }, []);

  const handleDownloadClick = () => {
    const appLink =
      "https://github.com/subhranshuchoudhury/JNVKAA-FE/raw/refs/heads/main/JNVKAA.apk";
    window.open(appLink, "_blank");
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Download Our Latest Android App
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Get the latest version of our Android app for the best
                  experience.
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleDownloadClick}
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

export default AppDownloadModal;
