# Random Generator via Cloudflare Pages Functions

This project provides a simple API to return:

- A random English full name: `?type=name`
- A random alphanumeric string: `?type=string&length=16`

## 🧪 Example Usage

- https://your-project.pages.dev/api?type=name
- https://your-project.pages.dev/api?type=string&length=20

## 🚀 Deploy on Cloudflare Pages

1. Push this repo to GitHub
2. Create a new project in [Cloudflare Pages](https://pages.cloudflare.com/)
3. Set:
   - Output directory: `public`
   - Functions directory: `functions`
4. Deploy!
