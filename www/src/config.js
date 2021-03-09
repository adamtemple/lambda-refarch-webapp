// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "2ghqe1ia20usgiu1qhgn4icqp2",     // CognitoClientID
  "api_base_url": "https://1qd5r472u7.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "sigsvrlessappdemo-sig-serverless-app-test.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1xw4h9f092pzs.amplifyapp.com"                                      // AmplifyURL
};

export default config;
