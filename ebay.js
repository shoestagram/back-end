var fetch = require('node-fetch');

/*===================================================
 * 1. Truncate shop_links table
 * 2. Loop through media table and populate shop_links
 *====================================================*/


var mysql = require('promise-mysql');
var connection = mysql.createPool({
  host: 'db.bertha.ca',
  user: 'user_decodemtl',
  password: 'Q<U*.5@f461Sv7ffh3+3',
  database: 'decodemtl_shoestagram',
  connectionLimit: 10
});


var queryStr = `
  truncate table shop_links;
`;

// Truncate shop_links table
connection.query(queryStr)
.then(function(result) {

    var queryStr = `
    SELECT
      id,
      date_created,
      date_updated,
      media_url,
      thumbnail_url,
      text,
      keyword,
      norm_description,
      source_url,
      source_user,
      source_id,
      crawled_retails_shops,
      crawled_shops_links,
      shop_url
    FROM media
`;
    
    // Fetch all item from media table
    connection.query(queryStr)
      .then(function(result) {

        // Loops through media items
        result.forEach(function(mediaItem, index) {

          var url = "http://svcs.ebay.com/services/search/FindingService/v1";
          url += "?OPERATION-NAME=findItemsByKeywords";
          url += "&SERVICE-VERSION=1.0.0";
          url += "&SECURITY-APPNAME=allendec-wwwdecod-PRD-f2466ad41-728dd7a8";
          url += "&GLOBAL-ID=EBAY-US";
          url += "&RESPONSE-DATA-FORMAT=JSON";
          url += "&REST-PAYLOAD";
          url += "&keywords=" + mediaItem.keyword;
          url += "&paginationInput.entriesPerPage=10";

          // Fetch ebay details
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
              body.findItemsByKeywordsResponse[0].searchResult[0].item.forEach(function(item, index) {

                // Ignore if itemId already exist 
              if (previous !== item.itemId[0]) {

                var queryStr = `
                  INSERT INTO shop_links VALUES (null, now(), now(), null, ?, ?, ${mediaItem.id})
                `;
  
                    previous = item.itemId[0];
  
                    connection.query(queryStr, [item.viewItemURL, item.title])
                      .then(function(result) {
                        console.log(result);
                      })
                      .catch(function(err) {
                        console.log(err);
                      })
                }

              })

            })
            .catch(function(err) {
              console.log(err);
            })
        })


      })
      .catch(function(err) {
        throw err;
      })

  })
  .catch(function(err) {
    throw err;
  })
