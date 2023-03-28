function getCryptoPriceAlcor(message) {
    // message = "OCOIN";
    let dataID = getDataWaxChain(message);
    let dataWAX = getCryptoAlcorWax(dataID[0].id);

      let img =  dataID[0].image; //url icon 
      let mthb = formatPrice(dataWAX[1],"4");     
      let c24h = dataWAX[2];
      let c7d = dataWAX[3];
      let v24h = dataWAX[4] + " Wax";
      let v7d = dataWAX[5] + " Wax";
      let v30d = dataWAX[6] + " Wax";
      let symbol = dataWAX[7];
      let name = dataWAX[8];
      let p24h = 0;
      let n24h = 0;
      // let bt7d = 0;
      if (c24h < 0){ p24h = 0; n24h = Math.abs(c24h)}
      else if (c24h > 100){ p24h = 100; n24h = 0}
      else{ p24h = c24h; n24h = 0 }
 
      // if (c7d < 0){ c7d = 0 }
      // else if (c7d > 100){c7d = 100};
      // Logger.log(c24h +":" +p24h +":"+ n24h)
      
      // c7d = c7d+"%";
      
    let date = new Date();
        date = formatDateTimeToString_Long(date);      

    result = 
      {
    //----------------------------------------------------------------

  "type": "bubble",
  "body": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "image",
        "url": ""+img,
        "size": "xs"
      },
      {
        "type": "text",
        "text": ""+name+ " ("+symbol+")",
        "weight": "bold",
        "size": "lg",
        "align": "center",
        "color": "#FFFFFF",
        "contents": [],
        "offsetTop": "5px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": ""+mthb,
            "align": "center",
            "weight": "bold",
            "size": "xl",
            "color": "#FFFFFF",
            "offsetTop": "5px"
          },
          {
            "type": "text",
            "text": ""+c24h+"%",
            "align": "center",
            "color": ""+valueColorChange(c24h),
            "weight": "bold",
            "offsetTop": "3px"
          }
        ],
        "offsetTop": "5px"
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "text": "24 Hour Change",
            "size": "xs",
            "weight": "bold",
            "color": "#FFFFFF"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "."
                  }
                ],
                "height": "10px",
                "backgroundColor": "#B4B4B4FF",
                "width": "50%",
                "offsetEnd": ""+n24h+"%"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "."
                  }
                ],
                "height": "10px",
                "backgroundColor": "#B4B4B4FF",
                "width": "50%",
                "offsetStart": ""+p24h+"%"
              }
            ],
            "background": {
              "type": "linearGradient",
              "angle": "50deg",
              "startColor": "#FF0000FF",
              "endColor": "#00FF0FFF",
              "centerColor": "#E8FF00FF"
            },
            "cornerRadius": "xxl"
          },
          {
            "type": "box",
            "layout": "horizontal",
            "contents": [
              {
                "type": "text",
                "text": "Negative",
                "color": "#FFFFFF",
                "size": "xs"
              },
              {
                "type": "text",
                "text": "Positive",
                "color": "#FFFFFF",
                "size": "xs",
                "align": "end"
              }
            ]
          }          
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "Volume",
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "offsetStart": "10px",
                    "align": "center"
                  }
                ],
                "background": {
                  "type": "linearGradient",
                  "angle": "90deg",
                  "startColor": "#546E7A00",
                  "endColor": "#546E7A00",
                  "centerPosition": "60%",
                  "centerColor": "#546E7A"
                },
                "cornerRadius": "100px"
              },
              {
                "type": "separator",
                "margin": "sm",
                "color": "#FFFFFF00"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "24 Hour",
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "offsetStart": "10px",
                    "position": "absolute"
                  },
                  {
                    "type": "text",
                    "text": ""+v24h,
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "align": "end",
                    "offsetEnd": "10px"
                  }
                ],
                "background": {
                  "type": "linearGradient",
                  "angle": "90deg",
                  "startColor": "#546E7A30",
                  "endColor": "#546E7A30",
                  "centerColor": "#546E7A"
                },
                "cornerRadius": "100px"
              },
              {
                "type": "separator",
                "margin": "sm",
                "color": "#FFFFFF00"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "7 Day",
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "offsetStart": "10px",
                    "position": "absolute"
                  },
                  {
                    "type": "text",
                    "text": ""+v7d,
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "align": "end",
                    "offsetEnd": "10px"
                  }
                ],
                "background": {
                  "type": "linearGradient",
                  "angle": "90deg",
                  "startColor": "#546E7A30",
                  "endColor": "#546E7A30",
                  "centerColor": "#546E7A"
                },
                "cornerRadius": "100px"
              },
              {
                "type": "separator",
                "margin": "sm",
                "color": "#FFFFFF00"
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": "30 Day",
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "offsetStart": "10px",
                    "position": "absolute"
                  },
                  {
                    "type": "text",
                    "text": ""+v30d,
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "align": "end",
                    "offsetEnd": "10px"
                  }
                ],
                "background": {
                  "type": "linearGradient",
                  "angle": "90deg",
                  "startColor": "#546E7A30",
                  "endColor": "#546E7A30",
                  "centerColor": "#546E7A"
                },
                "cornerRadius": "100px"
              }
            ]
          },
                  {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "size": "xs",
            "type": "text",
            "text": ""+date,
            "align": "end",
            "weight": "bold",
            "color": "#FFFFFF"
          }
        ],
         "margin": "lg"
          }
        ],
        "margin": "lg"
      }
    ],
    "background": {
      "type": "linearGradient",
      "angle": "50deg",
      "endColor": "#000000",
      "centerColor": "#3E2723",
      "startColor": "#000000"
    }
  },
  "styles": {
    "body": {
      "backgroundColor": "#000000FF"
    }
  }

    //----------------------------------------------------------------
      }
    return result; 
}
