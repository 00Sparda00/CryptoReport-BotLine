function getServerStatusBomb() {
    var requestUrl = "https://api.bombcrypto.io/ccu";
    var options = {muteHttpExceptions: true}; 
    let success = false;
    do {
      var res = UrlFetchApp.fetch(requestUrl,options);
      if (res != 'error code: 1015') {
        var resCode = res.getResponseCode();
        if (resCode == 200){
          var content = res.getContentText();
          var json = JSON.parse(content); 
          if (typeof(json) != "undefined"){
            success = true;   
          }
        }         
      }                 
    }
    while (success != true);
    let data = JSON.stringify(content);
        json = JSON.parse(data);    	  
		    json = JSON.parse(json);   

    var arr_count = [];
    var row_status = [];
    var col_status = [];
    var serverstatus = [];
    var count = 0; 
    for (let i = 0; i < json.message.details.length; i++){
        name = json.message.details[i][0];
        num = json.message.details[i][1];
        max = json.message.details[i][2];
        if (count < 3) {
          arr_count.push([name,num,max]);
        }else{         
          row_status = getUIServerStatusBomb(arr_count);
          col_status = {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": row_status
                        }
          serverstatus.push(col_status); 
          count = 0;
          col_status = [];
          ui_status = [];
          row_status = [];
          arr_count = [];
          arr_count.push([name,num,max]);          
        }
        count = count+1;            
    }     

      if (arr_count.length > 0) {
          row_status = getUIServerStatusBomb(arr_count);
          col_status = {
                      "type": "box",
                      "layout": "horizontal",
                      "contents": row_status
                        }
          serverstatus.push(col_status); 
      }    
     
    // Logger.log(serverstatus);
   
    
    result = 
    //-----------------------------------------------------------//
{
	"type": "bubble",
	"size": "giga",
	"body": {
		"type": "box",
		"layout": "vertical",
		"contents": [{
				"type": "image",
				"url": "https://bombcrypto.io/wp-content/uploads/2021/08/12.png",
				"size": "lg",
				"aspectMode": "fit",
				"aspectRatio": "10:5"
			},
			{
				"type": "box",
				"layout": "horizontal",
				"contents": [{
						"type": "text",
						"text": "hello, world",
						"weight": "bold",
						"color": "#FFFFFF",
						"contents": [{
								"type": "span",
								"text": "Server Status : "
							},
							{
								"type": "span",
								"text": ""+json.message.status,
								"color": "#76ff03"
							}
						],
						"size": "sm"
					},
					{
						"type": "text",
						"text": "hello, world",
						"offsetEnd": "0px",
						"position": "absolute",
						"color": "#FFFFFF",
						"contents": [{
							"type": "span",
							"text": ""+json.message.ccu+ " / "+json.message.maxCcu,
							"size": "sm"
						}],
						"margin": "sm"
					}
				],
				"margin": "lg"
			},
			{
				"type": "separator",
				"margin": "lg"
			},
			{
				"type": "box",
				"layout": "vertical",
				"contents": serverstatus,
				"margin": "xxl"
			}
		],
		"background": {
			"type": "linearGradient",
			"angle": "50deg",
			"startColor": "#560027",
			"endColor": "#560027",
			"centerColor": "#bc477b"
		}
	}
}
    //-----------------------------------------------------------//
   
 return result;
  
}
