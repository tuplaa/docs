---
sidebar_position: 2
---

# Environment Setup

This guide will help you set up your development environment for working with the NVP Platform.

## Prerequisites

Before you begin, ensure you have:

- Access to the NVP Platform
- API credentials
- Development environment ready

## Configuration

### API Access

1. **Obtain Credentials**
   - Request API access
   - Receive API keys
   - Store credentials securely

2. **Environment Variables**
   ```bash
   NVP_API_KEY=your_api_key
   NVP_API_URL=https://api.nvp-platform.com
   ```

### Development Setup

1. **Required Tools**
   - Node.js (v18 or higher)
   - npm or yarn
   - Git

2. **Installation**
   ```bash
   npm install nvp-sdk
   # or
   yarn add nvp-sdk
   ```

## Testing Your Setup

1. **Verify Connection**
   ```javascript
   const nvp = require('nvp-sdk');
   nvp.configure({
     apiKey: process.env.NVP_API_KEY,
     apiUrl: process.env.NVP_API_URL
   });
   ```

2. **Run Tests**
   ```bash
   npm test
   ```

## Next Steps

- Review the [Introduction](./intro)
- Explore [API Documentation](../api)
- Start with basic integration 