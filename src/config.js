const config = {
  s3: {
    REGION: "ap-northeast-1",
    BUCKET: "ricky-tsms-upload2",
  },
  apiGateway: {
    REGION: "ap-northeast-1",
    URL: "https://t0vyuc21vg.execute-api.ap-northeast-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-northeast-1",
    USER_POOL_ID: "ap-northeast-1_0F972QGXm",
    APP_CLIENT_ID: "7jpi2u213tk94mfngokk9vh6ge",
    IDENTITY_POOL_ID: "ap-northeast-1:60da3132-5d4f-4c29-8d68-9bae6ce0c042",
  },
};

export default config;