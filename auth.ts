// import NextAuth from 'next-auth';
// import {PrismaAdapter} from '@auth/prisma-adapter';
// import CredentialsProvider  from 'next-auth/providers/credentials'


// export const config = {
//     pages:{
//         signIn: '/sign-in',
//         error: '/sign-in',
//     },
//     session: {
//         strategy: 'jwt',
//         maxAge: 30 * 24 * 60 * 60 ,
//     },
//     // adapter
//     providers: [
//         CredentialsProvider({
//             credentials: {
//                 email:{type: 'email'},
//                 password: {type: 'password'},
//             },
//             async authorize(credentials) {
//                 if(credentials === null)  return null;

//                 const user = await prisma.user.findFirst({
//                     where: {
//                         email: credentials.email as string,
//                     }
//                 });
//             }
//         })
//     ]

// };

// export const {handlers, auth, signIn, signOut} = NextAuth(config);