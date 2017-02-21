var fetch = require('node-fetch');

var mysql = require('promise-mysql');
var connection = mysql.createPool({
host: 'db.bertha.ca',
user: 'user_decodemtl',
password: 'Q<U*.5@f461Sv7ffh3+3',
database: 'decodemtl_shoestagram',
connectionLimit: 10
});



var url = "http://svcs.ebay.com/services/search/FindingService/v1";
url += "?OPERATION-NAME=findItemsByKeywords";
url += "&SERVICE-VERSION=1.0.0";
url += "&SECURITY-APPNAME=allendec-wwwdecod-PRD-f2466ad41-728dd7a8";
url += "&GLOBAL-ID=EBAY-US";
url += "&RESPONSE-DATA-FORMAT=JSON";
//   url += "&callback=decodeMTL";
url += "&REST-PAYLOAD";
url += "&keywords=sneakers vans men";
url += "&paginationInput.entriesPerPage=10";


fetch(url)
.then(function(res) {
  return res.json();
}).then(function(body) {
 
  var previous = "";
 
  // Sort by itemId     
  body.findItemsByKeywordsResponse[0].searchResult[0].item.sort(function(a, b) {
      return parseFloat(a.itemId) - parseFloat(b.itemId);
  });

 
  // Loop through array
  body.findItemsByKeywordsResponse[0].searchResult[0].item.forEach(function(item, index){

    // Ignore if itemId already exist 
    if (previous !== item.itemId[0]) {
      
      var queryStr = `
        INSERT INTO shop_links VALUES (null, now(), now(), null, ?, ?)
      `;
      
      previous = item.itemId[0];
        
      connection.query(queryStr,[item.viewItemURL, item.title])
      .then(function(result) {
          console.log(result);
      })
      .catch(function(err){
          console.log(err);
      })
    }
    
  })

}).catch(function(err){
  console.log(err);
});
