import {z } from 'zod'

export const usernameValidation = z
    .string()
    .min(4, "Username must be atleast 4 characters")
    .max(28, "Username no more than 28 characters")
    .regex( /^[a-zA-Z0-9_]+$/, "Username must not contain special characters")

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be at least 6 characters"})
})