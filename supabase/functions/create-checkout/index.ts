import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, whatsapp, source, startDate, timezone } = await req.json();

    if (!name || !whatsapp) {
      throw new Error("Name and WhatsApp are required");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Create a Stripe customer with metadata
    const customer = await stripe.customers.create({
      name,
      metadata: {
        whatsapp,
        source: source || "unknown",
        start_date: startDate || "",
        timezone: timezone || "",
      },
    });

    const origin = req.headers.get("origin") || "https://meowycare.com";

    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      line_items: [
        {
          price: "price_1T5CRr0xjDIKbCy3vO2QY3dY",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/payment-success?name=${encodeURIComponent(name)}`,
      cancel_url: `${origin}/onboarding`,
      metadata: {
        whatsapp,
        source: source || "unknown",
        start_date: startDate || "",
        timezone: timezone || "",
      },
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[CREATE-CHECKOUT] Error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
