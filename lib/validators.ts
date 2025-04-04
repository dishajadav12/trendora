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