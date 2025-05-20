import {z} from 'zod'


export const acceptMsssagesSchema = z.object({
    acceptMessages: z.boolean()
})