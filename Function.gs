function getCryptoDetail(id){
    // coinCode = 'bitcoin';
    var requestUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=thb&ids="+id+"&order=market_cap_desc&per_page=100&page=1&sparkline=false&&price_change_percentage=1h%2C7d%2C14d%2C30d";
    let content = getContent_(requestUrl);
    var json = JSON.parse(content); 
    return json;                    
}

function getCryptoAlcorWax(coinCode){
    coinCode = 258
    let result = [];
    let dataWAX = getCryptoDetail("wax");
    let wax_mthb = dataWAX[Object.keys(dataWAX)].current_price;

    let requestUrl = "https://wax.alcor.exchange/api/markets/"+coinCode;  
    let data = getContent_(requestUrl);
        json = JSON.parse(data);  
    const price = json.last_price.toLocaleString("th-TH", {maximumSignificantDigits:"4"}) * wax_mthb;
    const change24h = json.change24.toLocaleString("th-TH", {maximumSignificantDigits:"2"});
    const change7d = json.changeWeek.toLocaleString("th-TH", {maximumSignificantDigits:"2"});    
    const vol24h = json.volume24.toLocaleString("th-TH", {maximumSignificantDigits:"8"});
    const vol7d = json.volumeWeek.toLocaleString("th-TH", {maximumSignificantDigits:"8"});
    const vol30d = json.volumeMonth.toLocaleString("th-TH", {maximumSignificantDigits:"8"});
    const symbol = json.quote_token.symbol.name;
    const name = json.quote_token.contract;     
    result.push(wax_mthb,price,change24h,change7d,vol24h,vol7d,vol30d,symbol,name);  
    // Logger.log(symbol);
    return result;
}

function getTX_BEF20_BOMB(wallet){  
  contracts = '0x00e1656e45f18ec6747f5a8496fd39b50b38396d';
  try
  { 
    let requestUrl = "https://api.bscscan.com/api?module=account&action=tokentx&contractaddress="+contracts+"&address="+wallet+"&page=0&offset=99&startblock=0&endblock=999999999&sort=asc&       apikey=SJMGGXYNYE2R68IURCJZQ1FFKYJRICEGJF";
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
    return json;                    
  }
  catch(err)
  {
    return JSON.parse('{"errorcode":"Unknown code","messages":"'+ err +'"}');
  } 
}

function getRescueHero(wallet){
    api_key = 'SJMGGXYNYE2R68IURCJZQ1FFKYJRICEGJF';
    const requestUrl1 = 'https://api.bscscan.com/api?module=account&action=txlist&address='+wallet+'&startblock=0&endblock=99999999&page=0&offset=99&sort=asc&apikey='+api_key+'';
    const requestUrl2 = 'https://api.bscscan.com/api?module=account&action=tokennfttx&contractaddress=0x30cc0553f6fa1faf6d7847891b9b36eb559dc618&address='+wallet+'&page=1&offset=100&startblock=0&endblock=999999999&sort=asc&apikey='+api_key+''
    let data1 = getContent_(requestUrl1);
        data1 = JSON.parse(data1);
    let data2 = getContent_(requestUrl2);
        data2 = JSON.parse(data2);
    let claimData = data1.result;
    var result = [];
    for (let i = 0; i < claimData.length; i++){ 
      if ((claimData[i].input == '0x4e71d92d') && (i != claimData.length-1)) { 
          tokenData = data2.result.filter(function(item){return (item.blockNumber == claimData[i+1].blockNumber);});   
        if (tokenData.length > 0){  
          date = new Date(tokenData[0].timeStamp * 1000);
          token = tokenData[0].tokenID;   
          result.push([date,token]);
        }
      }  
       
    }
  return result;
}

function getContent_(url) {
  try
  { 
    var requestUrl = url;
    var options = {muteHttpExceptions: true}; 
    let success = false;
    do {
      var res = UrlFetchApp.fetch(requestUrl,options);
      if (res != 'error code: 1015') {
        var resCode = res.getResponseCode();
        if (resCode == 200){
          var content = res.getContentText();
            success = true;   
        }         
      }                 
    }
    while (success != true);
    return content;                    
  }
  catch(err)
  {
    return JSON.parse('{"errorcode":"Unknown code","messages":"'+ err +'"}');
  }  
}

