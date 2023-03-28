function getCryptoReport() {
    var coinsList = ["bitcoin","ethereum","binancecoin","tether","binance-usd","axie-infinity","smooth-love-potion","the-parallel","gala","marblex","klay-token","wax","ronin","staked-ether"];
    var cryptoPrices = getAllCryptoPrices(coinsList); 
    
    if(typeof(cryptoPrices) === "undefined"){      
      return resException(JSON.parse('{"errorcode":"Unknown","messages":"Type Undefined"}'));
    } else if (cryptoPrices.errorcode != null) {
        return resException(cryptoPrices); 
    }  
    
    var aDATA = getPriceFromJson(cryptoPrices);
    Logger.log(aDATA);
    var uDATA = [];       

        //--------- Bitcoin ---------//  
          let ui_coin = getUIDataCryptoReport("https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579","BTC",formatPrice(aDATA[3][1],"20"),aDATA[3][2].toFixed(2)); 
            uDATA.push(ui_coin);

        //--------- Ethereum ---------// 
          ui_coin = getUIDataCryptoReport("https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png","ETH",formatPrice(aDATA[4][1],"20"),aDATA[4][2].toFixed(2)); 
            uDATA.push(ui_coin); 

        //--------- Lido ---------// 
          ui_coin = getUIDataCryptoReport("https://assets.coingecko.com/coins/images/13442/large/steth_logo.png?1608607546","Lido ETH",formatPrice(aDATA[10][1],"20"),aDATA[10][2].toFixed(2)); 
            uDATA.push(ui_coin); 

        //--------- BNB ---------// 
          ui_coin = getUIDataCryptoReport("https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png","BNB",formatPrice(aDATA[2][1],"20"),aDATA[2][2].toFixed(2)); 
            uDATA.push(ui_coin);  

        //--------- USDT ---------// 
          ui_coin = getUIDataCryptoReport("https://s2.coinmarketcap.com/static/img/coins/64x64/825.png","USDT",formatPrice(aDATA[11][1],"20"),aDATA[11][2].toFixed(2)); 
            uDATA.push(ui_coin);  

        //--------- BUSD ---------// 
          ui_coin = getUIDataCryptoReport("https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png","BUSD",formatPrice(aDATA[1][1],"20"),aDATA[1][2].toFixed(2)); 
            uDATA.push(ui_coin);  

        //--------- RON ---------// 
          ui_coin = getUIDataCryptoReport("https://assets.coingecko.com/coins/images/20009/large/logo_round_light.jpeg?1643291015","RON",formatPrice(aDATA[8][1],"20"),aDATA[8][2].toFixed(2)); 
            uDATA.push(ui_coin);                  

        //--------- AXS ---------// 
          ui_coin = getUIDataCryptoReport("https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png","AXS",formatPrice(aDATA[0][1],"20"),aDATA[0][2].toFixed(2)); 
            uDATA.push(ui_coin);       
 
        //--------- SLP ---------// 
          ui_coin = getUIDataCryptoReport("https://s2.coinmarketcap.com/static/img/coins/64x64/5824.png","SLP",formatPrice(aDATA[9][1],"20"),aDATA[9][2].toFixed(2)); 
            uDATA.push(ui_coin);     

         //--------- PRL ---------// 
          ui_coin = getUIDataCryptoReport("https://assets.coingecko.com/coins/images/22064/large/prl.png?1640744907","PRL",formatPrice(aDATA[12][1],"20"),aDATA[12][2].toFixed(2)); 
            uDATA.push(ui_coin);     

        //--------- GALA ---------// 
          ui_coin = getUIDataCryptoReport("https://cdn.bitkubnow.com/coins/icon/GALA.png","GALA",formatPrice(aDATA[5][1],"20"),aDATA[5][2].toFixed(2)); 
            uDATA.push(ui_coin);                    

        //--------- Marblex ---------// 
          ui_coin = getUIDataCryptoReport("https://assets.coingecko.com/coins/images/24423/small/AgYzKzLt_400x400.jpg?1647654911","MBX",formatPrice(aDATA[7][1],"20"),aDATA[7][2].toFixed(2)); 
            uDATA.push(ui_coin); 

        //--------- KLAY ---------// 
          ui_coin = getUIDataCryptoReport("https://assets.coingecko.com/coins/images/9672/large/klaytn.jpeg?1642775250","KLAY",formatPrice(aDATA[6][1],"20"),aDATA[6][2].toFixed(2)); 
            uDATA.push(ui_coin); 

        //--------- WAX ---------// 
          ui_coin = getUIDataCryptoReport("https://assets.coingecko.com/coins/images/1372/large/WAX_Coin_Tickers_P_512px.png?1602812260","WAX",formatPrice(aDATA[13][1],"20"),aDATA[13][2].toFixed(2)); 
            uDATA.push(ui_coin); 

    result =    
          {
              "type": "bubble",
              "size": "giga",
              "body": {
                  "type": "box",
                  "layout": "vertical",
                  "spacing": "md",
                  "contents": [{
                          "type": "box",
                          "layout": "baseline",
                          "contents": [{
                                  "type": "icon",
                                  "url": "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1465274195/tg6zsifdweekud3yh4yq.png",
                                  "size": "xl"
                              }, {
                                  "type": "text",
                                  "text": "ราคาเหรียญ by CoinGecko",
                                  "weight": "bold",
                                  "size": "xl",
                                  "contents": [],
                                  "color": "#FFFFFF",
                                  "margin": "md",
                                  "offsetBottom": "3px"
                              }
                          ]
                      }, {
                          "type": "box",
                          "layout": "vertical",
                          "contents": [{
                                  "type": "box",
                                  "layout": "vertical",
                                  "spacing": "sm",
                                  "contents": [
                                    {
                                      "type": "text",
                                      "text": ""+formatDateTimeToString_Long(new Date()),
                                      "color": "#FFFFFF",
                                      "weight": "bold",
                                      "align": "center"
                                    },
                                    {
                                          "type": "box",
                                          "layout": "baseline",
                                          "contents": [{
                                                  "type": "text",
                                                  "text": "Coin",
                                                  "weight": "bold",
                                                  "size": "lg",
                                                  "align": "start",
                                                  "contents": [],
                                                  "color": "#FFFFFF"
                                              }, {
                                                  "type": "text",
                                                  "weight": "bold",
                                                  "size": "lg",
                                                  "align": "end",
                                                  "position": "relative",
                                                  "contents": [{
                                                          "type": "span",
                                                          "text": "Price "
                                                      }, {
                                                          "type": "span",
                                                          "text": "(24h)"
                                                      }
                                                  ],
                                                  "color": "#FFFFFF"
                                              }
                                          ]
                                        },{
                                        "type": "separator",
                                        "margin": "xs",
                                        "color": "#FFFFFFFF"
                                      },
                                      {
                                        "type": "separator",
                                        "margin": "lg",
                                        "color": "#FFFFFF00"
                                      }
                                  ]
                              }, {
                                  "type": "box",
                                  "layout": "vertical",
                                  "contents": uDATA
                              }
                          ]
                      }
                  ],
                  "backgroundColor": "#000000"
              }
          }

    return result;
}
