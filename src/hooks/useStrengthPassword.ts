import { useEffect, useState } from "react"



/**
 * 
 * @param password {string} password to evaluate
 * @returns {object} object with the level of the password strength
 * @description This hook evaluates the strength of a password and returns the level of strength.
 * level 1 = very low, level 2 = low, level 3 = medium, level 4 = high
 * @example
 * const { level } = useStrengthPassword("password")
 * console.log(level) // 1
 */
export const useStrengthPassword = (password: string) => {
    const [level, setLevel] = useState(0)

    const evaluateStrength = (password: string) => {
        // check that the password is bigger enough
        let strength = password.length > 8 ? 1 : 0

        // check that the password has at least one special character
        const hasSpecialChar = /(?=.*[!@#$%^&*()_+\[\]{}\|;':,.<>?\/\~`])/g.test(password)
        if (hasSpecialChar) {
            strength++
        }

        // check that the password has at least one number
        const hasNumber = /(?=.*[0-9])/g.test(password)
        if (hasNumber) {
            strength++
        }
        // check that the password has at least one uppercase letter
        const hasUpperCaseLetter = /(?=.*[A-Z])/g.test(password)
        if (hasUpperCaseLetter) {
            strength++
        }
        // check that the password has at least one lowercase letter
        const hasLowerCaseLetter = /(?=.*[a-z])/g.test(password)
        if (hasLowerCaseLetter) {
            strength++
        }

        setLevel(strength === 5 ? 4 : strength === 4 ? 3 : strength)
    }

    useEffect(() => {
        if (password.length > 0) {
            evaluateStrength(password)
        }
    }, [password])

    return {
        level
    }
}
