// this is special declaration file in next.js where we can define types

import 'next-auth'
import { DefaultSession } from 'next-auth'


declare module 'next-auth' {
    interface User {
        _id?: string,
        isVerified?: boolean,
        isAccptingMessages?: boolean,
        username?: string,
    }
    interface Session {
        user: {
            _id?: string,
            isVerified?: boolean,
            isAccptingMessages?: boolean,
            username?: string,
        } & DefaultSession['user'] // defining a key for default session
    }

}

declare module 'next-auth/jwt' {
    interface JWT {
        _id?: string,
        isVerified?: boolean,
        isAccptingMessages?: boolean,
        username?: string,
    }
}