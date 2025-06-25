export default {
  async fetch(request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type") || "name";
    const length = parseInt(searchParams.get("length")) || 12;

    if (type === "name") {
      return new Response(generateFullName(), {
        headers: { "Content-Type": "text/plain" },
      });
    } else if (type === "string") {
      return new Response(generateRandomString(length), {
        headers: { "Content-Type": "text/plain" },
      });
    } else {
      return new Response("Invalid type. Use ?type=name or ?type=string", {
        status: 400,
        headers: { "Content-Type": "text/plain" },
      });
    }
  },
};

function generateFullName() {
  const firstNames = [
    "John", "Emma", "Oliver", "Ava", "William", "Sophia",
    "James", "Isabella", "Benjamin", "Mia", "Lucas", "Charlotte"
  ];
  const lastNames = [
    "Smith", "Johnson", "Brown", "Taylor", "Anderson",
    "Thomas", "Jackson", "White", "Harris", "Martin"
  ];
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${first} ${last}`;
}

function generateRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
