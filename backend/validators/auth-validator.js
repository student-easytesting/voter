const { z } = require("zod");

// const phoneSchema = z.object({
//   phone: z
//     .string({ required_error: "Phone is required" })
//     .trim()
//     .min(10, { message: "Phone must be at least of 10 characters" })
//     .max(20, { message: "Phone must not be more than 20 characters" }),
// });

// const emailSchema = z.object({
//   email: z
//     .string({ required_error: "Email is required" })
//     .trim()
//     .email({ message: "Invalid email address" })
//     .min(3, { message: "Email must be at least of 3 characters" })
//     .max(255, { message: "Email must not be more than 255 characters" }),
// });
// Creating an object schema
const voterSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at lest of 3 characters. " })
    .max(255, { message: "Name must not be more than 255 characters" }),

  aadhar: z
    .string({ required_error: "aadhar is required" })
    .trim()
    .min(12, { message: "aadhar must be at least of 12 characters" })
    .max(12, { message: "aadhar must not be more than 12 characters" }),

  dob: z.string({ required_error: "dob is required" }).trim(),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  city: z
    .string({ required_error: "City is required" })
    .trim()
    .min(3, { message: "City must be at lest of 3 characters. " })
    .max(255, { message: "City must not be more than 255 characters" }),
});

module.exports = { voterSchema };
