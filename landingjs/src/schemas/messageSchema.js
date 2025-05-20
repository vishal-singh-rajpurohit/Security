 import {z} from 'zod'
 
 
 export const msssagesSchema = z.object({
     content: z.string()
        .min(2, {message: "content atleast of 2 characters"})
        .max(300, {message: "Message must be no longer than 300 character"})
 })