import { getMyOwnProfile } from "@/utils/fetch";
import { getCookie } from "cookies-next";
import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const AlumniMeetResponsePopup = () => {
  const [showModal, setShowModal] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if the modal has been shown before in the current session
    // const hasShownModal = false;
    const isTokenExist = getCookie("token");
    const hasShownModal = sessionStorage.getItem("hasShownModal");
    if (!hasShownModal) {
      setShowModal(true);
      if (isTokenExist) {
        sessionStorage.setItem("hasShownModal", "true");
      } else {
        sessionStorage.removeItem("hasShownModal");
      }
    }
  }, []);

  const registerOnAlumniMeet = async (userResponse = true) => {
    const isTokenExist = getCookie("token");
    if (!isTokenExist) {
      window.location.href = "/auth/login";
      return;
    }

    setIsLoading(true);
    const loadingToast = toast.loading("Please wait...");

    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const userData = await getMyOwnProfile();
      if (userData.status === 200) {
        console.log(userData.data);
        let bodyContent = JSON.stringify({
          name: userData.data.name,
          mobile: userData.data.mobile,
          email: userData.data.profileDetails.mailId,
          passout_year: userData.data.profileDetails.graduationYear,
          response: true,
          event_date: "2024-12-22",
        });

        let response = await fetch(
          "https://jnvkaa.pockethost.io/api/collections/alumni_meet_attendees/records",
          {
            method: "POST",
            body: bodyContent,
            headers: headersList,
          }
        );

        if (response.status === 200) {
          setShowModal(false);
          toast.success("Registered for Alumni Meet");
        }
      }
    } catch (error) {
      toast.error("Error registering for Alumni Meet");
    } finally {
      toast.dismiss(loadingToast);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster />
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
                  Are you attending Alumni Meet 2024?
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
                  The alumni meet is going to be held on 22nd of December at JNV
                  Kendrapara. Register yourself & mark the calendar ❤️
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => registerOnAlumniMeet(true)}
                >
                  {IsLoading ? (
                    <div class="spinner-border" role="status"></div>
                  ) : (
                    "Register"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlumniMeetResponsePopup;
