import React,{ useState , useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";
import { changePassword } from "@/utils/fetch";
import { checkChangePassword } from "@/utils/validator";
import toast from "react-hot-toast";

const ChangePassword = () => {
  const { theme } = useContext(ThemeContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const asyncChangePassword = async (e) => {
    e.preventDefault();

    const checkChangePasswordResponse = checkChangePassword(oldPassword, newPassword);

    if (checkChangePasswordResponse.response) {
      return toast.error(checkChangePasswordResponse.message);
    }

    const loadingToast = toast.loading("Please wait...");
    const response = await changePassword(oldPassword, newPassword);
    toast.dismiss(loadingToast);
    
    if (response.status === 200) {
        toast.success(response.data.message);
        window.location.href = "/profile/my-profile"
    } else {
        toast.error(response.data.message);
    }
  };
  return (
    <section className="contact-section pt-100 pb-100">
      <div className="container">
        <div className="row gy-4 justify-content-center align-items-center">
          <div className="col-lg-7">
            <div className="form-title">
              <h2 className={`${theme === "dark" ? "text-light" : ""}`}>
                Change Password 
              </h2>
            </div>
            <form className="contact-form">
              <div className="row">
                <div className="col-12">
                  <div className="form-inner">
                    <input
                      onChange={(e) => setOldPassword(e.target.value)}
                      value={oldPassword}
                      type="password"
                      placeholder="Enter your old password"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-inner">
                    <input
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                      type="password"
                      placeholder="Enter your new password"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <button
                    onClick={asyncChangePassword}
                    type="submit"
                    className="eg-btn btn--primary btn--lg"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
