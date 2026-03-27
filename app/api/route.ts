// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Hello world!" });
// }
//API call to supabase using Rest API

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

export async function GET() {
  if (!supabaseUrl || !supabaseAnonKey) {
    return new Response(
      JSON.stringify({ error: "Supabase credentials are missing" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
    headers: {
      Authorization: `Bearer ${supabaseAnonKey}`,
      apikey: supabaseAnonKey || "",
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return Response.json(data);
}
