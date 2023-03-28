// function getCryptoBombROI(wallet) {
//   wallet = '!0x1d5Dd95ACf583740D412BF1CC0C56390796293Bf';
//   // wallet = '!0xAfD87bf65B3a85d3469B917c10924E8bA6C93DF7';
//   wallet = wallet.substr(1).toLowerCase();
// //-------------Test Data---------------------
//   // var ss = SpreadsheetApp.openById('1PrX8icXcUdzSv-skqsYbsZha9hbEAjx8fFVhxrOsvyI'); 
//   // var sheet = ss.getSheetByName("TransTemp"); 
//   //     sheet.clearContents;
// //-------------------------------------------     
//     var json = getTX_BEF20_BOMB(wallet);

//     var his_Date = [];
//     var his_Bcoin = [];
//     var his_Rate = [];
//     var avg_Day = [];
//     var avg_Money = [];
//     var avg_Bcoin = [];
//     var inv_Date = [];
//     var inv_Rate = [];
//     var inv_Bcoin = [];
//     var pTOTAL_BCOIN = 0; 
//     var pTOTAL_CLAIM = 0;
//     var pTOTAL_DAYS_COUNT = 0;
//     var pTOTAL_INCOME = 0;
//     var pTOTAL_INVEST_BCOIN = 0;
//     var pTOTAL_INVEST_MONEY = 0; 

//     var pINVESTDATE = formatDateToString_AU(new Date());
//     var pINVESTRATE = 0;    
//     var pAVGDAYCOUNT = 0;
//     var pAVGMONEY = 0;
//     var pAVGBCOIN = 0;
   
//     //---------------------Header-------------------------// 
//     var investmentData = getInvestmentBombData(json);   
//     var pFIRSTINVESTDATE = Object.keys(investmentData[0])[0]; // Get first day Investment
//     var pSTARTDATE = investmentData[1];
//       for (const [key, value] of Object.entries(investmentData[0])) {                         
//           pINVESTDATE = key;
//           pINVESTBCOIN = value;
//           pINVESTRATE = getCryptoHistory("bomber-coin",pINVESTDATE);                                                      
     
//           let ui_invest_date = getUIROIBOMBTable(pINVESTDATE,"#FFFFFF");
//           let ui_invest_rate = getUIROIBOMBTable("฿"+pINVESTRATE.toFixed(2),"#FFFFFF");
//           let ui_invest_bcoin = getUIROIBOMBTable(parseFloat(pINVESTBCOIN).toFixed(0),"#FFFFFF"); 
//           inv_Date.push(ui_invest_date);
//           inv_Rate.push(ui_invest_rate);
//           inv_Bcoin.push(ui_invest_bcoin);
//           pTOTAL_INVEST_BCOIN = pTOTAL_INVEST_BCOIN + parseFloat(pINVESTBCOIN); 
//           pTOTAL_INVEST_MONEY = pTOTAL_INVEST_MONEY + (parseFloat(pINVESTBCOIN)*parseFloat(pINVESTRATE));
//       }  
//     //----------------------------------------------------//  
//     var rescueHero = getRescueHero(wallet); 
//     var res_Date = [];
//     var res_Hero = [];
//     if (rescueHero.length > 0){
//       for (let i = 0; i < rescueHero.length; i++){
//         let uRESCUEDATE = formatDateToString_AU(rescueHero[i][0]);
//         let uRESCUEHERO = rescueHero[i][1];   
//         let ui_res_date = getUIROIBOMBTable(uRESCUEDATE,"#000000");
//         let ui_res_hero = getUIROIBOMBTable(uRESCUEHERO,"#000000");
//         res_Date.push(ui_res_date);
//         res_Hero.push(ui_res_hero);
//       }
//     }else{
//         res_Date.push(getUIROIBOMBTable("Never Got","#000000"));
//         res_Hero.push(getUIROIBOMBTable("EIEI","#000000"));     
//     }

//     //----------------------History/AVG-------------------//
//     var historyData = getHistoryBombData(json,wallet);
//     for (let i = 0; i < historyData.length; i++){
//       let uCLAIMDATE = new Date(historyData[i].timeStamp * 1000); 
//       let uEARN = convert18To2Decimal(historyData[i].value);
//           // sheet.getRange(i+1,1).setValue(uCLAIMDATE)
//           // sheet.getRange(i+1,2).setValue(historyData[i].from)
//           // sheet.getRange(i+1,3).setValue(historyData[i].to)
//           // sheet.getRange(i+1,4).setValue(uEARN)
//           // sheet.getRange(i+1,5).setValue(json.result[i].timeStamp) 
                                      
