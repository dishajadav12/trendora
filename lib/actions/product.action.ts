'use server';

import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "../utils";

export async function getLatestProducts() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany({
        take: 10,
        orderBy: { createdAt: 'desc' },
    });

    return convertToPlainObject(data) ;
}

// Get single product by its slug
export async function getProductBySlug(slug: string) {
    const prisma = new PrismaClient();

    return await prisma.product.findFirst({
        where: { slug: slug },
    });
}