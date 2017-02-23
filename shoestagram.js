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
        ORDER BY id
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
    
    console.log(profileId);
    
    var queryStr = `
        select 
          media.id,
          media.date_created,
          media.date_updated,
          media.media_url,
          media.thumbnail_url,
          media.text,
          media.keyword,
          media.norm_description,
          media.source_url,
          media.source_user,
          media.source_id,
          media.crawled_retails_shops,
          media.crawled_shops_links,
          media.shop_url,
          likes.user_id
        from media
        JOIN likes
        ON media.id = likes.media_id
        WHERE likes.user_id = ?
    `;

    return conn.query(queryStr, [profileId])
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
              shop_url: item.shop_url,
              user_id: item.user_id
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
          source,
          price,
          url,
          description,
          media_id
        FROM shop_links
        ORDER BY media_id
    `;

    return conn.query(queryStr)
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
            id: item.id,
            date_created: item.date_created,
            date_updated: item.date_updated,
            source: item.source,
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


function retail_shops(options, conn) {

    var queryStr = `
        SELECT 
          id,
          date_created,
          date_updated,
          supplier_name,
          address,
          province,
          city,
          postcode,
          tel,
          geo_loc
        FROM retail_shops
        ORDER BY id
    `;

    return conn.query(queryStr)
    .then(function(result) {

        var arrResult = [];

        result.forEach(function(item, index) {

            var temp = {
                id: item.id,
                date_created: item.date_created,
                date_updated: item.date_updated,
                supplier_name: item.supplier_name,
                address: item.address,
                province: item.province,
                city: item.city,
                postcode: item.postcode,
                tel: item.tel,
                geo_loc: item.geo_loc
            }

            arrResult.push(temp);
        })

        return arrResult;

    })
    .catch(function(err) {
        throw err;
    })
}


function postLikes(u_id, m_id, conn) {

   var queryStr = `
        SELECT COUNT(*) as Num
        FROM likes
        WHERE user_id = ?
        AND media_id = ?
    `;

    return conn.query(queryStr, [u_id, m_id])
    .then(function(result) {

       if (result[0].Num === 0) {
           
           return conn.query(
            'INSERT INTO likes VALUES (null, now(), now(), ?,?)', [u_id, m_id])
            .then(function(result) {
                return "Successful";
            })
       }
       
       return "Already Exist";

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
    shopLinks: shopLinks,
    retail_shops: retail_shops,
    postLikes: postLikes

};