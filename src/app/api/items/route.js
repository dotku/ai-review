export async function GET(request) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    headers: {
      "Content-Type": "application/json",
      "API-Key": process.env.DATA_API_KEY,
    },
  });
  const data = await res.json();

  return Response.json({
    body: request.body,
    query: request.nextUrl.search,
    cookies: request.cookies.getAll(),
    data,
  });
}
