function calculateMoney(x){
  // x = "#bcoin*600"; x = x.toUpperCase();
  let pos = x.indexOf("*", 1);
  let coinSymbol = x.substring(1,pos);
  let num = x.substr(pos+1,20);
  let dataCoingeko = getDataCoingeko(coinSymbol);  

  if (dataCoingeko.length > 0){
    let id = dataCoingeko[0].id; 
    var dataprice = getCryptoDetail(id); //id 
    var img =  dataprice[Object.keys(dataprice)].image; //url icon 
    var price = dataprice[Object.keys(dataprice)].current_price;
    var baht = formatPrice(price,"20");
  }
  else{
    let dataWAX = getDataWaxChain(coinSymbol);
    let id = dataWAX[0].id; 
    var img =  dataWAX[0].image; //url icon 
    var dataprice = getCryptoAlcorWax(id); //id 
    var price = dataprice[1];    
    var baht = formatPrice(price,"4"); 
  }      

    let num_result = price * num;
        num_result = numberWithCommas(num_result.toFixed(2));
        
        // Logger.log(num_result) 
    let date = new Date();
        date = date.toLocaleDateString('th-TH', { timeZone : "Asia/Bangkok",
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });   
    let time = new Date(); 
      time = time.toLocaleTimeString('th-TH',{ timeZone: "Asia/Bangkok" });                  

        result = 
        {
//-----------------------------------------------------------
          "type": "bubble",
          "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "icon",
                    "url": "https://www.img.in.th/images/7ba0aedccfe51106c08ac3086ceddb9d.png",
                    "size": "4xl"
                  },
                  {
                    "type": "text",
                    "text": ""+num+ " "+ coinSymbol + " = ฿"+ num_result,
                    "offsetStart": "55px",
                    "weight": "bold",
                    "position": "absolute",
                    "offsetTop": "29%",
                    "weight": "bold",
                    "color": "#00FF00"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "icon",
                    "url": ""+img,
                    "size": "4xl"
                  },
                  {
                    "type": "text",
                    "text": ""+baht,
                    "offsetStart": "55px",
                    "weight": "bold",
                    "position": "absolute",
                    "offsetTop": "29%",
                    "weight": "bold",
                    "color": "#FFFFFF"
                  }
                ]
              },
              {
                "type": "box",
                "layout": "vertical",
                "contents": [
                  {
                    "type": "text",
                    "text": ""+date + " | "+ time,
                    "align": "end",
                    "weight": "bold",
                    "color": "#FFFFFF"
                  }
                ]
              }
            ],
            "background": {
              "type": "linearGradient",
              "angle": "40deg",
              "startColor": "#560027",
              "endColor": "#560027",
              "centerColor": "#560027AF"
            }
          }
//-----------------------------------------------------------
          
        }
  return result;
}
