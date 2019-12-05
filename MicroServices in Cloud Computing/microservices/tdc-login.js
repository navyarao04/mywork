var AWS = require("aws-sdk");

const dyClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // TODO implement
    let response = {
        statusCode: 400,
        body: JSON.stringify("FAILED"),
        "headers": { "Access-Control-Allow-Origin" : "*"},
        "isBase64Encoded": false
    };
    
    let email = event['headers']['email'];
    let password = event['headers']['password'];

    if(email == '' || password == ''){
        response = {
                statusCode: 400,
                body: JSON.stringify("There was a problem, Your email and password is incorrect"),
                "headers": { "Access-Control-Allow-Origin" : "*"},
                "isBase64Encoded": false
            };
    }
    else{
        let params = {
                        TableName: "tdc-users",
                        ExpressionAttributeValues: {
                            ":email": email
                        }, 
                        KeyConditionExpression: "email = :email"
                    };
                
        // QUERYING DYNAMODB TO FETCH DATA
        let respData = await dyClient.query(params).promise();
        if(respData['Items'].length == 0){
            response = {
                    statusCode: 400,
                    body: JSON.stringify("Email Id Not found"),
                    "headers": { "Access-Control-Allow-Origin" : "*"},
                    "isBase64Encoded": false
                };
        }
        else{
            let dbPassword = respData['Items'][0]['password'];
            if(dbPassword === password){
                            response = {
                                        statusCode: 200,
                                        body: JSON.stringify(respData),
                                        "headers": { "Access-Control-Allow-Origin" : "*"},
                                        "isBase64Encoded": false
                                    };
            }
            else{
                 response = {
                    statusCode: 400,
                    body: JSON.stringify("Incorrect Password"),
                    "headers": { "Access-Control-Allow-Origin" : "*"},
                    "isBase64Encoded": false
                };
            }

        }
    }
    /*const response = {
        statusCode: 200,
        body: JSON.stringify(event),
        "headers": {},
        "isBase64Encoded": false
    };*/
    return response;
};