function getAllCryptoPrices(coinsList){
  //---------- Make url request coins --------------//
  try
  {
      var coinstUrl ="";  
      for (var i = 0; i < coinsList.length; i++) {
        coinstUrl += coinsList[i];

      if(i!=(coinsList.length-1)){
        coinstUrl = coinstUrl +"%2C"
      } 
    }
    //-------------------------------------------------//
    //------------- Get coins json data  --------------//
      var requestUrl = "https://api.coingecko.com/api/v3/simple/price?ids="+coinstUrl+"&vs_currencies=thb&include_24hr_change=true";
    let content = getContent_(requestUrl);
        json = JSON.parse(content);

      return json;               
  }
  catch(err)
  {
    return JSON.parse('{"errorcode":"Unknown code","messages":"'+ err +'"}');
    // return JSON.parse('{"errorcode":"'+ resCode +'","messages":"Too Many Requests"}');    
  }      
}

function getCryptoHistory(id,date){  
  try
  { 
    // id = 'bomber-coin';l
    strdate = date.replaceAll("/","-");
    var requestUrl = "https://api.coingecko.com/api/v3/coins/"+id+"/history?date="+strdate+"&localization=false";
    let content = getContent_(requestUrl);
        json = JSON.parse(content);          
    let data = Object.keys(json).sort();    
    return json[data[4]].current_price.thb;                    
  }
  catch(err)
  { Logger.log('err : '+ err);
    return JSON.parse('{"errorcode":"Unknown code","messages":"'+ err +'"}'); 
  }     
}

function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime()
    var date2_ms = date2.getTime()

    // Calculate the difference in milliseconds
    var difference_ms = Math.abs(date1_ms - date2_ms)

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY)

}

function getPriceFromJson(jsonData) {
  var tempArr = [];
  var data = Object.keys(jsonData).sort().map((keyName, i)=>{

   const thb = jsonData[keyName].thb
   const thb_24h_change = jsonData[keyName].thb_24h_change
   tempArr.push([keyName,thb,thb_24h_change]);   
 })
  return tempArr;

}

function numberWithCommas(x) {
  if (x >= 1){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }else{
    return x;
  }
}

function formatDateTimeToString_Long(date){    
    d = date.toLocaleDateString('th-TH', { timeZone : "Asia/Bangkok",option:"short",
                                      year: 'numeric',
                                      month: 'long',
                                      day: 'numeric',
                                      });
    t = date.toLocaleTimeString('th-TH', { timeZone : "Asia/Bangkok",option:"short"}) ;
    result = d + " | " + t;  
  return result; 
}

function formatTimeToString_TH(timeStamp){    
    result = timeStamp.toLocaleTimeString('th-TH', { timeZone : "Asia/Bangkok",option:"short"}) 
  return result; 
}

function formatDateToString_AU(timeStamp){
    result = timeStamp.toLocaleDateString('en-AU', { timeZone : "Asia/Bangkok",option:"short",
                                      year: 'numeric',
                                      month: '2-digit',
                                      day: '2-digit',
                                      }); 
  return result; 
}

function formatPrice(price,digit){
    return price.toLocaleString("th-TH",{style:"currency", currency:"THB", maximumSignificantDigits:digit})
  // return price.toLocaleString("th-TH", {style:"currency", currency:"THB",maximumSignificantDigits:"20"})
}

function convert18To2Decimal(x){
    let strNum = ""+x; 
    let degit = x.substring(strNum.length - 18);
    let num = x.substr(0,strNum.length - 18); 
    let uPAY = num+"."+degit;
    return parseFloat(uPAY).toFixed(2);  
} 

function valueColorBGStartEnd(x){
  var codecolor = "#FF000010";
  if (x >= 0){
    codecolor = "#29BC0010"
  } 
  return codecolor;
}

function valueColorChange(x) {
  var codecolor = "#FF0000FF";
  if (x >= 0){
    codecolor = "#29BC00FF"
  } 
  return codecolor;
} 

