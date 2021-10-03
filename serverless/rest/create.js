
const uuid = require('uuid');
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

//POST
module.exports.posttdata =  (event, context, callback) => {

    const data = JSON.parse(event.body);
    if (typeof data.text !== 'string') {
      console.error('Validation Failed');
      callback(null, {
        statusCode: 400,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the item.',
      });
      return;
    }
  

    const params = {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
          id: uuid.v1(),
          name: data.text
        },
    };
    
      // write the todo to the database
  dynamoDb.put(params, (error) => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the todo item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
    });
    // try {
    //   await createItem(params)
    //   return { body: 'Successfully created item!' }
    // } catch (err) {
    //   return { error: err }
    // }
};

// async function createItem(params){
//     try {
//       await ddb.put(params).promise();
//       // create a response
//       const response = {
//         statusCode: 200,
//         body: JSON.stringify(params.Item),
//       };
//       callback(null, response);
//     } catch (err) {
//       console.error(error);
//       callback(null, {
//         statusCode: error.statusCode || 501,
//         headers: { 'Content-Type': 'text/plain' },
//         body: 'Couldn\'t create the todo item.',
//       });
//       return;
//     }
// }