//           pTOTAL_BCOIN = pTOTAL_BCOIN + parseFloat(uEARN);
//           pTOTAL_CLAIM = pTOTAL_CLAIM + 1;
//           uDATE = formatDateToString_AU(uCLAIMDATE);
//           uTIME = formatTimeToString_TH(uCLAIMDATE);  
//           uRATE = getCryptoHistory("bomber-coin",uDATE);
          
//           //---------------- AVG -----------------//
//           pAVGDAYCOUNT = days_between(pSTARTDATE,uCLAIMDATE); 
//           if (pAVGDAYCOUNT == 0){ pAVGDAYCOUNT = 1}
//           pSTARTDATE = uCLAIMDATE;
//           pAVGMONEY = ((uEARN * uRATE.toFixed(2)) / pAVGDAYCOUNT).toFixed(2);
//           pAVGBCOIN = (uEARN / pAVGDAYCOUNT).toFixed(2); 
//           pTOTAL_DAYS_COUNT = pTOTAL_DAYS_COUNT + pAVGDAYCOUNT;
//           pTOTAL_INCOME = pTOTAL_INCOME + (uEARN * uRATE.toFixed(2));                 
//           //--------------------------------------//
//         let ui_his_date = getUIROIBOMBTable(uDATE,"#FFFFFF");
//         let ui_his_rate = getUIROIBOMBTable("฿"+uRATE.toFixed(2),"#FFFFFF");
//         let ui_his_bcoin = getUIROIBOMBTable(uEARN,"#FFFFFF");
//         let ui_avg_day = getUIROIBOMBTable(pAVGDAYCOUNT,"#FFFFFF");
//         let ui_avg_money = getUIROIBOMBTable("฿"+pAVGMONEY,"#FFFFFF");
//         let ui_avg_bcoin = getUIROIBOMBTable(pAVGBCOIN,"#FFFFFF");

