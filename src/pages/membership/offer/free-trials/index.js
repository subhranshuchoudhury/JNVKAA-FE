import React from "react";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFreeTrials, getRedeemFreeTrials } from "@/utils/fetch";
import toast from "react-hot-toast";
import { ThemeContext } from "@/components/ThemeContext";
import Image from "next/image";

export default function Page() {
  const { theme } = useContext(ThemeContext);

  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  const [FreeTrialsData, setFreeTrailsData] = useState([]);

  useEffect(() => {
    loadMemberData();
  }, []);

  const loadMemberData = async () => {
    setLoading(true);
    const res = await getFreeTrials();
    if (res.status === 200) {
      setFreeTrailsData(res?.data);
    }
    console.log(res);
    setLoading(false);
  };

  const redeemCoupon = async (code) => {
    const loading = toast.loading("Please wait...");
    const res = await getRedeemFreeTrials(code);
    toast.dismiss(loading);
    if (res.status === 200) {
      toast.success(res.data.message);
      router.push("/alumnus");
    } else {
      toast.error(res.data.message);
    }
    console.log(res);
  };

  // const handleUPIPayment = () => {
  //   // This will open the UPI app if available
  //   const upiUrl =
  //     "upi://pay?pa=abhiseksahoo.07@axl&pn=ABHISEK%20SAHOO&mc=0000&mode=02&purpose=00";
  //   window.location.href = upiUrl;
  // };

  function copyToClipboard(text) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Text copied to clipboard");
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        toast.error("Failed to copy text");
        console.error("Failed to copy text: ", err);
      });
  }

  return (
    <section className="author-section pt-100 pb-100">
      {Loading && (
        <div className="text-center">
          <div
            className={`spinner-border text-${
              theme === "dark" ? "light" : "primary"
            }`}
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!Loading && FreeTrialsData && (
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-12">
              {/* Redeem Coupons Box */}
              <div className="author-details">
                <div className="author-info">
                  <h2 className={`${theme === "dark" ? "text-light" : ""}`}>
                    Activate Your Membership ✨
                  </h2>
                </div>
              </div>

              {/* New Box with Image on Left and UI Content (User ID) on Right */}
              <div
                className="sidebar-widget-1 mt-5"
                style={{ padding: "10px", height: "auto", minHeight: "150px" }}
              >
                <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>
                  Pay Via UPI
                </h6>
                <div className="d-flex align-items-center">
                  {/* Left Side - Image */}
                  <div
                    className="membership-img"
                    style={{ marginRight: "15px" }}
                  >
                    <Image
                      src={"/assets/images/upi/upi_new.png"}
                      alt="UPI QR"
                      width={150} // Make it square
                      height={100} // Make it square
                      style={{ borderRadius: "10px" }} // Optional: Rounded corners for square image
                    />
                  </div>

                  {/* Right Side - Bank Details */}
                  <div className="membership-details ms-auto">
                    <div
                      className={`${
                        theme === "dark" ? "text-light" : ""
                      } text-end`}
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        padding: "10px",
                        border: "1px solid #ccc",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <b>A/C HOLDER - JNV KENDRAPARA ALUMNI ASSOCIATION</b>
                      <b>A/C NO - 512910510000400</b>
                      <b>IFSC - BKID0005129</b>
                      <b>BANK - Bank Of India</b>
                    </div>
                  </div>
                </div>
                {/* Pay Now Button */}
                <div className="text-end mb-60">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      copyToClipboard("9439034620@ptyes");
                    }} // Use function to handle UPI payment
                  >
                    Copy UPI Details
                  </button>
                </div>
              </div>

              <div className="sidebar-widget-1">
                <h6 className={`title ${theme === "dark" ? "text-light" : ""}`}>
                  Redeem Coupons
                </h6>
                <ul className="social-3">
                  {FreeTrialsData?.map((coupon, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        if (!coupon.isActivated) {
                          toast.error("Coupon has been expired.");
                        }
                      }}
                      title={coupon?.name}
                      className={`${theme === "dark" ? "dark-li" : ""}`}
                    >
                      <a
                        href={coupon.isActivated && "#"}
                        onClick={() =>
                          coupon.isActivated && redeemCoupon(coupon?.code)
                        }
                        className={`${theme === "dark" ? "text-hover" : ""}`}
                      >
                        <span
                          className={`${theme === "dark" ? "text-light" : ""}`}
                        >
                          <i
                            className={`${
                              coupon.isActivated
                                ? "bi bi-award-fill"
                                : "bi bi-award"
                            } ${theme === "dark" ? "text-light" : ""}`}
                          />
                          {coupon?.code}
                        </span>
                        <span
                          className={`${theme === "dark" ? "text-light" : ""}`}
                        >
                          <strong>
                            {coupon?.isActivated ? "Redeem Now" : "Expired"} (
                            {coupon?.duration_in_days} Days Free
                          </strong>
                          )
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <i>
                Note: You can activate membership by clicking on the coupon
                name. If you have any active premium membership then you can't
                redeem any free trials code.
              </i>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
