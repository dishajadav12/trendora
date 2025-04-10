import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z.string()
    .refine(
        (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
        { message: "Invalid price format" }
    );

// Schema for inserting products
export const insertProductSchema = z.object({
    name: z.string().min(1, "Name is required"),
    slug: z.string().min(1, "Slug is required"),
    category: z.string().min(1, "Category is required"),
    description: z.string().min(1, "Description is required"),
    images: z.array(z.string()).min(1, "At least one image is required"),
    brand: z.string().min(1, "Brand is required"),
    stock: z.coerce.number(),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
});

// Schema for signing users in
export const signInForm = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
});

export const signUpFormschema = z.object({
    name: z.string().min(3, "Name must be atleast 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters"),
    confirmPassword: z.string().min(6, "Password must be atleast 6 characters"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

//Cart Schemas
export const cartItemSchema = z.object({
    productId: z.string().min(1,'Product is required'),
    name: z.string().min(1, 'Name is required'),
    slug: z.string().min(1, 'Slug is required'),
    qty: z.number().int().nonnegative('Quantity must be a positive number'),
    image: z.string().min(1, 'Image is required'),
    price: currency
})

export const insertCartSchema = z.object({
    items: z.array(cartItemSchema),
    itemsPrice: currency,
    totalPrice: currency,
    shippingPrice: currency,
    taxPrice: currency,
    sessionCartId:z.string().min(1, 'Session cart id is required'),
    userId: z.string().optional().nullable()

})