//         his_Date.push(ui_his_date);
//         his_Rate.push(ui_his_rate);    
//         his_Bcoin.push(ui_his_bcoin);
//         avg_Day.push(ui_avg_day);
//         avg_Money.push(ui_avg_money);
//         avg_Bcoin.push(ui_avg_bcoin);   
//         // Logger.log(pTOTAL_CLAIM); 
//     }
//     //----------------------------------------------------// 
//     var pROI = ((pTOTAL_BCOIN/pTOTAL_INVEST_BCOIN)*100).toFixed(2); 
//         pTOTAL_INCOME = numberWithCommas(pTOTAL_INCOME.toFixed(2));
//         pTOTAL_BCOIN = pTOTAL_BCOIN.toFixed(2);
//         pTOTAL_INVEST_MONEY = numberWithCommas(pTOTAL_INVEST_MONEY.toFixed(2))
//     var pBGROI = ((pROI / 600)*100).toFixed(2);     
//     Logger.log(pROI + " : "+pTOTAL_DAYS_COUNT);
//     result = 
// //-------------------------------------------------------------------------------
// {
//   "type": "bubble",
//   "size": "giga",
//   "body": {
//     "type": "box",
//     "layout": "vertical",
//     "contents": [
//       {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "horizontal",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "ID : Soon",
//                     "size": "md",
//                     "align": "center",
//                     "color": "#FFFFFF",
//                     "weight": "bold"
//                   }
//                 ],
//                 "paddingTop": "20px"
//               },
//               {
//                 "type": "image",
//                 "url": "https://bombcrypto.io/wp-content/uploads/2021/08/12.png",
//                 "size": "lg",
//                 "aspectRatio": "10:5",
//                 "aspectMode": "fit"
//               }
//             ]
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "Wallet : "+wallet,
//                     "contents": [],
//                     "offsetStart": "2%",
//                     "color": "#FFFFFF",
//                     "weight": "bold"
//                   }
//                 ],
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "startColor": "#ffffff00",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#1a237e",
//                   "centerPosition": "0%"
//                 }
//               },
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "Frist Invest Date : "+ pFIRSTINVESTDATE,
//                     "contents": [],
//                     "offsetStart": "2%",
//                     "color": "#FFFFFF",
//                     "weight": "bold"
//                   }
//                 ],
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "startColor": "#ffffff00",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#1a237e",
//                   "centerPosition": "0%"
//                 },
//                 "margin": "md"
//               }
//             ],
//             "margin": "md"
//           }
//         ]
//       },
// {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "text",
//             "text": "Investment History",
//             "align": "center",
//             "color": "#FFFFFF",
//             "weight": "bold"
//           }
//         ],
//         "background": {
//           "type": "linearGradient",
//           "angle": "90deg",
//           "startColor": "#9c27b01F",
//           "endColor": "#9c27b01F",
//           "centerColor": "#1a237e"
//         },
//         "margin": "md"
//       },
//       {
//         "type": "box",
//         "layout": "horizontal",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Date",
//                 "align": "center",
//                 "color": "#FFFFFF",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#9c27b01F",
//               "endColor": "#9c27b01F",
//               "centerColor": "#1a237e"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Rate",
//                 "align": "center",
//                 "color": "#FFFFFF",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#9c27b01F",
//               "endColor": "#9c27b01F",
//               "centerColor": "#1a237e"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Bcoin",
//                 "align": "center",
//                 "color": "#FFFFFF",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#9c27b01F",
//               "endColor": "#9c27b01F",
//               "centerColor": "#1a237e"
//             }
//           }
//         ]
//       },
//       {
//         "type": "box",
//         "layout": "horizontal",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": inv_Date,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#9c27b01F",
//               "endColor": "#9c27b01F",
//               "centerColor": "#1a237e"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": inv_Rate,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "endColor": "#ffffff00",
//               "centerColor": "#1a237e",
//               "startColor": "#ffffff00"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": inv_Bcoin,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "endColor": "#ffffff00",
//               "centerColor": "#1a237e",
//               "startColor": "#ffffff00"
//             }
//           }
//         ]
//       },      
//       {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "text",
//             "text": "Claim History",
//             "align": "center",
//             "color": "#FFFFFF",
//             "weight": "bold"
//           }
//         ],
//         "background": {
//           "type": "linearGradient",
//           "angle": "90deg",
//           "startColor": "#9c27b01F",
//           "endColor": "#9c27b01F",
//           "centerColor": "#9c27b0"
//         },
//         "margin": "md"
//       },
//       {
//         "type": "box",
//         "layout": "horizontal",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Date",
//                 "align": "center",
//                 "color": "#FFFFFF",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#ffffff00",
//               "endColor": "#ffffff00",
//               "centerColor": "#9c27b0"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Rate",
//                 "align": "center",
//                 "color": "#FFFFFF",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#ffffff00",
//               "endColor": "#ffffff00",
//               "centerColor": "#9c27b0"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Bcoin",
//                 "align": "center",
//                 "color": "#FFFFFF",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#ffffff00",
//               "endColor": "#ffffff00",
//               "centerColor": "#9c27b0"
//             }
//           }
//         ]
//       },
//       {
//         "type": "box",
//         "layout": "horizontal",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": his_Date,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#ffffff00",
//               "endColor": "#ffffff00",
//               "centerColor": "#9c27b0"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": his_Rate,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "endColor": "#ffffff00",
//               "centerColor": "#9c27b0",
//               "startColor": "#ffffff00"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": his_Bcoin,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "endColor": "#ffffff00",
//               "centerColor": "#9c27b0",
//               "startColor": "#ffffff00"
//             }
//           }
//         ]
//       },
//       {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "text",
//             "text": "Rescue Hero History",
//             "align": "center",
//             "color": "#000000",
//             "weight": "bold"
//           }
//         ],
//         "background": {
//           "type": "linearGradient",
//           "angle": "90deg",
//           "startColor": "#e0e0e01F",
//           "endColor": "#e0e0e01F",
//           "centerColor": "#e0e0e0"
//         },
//         "margin": "md"
//       },
//       {
//         "type": "box",
//         "layout": "horizontal",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Date",
//                 "align": "center",
//                 "color": "#000000",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#e0e0e000",
//               "endColor": "#e0e0e000",
//               "centerColor": "#e0e0e0"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Hero ID",
//                 "align": "center",
//                 "color": "#000000",
//                 "weight": "bold"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#e0e0e000",
//               "endColor": "#e0e0e000",
//               "centerColor": "#e0e0e0"
//             }
//           }
//         ]
//       },
//       {
//         "type": "box",
//         "layout": "horizontal",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": res_Date,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#e0e0e000",
//               "endColor": "#e0e0e000",
//               "centerColor": "#e0e0e0"
//             }
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": res_Hero,
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "startColor": "#e0e0e000",
//               "endColor": "#e0e0e000",
//               "centerColor": "#e0e0e0"
//             }
//           }
//         ]
//       },      
//       {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "AVG / Day",
//                 "weight": "bold",
//                 "color": "#FFFFFF",
//                 "align": "center"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "endColor": "#FFFFFF00",
//               "centerColor": "#bc5100",
//               "startColor": "#FFFFFF00"
//             },
//             "margin": "lg"
//           },
//           {
//             "type": "box",
//             "layout": "horizontal",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "Days Count",
//                     "align": "center",
//                     "color": "#FFFFFF",
//                     "weight": "bold"
//                   }
//                 ],
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "startColor": "#ffffff00",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#bc5100"
//                 }
//               },
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "Baht",
//                     "align": "center",
//                     "color": "#FFFFFF",
//                     "weight": "bold"
//                   }
//                 ],
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "startColor": "#ffffff00",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#bc5100"
//                 }
//               },
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "Bcoin",
//                     "align": "center",
//                     "color": "#FFFFFF",
//                     "weight": "bold"
//                   }
//                 ],
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "startColor": "#ffffff00",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#bc5100"
//                 }
//               }
//             ]
//           },
//           {
//             "type": "box",
//             "layout": "horizontal",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": avg_Day,
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "startColor": "#ffffff00",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#bc5100"
//                 }
//               },
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": avg_Money,
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#bc5100",
//                   "startColor": "#ffffff00"
//                 }
//               },
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": avg_Bcoin,
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "endColor": "#ffffff00",
//                   "centerColor": "#bc5100",
//                   "startColor": "#ffffff00"
//                 }
//               }
//             ]
//           }
//         ],
//         "margin": "md"
//       },
//       {
//         "type": "box",
//         "layout": "vertical",
//         "contents": [
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "text",
//                 "text": "Summary",
//                 "weight": "bold",
//                 "color": "#FFFFFF",
//                 "align": "center"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "90deg",
//               "endColor": "#FFFFFF00",
//               "centerColor": "#AF9B37",
//               "startColor": "#FFFFFF00"
//             },
//             "margin": "lg"
//           },
// 					{
// 						"type": "box",
// 						"layout": "vertical",
// 						"contents": [{
// 								"type": "box",
// 								"layout": "vertical",
// 								"contents": [{
// 									"type": "text",
// 									"align": "start",
// 									"weight": "bold",
// 									"color": "#FFFFFF",
// 									"offsetStart": "10px",
// 									"contents": [{
// 											"type": "span",
// 											"text": "Total Invest Bcoin : "
// 										},
// 										{
// 											"type": "span",
// 											"text": ""+ pTOTAL_INVEST_BCOIN + " Bcoin",
// 											"color": "#88ffff"
// 										}
// 									]
// 								}],
// 								"background": {
// 									"type": "linearGradient",
// 									"angle": "90deg",
// 									"startColor": "#AF9B37",
// 									"endColor": "#FFFFFF00",
// 									"centerColor": "#AF9B37"
// 								}
// 							},
// 							{
// 								"type": "box",
// 								"layout": "vertical",
// 								"contents": [{
// 									"type": "text",
// 									"align": "start",
// 									"weight": "bold",
// 									"color": "#FFFFFF",
// 									"offsetStart": "10px",
// 									"contents": [{
// 											"type": "span",
// 											"text": "Total Invest Money : "
// 										},
// 										{
// 											"type": "span",
// 											"text": ""+pTOTAL_INVEST_MONEY +" Baht",
// 											"color": "#88ffff"
// 										}
// 									]
// 								}],
// 								"background": {
// 									"type": "linearGradient",
// 									"angle": "90deg",
// 									"startColor": "#AF9B37",
// 									"endColor": "#FFFFFF00",
// 									"centerColor": "#AF9B37"
// 								},
// 								"margin": "xs"
// 							},
// 							{
// 								"type": "box",
// 								"layout": "vertical",
// 								"contents": [{
// 									"type": "text",
// 									"align": "start",
// 									"weight": "bold",
// 									"color": "#FFFFFF",
// 									"offsetStart": "10px",
// 									"contents": [{
// 											"type": "span",
// 											"text": "Total Days Count : "
// 										},
// 										{
// 											"type": "span",
// 											"text": ""+pTOTAL_DAYS_COUNT,
// 											"color": "#88ffff"
// 										}
// 									]
// 								}],
// 								"background": {
// 									"type": "linearGradient",
// 									"angle": "90deg",
// 									"startColor": "#AF9B37",
// 									"endColor": "#FFFFFF00",
// 									"centerColor": "#AF9B37"
// 								},
// 								"margin": "xs"
// 							},
// 							{
// 								"type": "box",
// 								"layout": "vertical",
// 								"contents": [{
// 									"type": "text",
// 									"align": "start",
// 									"weight": "bold",
// 									"color": "#FFFFFF",
// 									"offsetStart": "10px",
// 									"contents": [{
// 											"type": "span",
// 											"text": "Total Claim Count : "
// 										},
// 										{
// 											"type": "span",
// 											"text": ""+pTOTAL_CLAIM,
// 											"color": "#88ffff"
// 										}
// 									]
// 								}],
// 								"background": {
// 									"type": "linearGradient",
// 									"angle": "90deg",
// 									"startColor": "#AF9B37",
// 									"endColor": "#FFFFFF00",
// 									"centerColor": "#AF9B37"
// 								},
// 								"margin": "xs"
// 							},
// 							{
// 								"type": "box",
// 								"layout": "vertical",
// 								"contents": [{
// 									"type": "text",
// 									"align": "start",
// 									"color": "#FFFFFF",
// 									"weight": "bold",
// 									"offsetStart": "10px",
// 									"contents": [{
// 											"type": "span",
// 											"text": "Total Claim Coin : "
// 										},
// 										{
// 											"type": "span",
// 											"text": ""+pTOTAL_BCOIN+ " Bcoin",
// 											"color": "#88ffff"
// 										}
// 									]
// 								}],
// 								"background": {
// 									"type": "linearGradient",
// 									"angle": "90deg",
// 									"startColor": "#AF9B37",
// 									"endColor": "#FFFFFF00",
// 									"centerColor": "#AF9B37"
// 								},
// 								"margin": "xs"
// 							},
// 							{
// 								"type": "box",
// 								"layout": "vertical",
// 								"contents": [{
// 									"type": "text",
// 									"align": "start",
// 									"color": "#FFFFFF",
// 									"weight": "bold",
// 									"offsetStart": "10px",
// 									"contents": [{
// 											"type": "span",
// 											"text": "Total Income : "
// 										},
// 										{
// 											"type": "span",
// 											"text": ""+pTOTAL_INCOME +" Baht",
// 											"color": "#88ffff"
// 										}
// 									]
// 								}],
// 								"background": {
// 									"type": "linearGradient",
// 									"angle": "90deg",
// 									"startColor": "#AF9B37",
// 									"endColor": "#FFFFFF00",
// 									"centerColor": "#AF9B37"
// 								},
// 								"margin": "xs"
// 							}
// 						],
// 						"margin": "xs"
// 					},
//           {
//             "type": "box",
//             "layout": "horizontal",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": "ROI "+ pROI+"%",
//                     "align": "center",
//                     "color": "#000000",
//                     "weight": "bold"
//                   }
//                 ],
//                 "background": {
//                   "type": "linearGradient",
//                   "angle": "90deg",
//                   "startColor": "#FFFFFF00",
//                   "endColor": "#FFFFFF00",
//                   "centerColor": "#64FFDA"
//                 }
//               }
//             ],
//             "margin": "md"
//           },
//           {
//             "type": "box",
//             "layout": "vertical",
//             "contents": [
//               {
//                 "type": "box",
//                 "layout": "vertical",
//                 "contents": [
//                   {
//                     "type": "text",
//                     "text": ".",
//                     "color": "#E0E0E0",
//                     "contents": []
//                   }
//                 ],
//                 "backgroundColor": "#E0E0E0",
//                 "height": "20px",
//                 "offsetStart": ""+pBGROI+"%"
//               }
//             ],
//             "background": {
//               "type": "linearGradient",
//               "angle": "100deg",
//               "startColor": "#00FF0FFF",
//               "endColor": "#FF0000FF",
//               "centerColor": "#E8FF00FF",
//               "centerPosition": "50%"
//             },
//             "height": "20px",
//             "cornerRadius": "10px"
//           }
//         ]
//       }
//     ],
//     "background": {
//       "type": "linearGradient",
//       "startColor": "#000051",
//       "centerColor": "#000000",
//       "endColor": "#000051",
//       "angle": "0deg"
//     }
//   }
// }
// //-------------------------------------------------------------------------------    
//     return result;
    
//     // Logger.log(res.getContentText());
// }
