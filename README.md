# Random Generator Worker

A simple Cloudflare Worker that generates:

- A random English full name: `?type=name`
- A random alphanumeric string: `?type=string&length=16`

## 🧪 Examples

```
https://<your-worker>.workers.dev/?type=name
https://<your-worker>.workers.dev/?type=string&length=20
```

## 🚀 Deploy with GitHub Actions

### 1. Add GitHub Secrets

- `CF_API_TOKEN`: your Cloudflare API token
- `CF_ACCOUNT_ID`: your Cloudflare account ID

### 2. Push to main branch

Deployment is automatic via GitHub Actions.
