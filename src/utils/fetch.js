import { getCookie } from "cookies-next"

const env = process.env.NODE_ENV
const LOCAL_URL = "http://localhost:5000"
const PRODUCTION_URL = "https://jnvkaa-backend.onrender.com"
const BASE_URL = env == "development" ? LOCAL_URL : PRODUCTION_URL

export const LoginAlumni = async (mobile, password) => {
    try {

        const response = await fetch(BASE_URL + "/api/user/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: mobile,
                password: password

            })
        });
        const data = await response.json();
        console.log(data);

        return {
            status: response.status,
            data
        }


    } catch (error) {

        console.log(error);
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }

    }
}

export const RegisterAlumni = async (mobile, password, name) => {
    try {

        const response = await fetch(BASE_URL + "/api/user/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: mobile,
                password: password,
                name: name

            })
        });
        const data = await response.json();
        console.log(data);

        return {
            status: response.status,
            data
        }


    } catch (error) {

        console.log(error);
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }

    }
}

export const sendOTP = async (mobile) => {
    try {

        const response = await fetch(BASE_URL + "/api/user/auth/send-otp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: mobile,
            })
        });
        const data = await response.json();
        console.log(data);

        return {
            status: response.status,
            data
        }


    } catch (error) {

        console.log(error);
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }

    }
}

export const verifyOTP = async (mobile, otp) => {
    try {

        const response = await fetch(BASE_URL + "/api/user/auth/verify-otp", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                mobile: mobile,
                otp: otp
            })
        });
        const data = await response.json();
        console.log(data);

        return {
            status: response.status,
            data
        }
    } catch (error) {

        console.log(error);
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }

    }
}

export const createPostAlumni = async (body) => {
    try {
        const token = getCookie('token');
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(body);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/user/post/create", requestOptions)
        const data = await response.json();
        return {
            status: response.status,
            data
        }
    } catch (error) {

        console.log(error);
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }

    }

}

export const uploadImage = async (image) => {
    try {

        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var formdata = new FormData();
        formdata.append("image", image); // fileInput.files[0]

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/user/post/image", requestOptions);
        const data = await response.json();

        console.log(data);

        return {
            status: response.status,
            data
        }

    } catch (error) {
        console.log(error);
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }
    }
}

export const deleteImage = async (id) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": id
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/user/post/image/delete", requestOptions)
        const data = await response.json();

        return {
            status: response.status,
            data
        }

    } catch (error) {

        console.log(error);
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }

    }
}