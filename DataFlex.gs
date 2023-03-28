function getUIROIBOMBTable(data,fontcolor) {
      result = {
              "type": "text",
              "text": ""+data,
              "contents": [],
              "align": "center",
              "margin": "md",
              "color": ""+fontcolor
              };
  return result;
}

function getUIServerStatusBomb(array){
  var status = []; 
  for (let i = 0; i < 3; i++){
    if (typeof array[i] === "undefined") {
      var ui = {
                  "type": "box",
                  "layout": "vertical",
                  "contents": []
                }      
    }
    else{
        if (array[i][2] == 0){  
          var percentS = 0;
        }else{
          var percentS = (array[i][1] * 100) / array[i][2];
        }
          var ui =
                  {
                    "type": "box",
                    "layout": "vertical",
                    "contents": [{
                        "type": "text",
                        "text": "Server "+array[i][0],
                        "color": "#FFFFFF",
                        "size": "xs"
                      },
                      {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [{
                          "type": "box",
                          "layout": "vertical",
                          "contents": [{
                            "type": "text",
                            "text": "."
                          }],
                          "backgroundColor": "#B4B4B4FF",
                          "offsetStart": ""+percentS+"%"
                        }],
                        "background": {
                          "type": "linearGradient",
                          "angle": "50deg",
                          "startColor": "#00FF0FFF",
                          "endColor": "#FF0000FF",
                          "centerColor": "#E8FF00FF"
                        },
                        "height": "10px"
                      },
                      {
                        "type": "text",
                        "text": ""+array[i][1] + " / "+array[i][2],
                        "color": "#FFFFFF",
                        "align": "end",
                        "margin": "sm",
                        "size": "xs"
                      }
                    ]
                  }
          }
        if (i != 2) {
          status.push(ui,{"type": "separator","margin": "md","color": "#FFFFFF00"});
        }else{
          status.push(ui); 
        }    
  }
    return status;
}

function getUIDataCryptoReport(icon,name,price,percent24h) {

      result = 
      {
          "type": "box",
          "layout": "vertical",
          "contents": [{
                  "type": "box",
                  "layout": "baseline",
                  "contents": [{
                          "type": "icon",
                          "url": ""+icon,
                          "size": "xl",
                          "offsetTop": "4px"
                      }, {
                          "type": "text",
                          "text": ""+name,
                          "weight": "bold",
                          "size": "md",
                          "contents": [],
                          "color": "#FFFFFF",
                          "position": "absolute",
                          "offsetTop": "6px",
                          "offsetStart": "30px"
                      }, {
                          "type": "text",
                          "text": ""+price,
                          "color": "#FFFFFF",
                          "weight": "bold",
                          "position": "absolute",
                          "offsetTop": "6px",
                          "offsetEnd": "100px"
                      }, {
                          "type": "text",
                          "weight": "bold",
                          "size": "md",
                          "text": ""+percent24h+"%",
                          "color": ""+valueColorChange(percent24h),
                          "align": "end",
                          "position": "relative",
                          "contents": [],
                          "offsetEnd": "2px"
                      }, {
                          "type": "icon",
                          "url": ""+valueImgChange(percent24h),
                          "size": "sm"
                      }
                  ]
              }
          ]
      }

  return result;
}
