import json
import boto3
from boto3 import resource
from boto3.dynamodb.conditions import Key

# The boto3 dynamoDB resource
dynamodb_resource = resource('dynamodb')

table = dynamodb_resource.Table('tdc-cart-order')

def lambda_handler(event, context):
    # TODO implement
    response = {
        'statusCode': 400,
        'headers':{"Access-Control-Allow-Origin" : "*"},
        'body': json.dumps('Failed')
    }
    
    email = event['headers']['email']
    
    if email == '':
        response = {
                        'statusCode': 400,
                        'headers':{"Access-Control-Allow-Origin" : "*"},
                        'body': json.dumps('There are no items in the cart')
                    }
        
    else:
        tableresponse = table.get_item(Key={'email': email})
        if 'Item' in tableresponse:
            if 'cartOrders' in tableresponse['Item']:
                response = {
                        'statusCode': 200,
                        'headers':{"Access-Control-Allow-Origin" : "*"},
                        'body': json.dumps(tableresponse['Item']['cartOrders'])
                    }
            else:
                response = {
                        'statusCode': 400,
                        'headers':{"Access-Control-Allow-Origin" : "*"},
                        'body': json.dumps('There are no items in the cart')
                    }
        else:
            response = {
                    'statusCode': 400,
                    'headers':{"Access-Control-Allow-Origin" : "*"},
                    'body': json.dumps('There are no items in the cart')
                }
    return response