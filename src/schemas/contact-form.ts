import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email().max(64),
  message: z.string().min(10).max(256),
  checked: z.boolean().refine((value) => value === true, {
    message: "Please agree with the policy and privacy.",
  }),
});
