import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId:"98535905834-qe0ivqsl9rir4sd9oiviqt6jg7ghf8uu.apps.googleusercontent.com",
            clientSecret:"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",

        })
    ]
  
})

export { handler as GET, handler as POST }