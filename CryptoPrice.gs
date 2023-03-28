function getCryptoPrice(data) {
      let id = data[0].id; //id
      let name = data[0].name;
      let dataAPI = getCryptoDetail(id);   
      let dataCache = dataAPI;       
     
      if(typeof(dataCache) === "undefined"){      
        return resException(JSON.parse('{"errorcode":"Unknown","messages":"'+ dataCache +'"}'));
      } else if (dataCache.errorcode != null) {
          return resException(dataCache); 
      }  
      
      let img =  dataCache[Object.keys(dataCache)].image; //url icon 
      let mthb = dataCache[Object.keys(dataCache)].current_price;
      let c24h = dataCache[Object.keys(dataCache)].price_change_percentage_24h;
      let h24h = dataCache[Object.keys(dataCache)].high_24h;
      let l24h = dataCache[Object.keys(dataCache)].low_24h;
      let rank = dataCache[Object.keys(dataCache)].market_cap_rank;  
      let p1h = dataCache[Object.keys(dataCache)].price_change_percentage_1h_in_currency;  
      let p7d = dataCache[Object.keys(dataCache)].price_change_percentage_7d_in_currency;  
      let p14d = dataCache[Object.keys(dataCache)].price_change_percentage_14d_in_currency;  
      let p30d = dataCache[Object.keys(dataCache)].price_change_percentage_30d_in_currency;  

      c24h = checkNullNumber(c24h);
      p1h = checkNullNumber(p1h);
      p7d = checkNullNumber(p7d);

      if (p14d == null){
        p14d = 'No data';
      }else{
        p14d = p14d.toFixed(2);
      }  
      if (p30d == null){
        p30d = 'No data';
      }else{
        p30d = p30d.toFixed(2);
      }      
      // Logger.log(p30d)
      let bt24h = ((mthb-l24h)*100)/(h24h-l24h);
      // mthb = numberWithCommas(mthb); 

      mthb = mthb.toLocaleString("th-TH", {style:"currency", currency:"THB",maximumSignificantDigits:"20"});     
      c24h = numberWithCommas(c24h);         
      h24h = h24h.toLocaleString("th-TH", {style:"currency", currency:"THB",maximumSignificantDigits:"20"});        
      l24h = l24h.toLocaleString("th-TH", {style:"currency", currency:"THB",maximumSignificantDigits:"20"});     
      if (bt24h < 0){ bt24h = 0 };
      if (bt24h > 100){bt24h = 100};

      bt24h = bt24h.toFixed(2)+"%";

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
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "text": "Rank"+rank,
                  "size": "xxs"
                }
              ],
              "backgroundColor": "#FFFFFF",
              "cornerRadius": "5px",
              "width": "70px",
              "alignItems": "center"
            },
            {
              "type": "image",
              "url": ""+img,
              "size": "xs"
            },
            {
              "type": "text",
              "text": ""+name,
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
                  "text": ""+c24h + "%",
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
                  "text": "24 Hour",
                  "size": "xs",
                  "weight": "bold",
                  "color": "#FFFFFF"
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
                          "type": "text",
                          "text": "."
                        }
                      ],
                      "height": "10px",
                      "backgroundColor": "#B4B4B4FF",
                      "offsetStart": ""+bt24h
                    }
                  ],
                  "background": {
                    "type": "linearGradient",
                    "angle": "50deg",
                    "startColor": "#FF0000FF",
                    "endColor": "#00FF0FFF",
                    "centerColor": "#E8FF00FF"
                  }
                },
                {
                  "type": "box",
                  "layout": "horizontal",
                  "contents": [
                    {
                      "type": "text",
                      "text": ""+l24h,
                      "color": "#FFFFFF",
                      "offsetTop": "3px",
                      "size": "xs"
                    },
                    {
                      "type": "text",
                      "text": ""+h24h,
                      "align": "end",
                      "size": "xs",
                      "offsetTop": "3px",
                      "color": "#FFFFFF"
                    }
                  ]
                }
              ]
            },{
        "type": "box",
        "layout": "vertical",
        "contents": [
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
                    "text": "1 Hour",
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "offsetStart": "10px"
                  },
                  {
                    "type": "text",
                    "text": ""+p1h+"%",
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
                  "startColor": ""+valueColorBGStartEnd(p1h),
                  "endColor": ""+valueColorBGStartEnd(p1h),
                  "centerColor": ""+valueColorChange(p1h)
                }
              },
              {
                "type": "separator",
                "margin": "md",
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
                    "offsetStart": "10px"
                  },
                  {
                    "type": "text",
                    "text": ""+p7d+"%",
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
                  "startColor": ""+valueColorBGStartEnd(p7d),
                  "endColor": ""+valueColorBGStartEnd(p7d),
                  "centerColor": ""+valueColorChange(p7d)
                }
              }
            ]
          },
          {
            "type": "separator",
            "margin": "md",
            "color": "#FFFFFF00"
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
                    "text": "14 Day",
                    "color": "#FFFFFF",
                    "size": "xs",
                    "weight": "bold",
                    "contents": [],
                    "offsetStart": "10px"
                  },
                  {
                    "type": "text",
                    "text": ""+p14d+'%',
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
                  "startColor": ""+valueColorBGStartEnd(p14d),
                  "endColor": ""+valueColorBGStartEnd(p14d),
                  "centerColor": ""+valueColorChange(p14d)
                }
              },
              {
                "type": "separator",
                "margin": "md",
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
                    "offsetStart": "10px"
                  },
                  {
                    "type": "text",
                    "text": ""+p30d+'%',
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
                  "startColor": ""+valueColorBGStartEnd(p30d),
                  "endColor": ""+valueColorBGStartEnd(p30d),
                  "centerColor": ""+valueColorChange(p30d)
                }
              }
            ]
          }
        ],
        "margin": "lg"
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
          "background": {
            "type": "linearGradient",
            "angle": "50deg",
            "endColor": "#000000",
            "centerColor": "#5F006CFF",
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
