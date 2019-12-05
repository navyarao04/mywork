import json
from datetime import datetime

def lambda_handler(event, context):
    # TODO implement
    response = {
        'statusCode': 200,
        "headers": { "Access-Control-Allow-Origin" : "*"},
        'body': json.dumps('Invalid Credit Card')
    }
    cc = event['headers']['cc']
    exp_month = event['headers']['expmonth']
    exp_year = event['headers']['expyear']
    cvv = event['headers']['cvv']
    
    if cc.isdigit() and exp_month.isdigit() and exp_year.isdigit() and cvv.isdigit():
        if len(cc) == 16:
            if len(cvv) == 3 or len(cvv) == 4:
                if int(exp_year) == int(datetime.now().year):
                    if int(exp_month) >= int(datetime.now().month):
                        response = {
                                        'statusCode': 200,
                                        "headers": { "Access-Control-Allow-Origin" : "*"},
                                        'body': json.dumps('Valid Credit Card')
                                    }
                elif int(exp_year) > int(datetime.now().year):
                    response = {
                                    'statusCode': 200,
                                    "headers": { "Access-Control-Allow-Origin" : "*"},
                                    'body': json.dumps('Valid Credit Card')
                                }
                    
    return response
