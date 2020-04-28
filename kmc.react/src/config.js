export default {
    s3: {
        REGION: "ap-southeast-1",
        BUCKET: "kmc-uploads"
    },
    apiGateway: {
        REGION: "ap-southeast-1",
        URL: "https://8f5x722b24.execute-api.ap-southeast-1.amazonaws.com/dev"
    },
    cognito: {
        REGION: "ap-southeast-1",
        USER_POOL_ID: "ap-southeast-1_Uk7W62YqF",
        APP_CLIENT_ID: "9e8l8eah5tnabc5vuhlvpqmim",
        IDENTITY_POOL_ID: "ap-southeast-1:8f9822e4-7bde-4305-be9c-2d9c297ac932"
    },
    MAX_ATTACHMENT_SIZE: 5000000
};
