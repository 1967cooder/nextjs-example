// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Hello world!" });
// }
//Diarect API call to supabase using fetch
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnnonKey = process.env.SUPABASE_ANNON_KEY;

const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
  headers: {
    Authorization: `Bearer ${supabaseAnnonKey}`,
    apikey: supabaseAnnonKey,
    "Content-Type": "application/json",
  },
});
const data = await response.json();
export async function GET() {
  return Response.json(data);
}
