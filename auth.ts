import NextAuth from 'next-auth';
import { prisma } from "@/db/prisma";

import {PrismaAdapter} from '@auth/prisma-adapter';
import CredentialsProvider  from 'next-auth/providers/credentials'
import { compareSync } from 'bcrypt-ts-edge';
import type { NextAuthConfig } from 'next-auth';


export const config = {
    pages:{
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60 ,
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email:{type: 'email'},
                password: {type: 'password'},
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            async authorize(credentials: any) {
                if (!credentials) return null;

                const user = await prisma.user.findFirst({
                    where: {
                        email: credentials.email,
                    },
                });

                if (user && user.password) {
                    const isMatch = compareSync(credentials.password, user.password);

                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        };
                    }
                }
                return null;
            }
        })
    ],
   callbacks: {
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async session({ session, token, user, trigger }: any) {
            if (token.sub) {
                session.user.id = token.sub;
                session.user.role = token.role;
                session.user.name = token.name;
            }
console.log('token', token)
            if (trigger === 'update' && user?.name) {
                session.user.name = user.name;
            }

            return session;
        },
       // eslint-disable-next-line @typescript-eslint/no-explicit-any
        async jwt({token, user, trigger, session} : any) {
            if (user) {
                token.role = user.role;

                if (user.name === 'NO_NAME'){
                    token.name = user.email!.split('@')[0];
                    await prisma.user.update({
                        where: {id: user.id},
                        data: {name: token.name}
                    });
                }
            }
            return token;
        }
    }
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);