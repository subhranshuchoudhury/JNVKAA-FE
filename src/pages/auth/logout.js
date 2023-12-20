import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function logout() {

    const router = useRouter();

    const logOutUser = () => {
        toast.success("Logged out successfully");
        deleteCookie("token");
        localStorage.removeItem("userData");
        window.location.href = "/auth/login";
    }

    useEffect(() => {

        const token = getCookie("token");
        if (!token) {
            router.replace("/auth/login");
        }

    }, [])

    return (
        <div style={{
            marginTop: "100px",
            padding: "20px",
        }} className="error-banner-content text-center">

            <p>
                By clicking the button below, you will be logged out of the system.
            </p>

            <button onClick={logOutUser} className="eg-btn btn--primary btn--lg">
                <i className="bi bi-house-door" />
                Logout
            </button>

        </div>
    );
}
