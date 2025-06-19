---
sidebar_position: 1
---

# Getting Started

Welcome to the NVP Platform documentation. This guide will help you get started with integrating our services into your application.

## Authentication

All player-related resources in the NVP Platform are protected and require authentication. Authentication is handled through Bearer token authorization.

### How to Authenticate

1. First, you need to sign in using the authentication endpoint
2. Upon successful sign-in, you'll receive an access token
3. Include this token in all subsequent API requests in the Authorization header:
   ```
   Authorization: Bearer <your_access_token>
   ```

### Token Usage

- The access token must be included in the `Authorization` header of every request to protected resources
- Tokens have a limited lifetime and will need to be refreshed
- Keep your tokens secure and never expose them in client-side code

## Available Environments

We provide different environments for development and testing:

- **Staging**: For testing and development
  - Web application: https://demo1.nvp.tools
  - API Base URL: https://pam.demo1.nvp.tools
  - Available brand: demo1

## Rate Limits

Please be aware of the following rate limits:
- 100 requests per minute

## Next Steps

- Check out our [API Reference](/docs/openapis/pam) for detailed endpoint documentation
- Review the [Staging Environment](/docs/environments/staging) for testing your integration
- Stay updated with our [Changelog](/docs/changelog) for the latest changes and improvements

