export const checkLogin = (mobile, password) => {
    if (!mobile || mobile?.length !== 10) {
        return {
            response: true,
            message: 'Please Enter Valid Mobile Number'
        }
    }

    if (!password) {
        return {
            response: true,
            message: 'Please Enter Password'
        }
    }

    if (password.length < 6) {
        return {
            response: true,
            message: 'Password must be 6 digit'
        }
    }

    return {
        response: false,
        message: ''
    }
}