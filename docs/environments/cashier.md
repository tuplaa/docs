---
sidebar_position: 3
---

# Cashier
Deposits are initiated by making requests POST to
```
https://pam.tpl.4478.io/v1/deposit/request
```
paymentGateway: 
- piq for real payments with PIQ
- fpiq for fake PIQ

paymentMethod:
- visamc for cards
- to be continued



A helpful utility to imitate payment IQ is deployed to staging environment
Here is the list of compatible scenarios

## Card deposit

Send a deposit request to **fpiq** gateway instead of **piq**

   ```
   curl -X POST https://pam.tpl.4478.io/v1/deposit/request \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuZCI6ImRlbW8xX252cHRvb2xzIiwiZW1haWwiOiJkdHJhdmluKzAxMkBnbWFpbC5jb20iLCJleHAiOjE3NTg5ODgzODUsImlhdCI6MTc1ODkwMTk4NSwic3ViIjoiODEyMTMxMyIsInVzZXJuYW1lIjoiZHRyYXZpbjAxMiJ9.C9lIVpcvPahCgA91xVjeYjlWBBR-wi0YsB9yEX975rA" \
    -d '{
    "amount": "101",
    "currency": "EUR",
    "paymentGateway": "fpiq",
    "paymentMethod": "visamc",
    "encryptedCardData" : {
    "cardHolder": "Mari Liis",
    "encCreditcardNumber": "L8dbO7b5z+Wo4lsf7Gj2OgO795ScufyWs3cX19KoFg5MCp/hi6AS+rSMYKVhRLBTAYMke2o11gIiJx8ooilu9zYsRTgiWBnLxPhvXQCGS9y8wgCMx6A5jlS9sV1XsZDMl8ZzTxuJFSZqeACduSC/sM6kmCV1hby6Q1/h9fKdlxQ7XR4wddEaGycUJ20hhgIPoy86Tm5xE3WeV6NRTW/6QpXGwf4/qTSmJq/IkP90vD/2HrviFxKTtqIUuWUfzYdpugpkloQEvlHJyTSfP3QBME3o0kQh4tgFyryBEzRtY6a2CJZfvARRiHq4KTCbrKTzpcZWTNCbQZkPZiO9Xj8+nw==",
    "expiryMonth": "08",
    "expiryYear": "2030",
    "encCvv": "DbwKeDayH2IgkGvV2B8a3z4kozJBqp75bU6FxppndYzflkutcSvOcUBNiw9lCZda3L78o4d1BDJN6qXYUeGzPHOY3ZyZpRf95pv99ORwrKUi966WaFC4jIeRc6h6KQ5qmVUfy1rzz2UfbbnAIDFAVXU/0bx3AFrcwmOUWgTJmgN2Bs1oS8scM9eKKBWCFlXwE1kQlv8dQKUQRUHgK/jWVJhE3etFWVr0s3zRteNM1m0HmFdl3yu+qEUOPzfLFDe0R3aW5fQOhKF0voLUHUAzPEwWNnAUpBxZS/Eg0tERGp5BkcSfSHXWE1SflCDHFu11mf6ftQSri+RB8H8CuQ3hXg=="
    },
    "successUrl": "https://example.com/payment/success",
    "failureUrl": "https://example.com/payment/failure"
    }'
```
Response will contain a link to public checkout page 

```
    {
    ...
    "url": "https://piq-stub.stage.4478.io/checkout/1758902250",
    ...
    }
```
that offers 3 scenarios to continue
![Sample page](/img/fiq.png) 

Clicking on button will imitate the transaction settelment on the platform and redirect the client to one of the URLs provided in the deposit request