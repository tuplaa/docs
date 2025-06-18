# Staging Environment

## General information

| setting             | value                                                                                      |
|---------------------|--------------------------------------------------------------------------------------------|
| Web application URL | [https://demo1.nvp.tools](https://demo1.nvp.tools)                                         |
| OpenAPI             | [https://pam.demo1.nvp.tools/v1/openapi.yaml](https://pam.demo1.nvp.tools/v1/openapi.yaml) |
| API Base URL        | [https://pam.demo1.nvp.tools](https://pam.demo1.nvp.tools)                                 |


## Rate Limits
The staging environment has the following rate limits:
- 100 requests per minute


## Testing
The staging environment is designed for testing and development purposes. All data in this environment is reset periodically. 

## cURL smoke test

### 1. Sign-Up
```
dtravin@dt platform % curl -X POST 'https://pam.demo1.nvp.tools/v1/signup' \
-H 'Content-Type: application/json' \
-d '{
"username": "player124",
"email": "player2@example.com",
"password": "securePassword123"
}'
```
### 2. Sign-In and receive an access token

```
{"email":"player2@example.com","emailVerified":false,"status":"active","username":"player124"}%                                                                                                                                                                                         
dtravin@dt platform % curl -X POST 'https://pam.demo1.nvp.tools/v1/signin' \
-H 'Content-Type: application/json' \
-d '{
"email": "player2@example.com",
"password": "securePassword123"
}'
{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBsYXllcjJAZXhhbXBsZS5jb20iLCJleHAiOjE3NTAzNjQ1MTQsImlhdCI6MTc1MDI3ODExNCwic3ViIjoicGxyXzcwT1lKT1RVWUVRTEJFNURSN0FFTUoiLCJ1c2VybmFtZSI6InBsYXllcjEyNCJ9.PriVBfZFxQ0mEiJGL6KN0-ToZ5oRt7XsHNxc-uYi9wk","expiresIn":86400,"player":{"email":"player2@example.com","emailVerified":false,"status":"active","username":"player124"},"tokenType":"Bearer"}%                                                                                                                                                         
```

### 3. Request the protected resource

```
dtravin@dt platform % curl -X GET 'https://pam.demo1.nvp.tools/v1/players/me' \
-H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBsYXllcjJAZXhhbXBsZS5jb20iLCJleHAiOjE3NTAzNjQ1MTQsImlhdCI6MTc1MDI3ODExNCwic3ViIjoicGxyXzcwT1lKT1RVWUVRTEJFNURSN0FFTUoiLCJ1c2VybmFtZSI6InBsYXllcjEyNCJ9.PriVBfZFxQ0mEiJGL6KN0-ToZ5oRt7XsHNxc-uYi9wk'
{"email":"player2@example.com","emailVerified":false,"status":"active","username":"player124"}%    
```