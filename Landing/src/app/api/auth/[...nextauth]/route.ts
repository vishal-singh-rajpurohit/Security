import NextAuth from "next-auth";
import { authOptions } from "./options";

// Name of method should be handler
const handler = NextAuth(authOptions);


export {handler as GET, handler as POST}