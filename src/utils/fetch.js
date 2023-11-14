const BASE_URL = "http://localhost:5000"

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
            status: response.status,
            data: null
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
            status: response.status,
            data: null
        }

    }
}