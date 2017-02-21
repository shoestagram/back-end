function searchMedia(searchTerm, conn) {

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
        WHERE keyword like ?
    `;

    var promOne = conn.query(queryStr, [searchTerm]);

    return promOne
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
              id: item.id,
              date_created: item.date_created,
              date_updated: item.date_updated,
              media_url: item.media_url,
              thumbnail_url: item.thumbnail_url,
              text: item.text,
              keyword: item.keyword,
              norm_description: item.norm_description,
              source_url: item.source_url,
              source_user: item.source_user,
              source_id: item.source_id,
              crawled_retails_shops: item.crawled_retails_shops,
              crawled_shops_links: item.crawled_shops_links,
              shop_url: item.shop_url
            }

            arrResult.push(temp);
        })

        return arrResult;

    })
    .catch(function(err) {
        throw err;
    })
}

function getAllMedia(options, conn) {

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

    var promOne = conn.query(queryStr);

    return promOne
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
              id: item.id,
              date_created: item.date_created,
              date_updated: item.date_updated,
              media_url: item.media_url,
              thumbnail_url: item.thumbnail_url,
              text: item.text,
              keyword: item.keyword,
              norm_description: item.norm_description,
              source_url: item.source_url,
              source_user: item.source_user,
              source_id: item.source_id,
              crawled_retails_shops: item.crawled_retails_shops,
              crawled_shops_links: item.crawled_shops_links,
              shop_url: item.shop_url
            }

            arrResult.push(temp);
        })

        return arrResult;

    })
    .catch(function(err) {
        throw err;
    })
}

function getSingleMedia(mediaId, conn) {

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
        WHERE id = ?
    `;

    return conn.query(queryStr, [mediaId])
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
              id: item.id,
              date_created: item.date_created,
              date_updated: item.date_updated,
              media_url: item.media_url,
              thumbnail_url: item.thumbnail_url,
              text: item.text,
              keyword: item.keyword,
              norm_description: item.norm_description,
              source_url: item.source_url,
              source_user: item.source_user,
              source_id: item.source_id,
              crawled_retails_shops: item.crawled_retails_shops,
              crawled_shops_links: item.crawled_shops_links,
              shop_url: item.shop_url
            }

            arrResult.push(temp);
        })

        return arrResult;

    })
    .catch(function(err) {
        throw err;
    })
}


function getAllProfile(options, conn) {

    var queryStr = `
        SELECT 
          id,
          date_created,
          date_updated,
          first_name,
          last_name,
          gender,
          email
        FROM profile
    `;

    return conn.query(queryStr)
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
            id: item.id,
            date_created: item.date_created,
            date_updated: item.date_updated,
            first_name: item.first_name,
            last_name: item.last_name,
            gender: item.gender,
            email: item.email
            }

            arrResult.push(temp);
        })

        return arrResult;

    })
    .catch(function(err) {
        throw err;
    })
}


function getSingleProfile(profileId, conn) {

    var queryStr = `
        SELECT 
          id,
          date_created,
          date_updated,
          first_name,
          last_name,
          gender,
          email
        FROM profile
        WHERE id = ?
    `;

    return conn.query(queryStr, [profileId])
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
            id: item.id,
            date_created: item.date_created,
            date_updated: item.date_updated,
            first_name: item.first_name,
            last_name: item.last_name,
            gender: item.gender,
            email: item.email
            }

            arrResult.push(temp);
        })

        return arrResult;

    })
    .catch(function(err) {
        throw err;
    })
}


function shopLinks(options, conn) {

    var queryStr = `
        SELECT 
          id,
          date_created,
          date_updated,
          price,
          url,
          description,
          media_id
        FROM shop_links
    `;

    return conn.query(queryStr)
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
            id: item.id,
            date_created: item.date_created,
            date_updated: item.date_updated,
            price: item.price,
            url: item.url,
            description: item.description,
            media_id: item.media_id
            }

            arrResult.push(temp);
        })

        return arrResult;

    })
    .catch(function(err) {
        throw err;
    })
}




// Export the API
module.exports = {
    // ...
    searchMedia: searchMedia,
    getAllMedia: getAllMedia,
    getSingleMedia: getSingleMedia,
    getAllProfile: getAllProfile,
    getSingleProfile: getSingleProfile,
    shopLinks: shopLinks

};