const dev = {
  STRIPE_KEY: "pk_test_TEKhSD1MpqZGCM3AagRvcr4u",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-wwzl1gthzhub",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://khzhv0hv44.execute-api.us-west-2.amazonaws.com/dev",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_CZQ6630eM",
    APP_CLIENT_ID: "2ma0q7pl7dn749cc1rq15cg79n",
    IDENTITY_POOL_ID: "us-west-2:a404197e-5a90-4ea1-a670-b46e739b2cd5",
  },
};

const prod = {
  STRIPE_KEY: "pk_test_TEKhSD1MpqZGCM3AagRvcr4u",
  s3: {
    REGION: "us-west-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1dtz3f1mdp5da",
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://gpkqkh4820.execute-api.us-west-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_pKQ7OQ15z",
    APP_CLIENT_ID: "6l1evjmgjj788qt8pbucvkemsp",
    IDENTITY_POOL_ID: "us-west-2:40d3b135-7f1d-4236-bf78-b7cf8e63d4bd",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