function valueImgChange(x) {
  var img = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Red_Arrow_Down.svg/1024px-Red_Arrow_Down.svg.png";
  if (x >= 0){
    img = "https://icon-library.com/images/arrow-up-icon/arrow-up-icon-29.jpg";
  } 
  return img;
}

function resException(message){ 
    result =
      {
        "type": "bubble",
        "size": "kilo",
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "icon",
                  "url": "https://www.img.in.th/images/7ba0aedccfe51106c08ac3086ceddb9d.png",
                  "size": "5xl"
                },
                {
                  "type": "text",
                  "text": "Server มีปัญหาถามใหม่อีกครั้ง",
                  "weight": "bold",
                  "size": "md",
                  "align": "start",
                  "gravity": "center",
                  "contents": [],
                  "color": "#FFFFFF",
                  "wrap": true,
                  "offsetBottom": "35px"
                }
              ]
            },
            {
              "type": "text",
              "text": ""+message.errorcode + " : " + message.messages,
              "weight": "bold",
              "size": "md",
              "contents": [],
              "wrap": true,
              "color": "#FFFFFF",
              "offsetBottom": "30px"
            }
          ],
          "background": {
            "type": "linearGradient",
            "angle": "0deg",
            "startColor": "#000000",
            "endColor": "#000000",
            "centerColor": "#FF0000"
          }
        }
      }
    return result;
}

function getHistoryBombData(json,wallet){
  wDev1 = '0x291b1757d107c1851411aa297ba6046e02d4e2c3';
  wDev2 = '0x966d1cca4cf740ed9056bab436f1e40ecd759aef';
  wDev3 = '0x52b76d0937132144ec27a591ed0876b77926778d';
  wDev4 = '0x124d77791d42d17185ffac079a653e9e82a6f0b9';
  wDev5 = '0xb6571bd589422440141f760f45764b1618af246e';
  wDev6 = '0x52d2124ab6e2aa2886751c8424bc61a51f1e2ed4';
  wDev7 = '0xfa6bce1c7bbe759567f3b0211f3f695d340a888c';
  wDev8 = '0xcce65eaa7d012d56cc29c3c1dd59db8149734637'; 
  wDev9 = '0xb1284db011c41bc5296c49f99c41f13ba1f36a48';
  wDev10 = '0x09f0f48d12cdc1436ea83df269b42d726fe4c001';
  var jsondata = json.result.filter(function(item){
        return (item.from == wDev1 || item.from == wDev2 || item.from == wDev3 || item.from == wDev4 || item.from == wDev5 
                  || item.from == wDev6 || item.from == wDev7 || item.from == wDev8 || item.from == wDev9 || item.from == wDev10 && wallet);         
    });     
    return jsondata;
}

function getInvestmentBombData(json){

    wPAYHERO = '0x30cc0553f6fa1faf6d7847891b9b36eb559dc618';
    wPAYHOUSE = '0xea3516fEB8F3e387eeC3004330Fd30Aff615496A';
    var jsondata = json.result.filter(function(item){
        return (item.to == wPAYHOUSE || item.to == wPAYHERO);         
    });  

    var data = [];
    var obj = {};
    var nDATE = formatDateToString_AU(new Date());
    var firstdate = new Date(jsondata[0].timeStamp * 1000);

    for (let i = 0; i < jsondata.length; i++){    
      let jINVESTDATE = new Date(jsondata[i].timeStamp * 1000);
          jINVESTDATE = formatDateToString_AU(jINVESTDATE);
      let jVALUE = convert18To2Decimal(jsondata[i].value);
        if (jINVESTDATE == nDATE) {
          obj[jINVESTDATE] = parseFloat(obj[jINVESTDATE]) + parseFloat(jVALUE);    
        }else        {
          obj[jINVESTDATE] = jVALUE;  
        }
        nDATE = jINVESTDATE;    
    }
    data.push(obj,firstdate);
    return data;

}

function checkNullNumber(number)
{
    if (number == null){
      number = 0;
    }else{
      number = number.toFixed(2); 
    }  
  return number;
}
