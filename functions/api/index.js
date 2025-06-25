export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const type = searchParams.get('type');
  const length = parseInt(searchParams.get('length') || '16');

  if (type === 'name') {
    const firstNames = ['John', 'Alice', 'Mike', 'Emma', 'David'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'];
    const name = \`\${firstNames[Math.floor(Math.random() * firstNames.length)]} \${lastNames[Math.floor(Math.random() * lastNames.length)]}\`;
    return new Response(name);
  }

  if (type === 'string') {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return new Response(result);
  }

  return new Response('Invalid type', { status: 400 });
}
