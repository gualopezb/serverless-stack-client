export default {
  s3: {
    REGION: "us-west-2",
    BUCKET: "kommit-notes-serverless-app",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://r0ks80acs5.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_1UUS6bMwA",
    APP_CLIENT_ID: "18u6jmpea7k6n37h2f5f9llk3a",
    IDENTITY_POOL_ID: "us-west-2:f86ff6ce-ce41-492a-8780-cc4ee16a0b68",
  },
};
