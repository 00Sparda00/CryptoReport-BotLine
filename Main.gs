// var CHANNEL_ACCESS_TOKEN = 'rnRhW+pyKhqiN/yp8GBjhRpu2amQPMtUQoridOwn5KwKSO9ahRBX3rlM5hxZXlwxyEbTLLKMHeezrrptawC8sSFZnAXaz7w3uuEoMsjXObb3nQFJhywVqO4S4gLp2m8vCbOQJL6hTDAxpINZlWSQlwdB04t89/1O/w1cDnyilFU=';
// var line_endpoint = 'https://api.line.me/v2/bot/message/reply';

function doPost(e){
  var json = JSON.parse(e.postData.contents);
  var message = json.originalDetectIntentRequest.payload.data.message.text;
      // message = '@ocoin'
      message = message.toUpperCase();
    if (message === '@'){
      cryptoData = getCryptoReport();      
    } 
    else if (message.search("#") == 0){
      cryptoData = calculateMoney(message);
    }
    else{
      message = message.replace("@", "");   
      let data = getDataCoingeko(message);  
      if (data.length > 0){
        cryptoData = getCryptoPrice(data);
      }
      else{
        cryptoData = getCryptoPriceAlcor(message);
      }       
    }

      result = {
        "fulfillmentMessages":[
          {
          "platform":"line",
          "type": 4,
          "payload":{  
                "line":{ 
                  "type": "flex",
                  "altText": 'Bronya Report',
                  "contents": cryptoData
              }
            }
          }
        ]
      }  

    var replyJSON = ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    return replyJSON;   

}


