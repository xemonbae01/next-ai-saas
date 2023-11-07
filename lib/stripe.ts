import Stripe from "stripe";

//or we can use "(process.env.STRIPE_API_KEY || '')"
export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2023-10-16",
  typescript: true,
});
