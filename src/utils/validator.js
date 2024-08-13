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

export const checkRegisterStepOne = (name, mobile, password, confirmPassword) => {
    if (!name || name?.length < 3) {
        return {
            response: true,
            message: 'Please Enter Name'
        }
    }

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

    if (!confirmPassword) {
        return {
            response: true,
            message: 'Please Enter Confirm Password'
        }
    }

    if (confirmPassword.length < 6) {
        return {
            response: true,
            message: 'Confirm Password must be 6 digit'
        }
    }

    if (password !== confirmPassword) {
        return {
            response: true,
            message: 'Password and Confirm Password must be same'
        }
    }



    return {
        response: false,
        message: ''
    }
}

export const checkRegisterTeacher = (name, mobile, password, confirmPassword, joiningYear, teacherSubject) => {
    if (!name || name?.length < 3) {
        return {
            response: true,
            message: 'Please Enter Your Name'
        }
    }

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

    if (!confirmPassword) {
        return {
            response: true,
            message: 'Please Enter Confirm Password'
        }
    }

    if (confirmPassword.length < 6) {
        return {
            response: true,
            message: 'Confirm Password must be 6 digit'
        }
    }

    if (password !== confirmPassword) {
        return {
            response: true,
            message: 'Password and Confirm Password must be same'
        }
    }

    if (!joiningYear) {
        return {
            response: true,
            message: 'Please Enter Joining Year'
        }
    }

    if (!teacherSubject) {
        return {
            response: true,
            message: 'Please Enter Teacher Subject'
        }
    }







    return {
        response: false,
        message: ''
    }
}

export const checkOTP = (otp) => {
    if (!otp || otp?.length !== 4) {
        return {
            response: true,
            message: 'Please Enter Valid OTP'
        }
    }

    return {
        response: false,
        message: ''
    }
}

export const checkSendOTP = (mobile) => {
    if (!mobile || mobile?.length !== 10 || isNaN(mobile)) {
        return {
            response: true,
            message: 'Please Enter Valid Mobile Number'
        }
    }

    return {
        response: false,
        message: ''
    }
}

export const checkResetPassword = (newPassword,otp,mobile) => {
    if (!otp || otp?.length !== 4) {
        return {
            response: true,
            message: 'Please Enter Valid OTP'
        }
    }

    if (!newPassword) {
        return {
            response: true,
            message: 'Please Enter New Password'
        }
    }

    if (newPassword.length < 6) {
        return {
            response: true,
            message: 'Password must be 6 digit'
        }
    }


    if (!mobile || mobile?.length !== 10) {
        return {
            response: true,
            message: 'Please Enter Valid Mobile Number'
        }
    }

    return {
        response: false,
        message: ''
    }
}

export const checkChangePassword = (oldPassword,newPassword) => {
    if (!oldPassword) {
        return {
            response: true,
            message: 'Please Enter Old Password'
        }
    }

    if (!newPassword) {
        return {
            response: true,
            message: 'Please Enter New Password'
        }
    }

    if (newPassword.length < 6) {
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