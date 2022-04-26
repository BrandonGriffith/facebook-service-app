import NextAuth from "next-auth/next"
import FacebookProvider from "next-auth/providers/facebook"


export default NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    callbacks: {
        session({ session, token, user }) {
          return session // The return type will match the one returned in `useSession()`
        },
    },
    secret: process.env.JWT_SECRET
})
