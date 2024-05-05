import { getCookie } from "cookies-next"

const env = process.env.NODE_ENV
const LOCAL_URL = "http://localhost:5000"
const PRODUCTION_URL = "https://jnvkaa-backend.onrender.com"
const BASE_URL = env == "development" ? LOCAL_URL : PRODUCTION_URL

export const GLOBAL_URL = BASE_URL;

export const isValidateInputID = (input) => {

    // Check if input is a string
    if (typeof input === 'string') {
        // Check if string length is 12 or 24
        if (input.length === 12 || input.length === 24) {
            // Check if string is a valid hexadecimal
            const hexRegex = /^[0-9A-Fa-f]{12,24}$/g;
            if (hexRegex.test(input)) {
                return true;
            }
        }
    }

    // If none of the above conditions are met, return false
    return false;
}

export const postSupport = async (body) => {


    try {
        const response = await fetch(BASE_URL + "/api/user/support", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": body?.name,
                "email": body?.email,
                "subject": body?.subject,
                "message": body?.message

            })
        });

        const data = await response.json();

        return {
            status: response.status,
            data
        }


    } catch (error) {
        return {
            status: 500,
            data: {
                message: "Internal Server Error",
                error: String(error)
            }
        }
    }
}

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

export const LoginTeacher = async (mobile, password) => {
    try {

        const response = await fetch(BASE_URL + "/api/teacher/auth/login/", {
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



export const RegisterTeacher = async (profileDetails) => {

    try {
        var myHeaders = new Headers();
        // myHeaders.append("x-access-token", getCookie('token'));
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify(profileDetails)
        };

        const response = await fetch(BASE_URL + "/api/teacher/auth/register", requestOptions);
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
                message: "Internal Server Error"
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
export const uploadImageNonAuth = async (image) => {
    try {

        var myHeaders = new Headers();
        // myHeaders.append("x-access-token", getCookie('token'));

        var formdata = new FormData();
        formdata.append("image", image); // fileInput.files[0]

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/user/post/image/non-auth", requestOptions);
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

export const getPostsAlumni = async (skip) => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/posts?skip=" + skip, requestOptions);
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

export const getNewsUpdate = async () => {
    try {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/newsupdate", requestOptions);
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

export const getEventById = async (id) => {
    try {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/event/id/" + id, requestOptions);
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
};

export const getLatestFourAlumni = async () => {
    try {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/alumni/profile/last-4", requestOptions);
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


export const getAlumniProfiles = async (skip) => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/alumni/all?skip=" + skip, requestOptions);
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

export const getTeachersProfiles = async (skip) => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/teacher/all-profiles?skip=" + skip, requestOptions);
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

export const getAlumniProfileById = async () => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/alumni/my-profile", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const getAlumniBirthday = async () => {


    try {
        var myHeaders = new Headers();
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
            caches: 'no-store'
        };

        const response = await fetch(BASE_URL + "/api/alumni/birthdays", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

// access by token
export const getTeacherOwnProfileByToken = async () => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/teacher/my-profile", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const updateTeacherProfile = async (profileDetails) => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify(profileDetails)
        };

        const response = await fetch(BASE_URL + "/api/teacher/update-profile", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const updateUserProfile = async (profileDetails) => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify(profileDetails)
        };

        const response = await fetch(BASE_URL + "/api/alumni/update-details", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const searchAlumniByParameter = async (searchParameter, searchValue) => {

    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        const response = await fetch(BASE_URL + "/api/alumni/search?" + `${searchParameter}=${searchValue}`, requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const getAlumniProfileByID = async (ID) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow',
            body: JSON.stringify({
                id: ID
            })
        };

        const response = await fetch(BASE_URL + "/api/alumni/search/id", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const getAlumniPostByID = async (id) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',

        };

        const response = await fetch(BASE_URL + "/api/post/" + id, requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const getAdminYoutubePostById = async (id) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',

        };

        const response = await fetch(BASE_URL + "/api/moderator/post/youtube/id/" + id, requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const getYoutubePosts = async (skip, limit) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/post/youtube/all?skip=" + skip, requestOptions);
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
export const getAlumniMeetsPostById = async (id) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',

        };

        const response = await fetch(BASE_URL + "/api/alumni-meet/id/" + id, requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}


export const getMyOwnProfile = async (req, res) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',

        };

        const response = await fetch(BASE_URL + "/api/alumni/my-profile", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

// offers & free trials

export const getFreeTrials = async () => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',

        };

        const response = await fetch(BASE_URL + "/api/user/free-trials", requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

// /api/user/free-trial/redeem/:code

export const getRedeemFreeTrials = async (code) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',

        };

        const response = await fetch(BASE_URL + "/api/user/free-trial/redeem/" + code, requestOptions);
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
                message: "Internal Server Error"
            }
        }

    }
}

export const getOfficialPosts = async (skip) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/user/official/posts?limit=15&skip=" + skip || 0, requestOptions);
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

export const getOfficialPostByID = async (id) => {
    try {
        var myHeaders = new Headers();
        myHeaders.append("x-access-token", getCookie('token'));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(BASE_URL + "/api/user/official/post/" + id, requestOptions);
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