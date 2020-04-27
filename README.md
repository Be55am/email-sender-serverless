# email-sender-serverless
this is a lambda function to get the messages from a static website 

## I'm Using this function as my portfolio backend 
you can link this function with a static website as a messaging backend.
# HOW TO USE IT 
##### YOU need an AWS account or any other Cloud provider
1. run `npm install ` to install the dependencies.
2. run `zip -r mail-sender.zip . ` to create a zip file.
3. create a lambda function using your console and upload your zip file.
4. create your envirenment variables:
```
MAILHOST    Your mail host
MAILPASS	your email password
MAILPORT	the port of smtp protocol used
MAILUSER	Your sender email
MAILUSERNAME	Your name
MAILWEBSITE	Your website
```


