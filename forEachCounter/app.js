/*
 * Add specific product to the cart by executing AJAX request
 *
 * @param {String}           script  The type of
 * @param {(Number|String)}  amount  Amount of quantity desired for item
 * @param {(Number|String)}  itemId  ID of variant
 * @param {Callback}         cb      Optional call back on success of Ajax
 */
var mayPromoPostReq = function(script, amount, itemId, cb) {
    var params = {
        type: "POST",
        url: "/cart/" + script,
        data: "quantity=" + amount + "&id=" + itemId,
        dataType: "json",
        success: function() {
            if (cb instanceof Function) {
                cb();
            }
        }
    };
    $.ajax(params);
};

var removeAllPromo = function(cartItems, promoItem1, promoItem2) {
    var isPromoItem1 = false;
    var isPromoItem2 = false;

    var removeItem2 = function() {
        mayPromoPostReq("change.js", 0, promoItem2, function() {
            location.reload(true);
        });
    };

    for (i = 0; i < cartItems.length; i += 1) {
        if (cartItems[i].id === promoItem1) {
            isPromoItem1 = true;
        }

        if (cartItems[i].id === promoItem2) {
            isPromoItem2 = true;
        }
    }

    if (isPromoItem1) {
        mayPromoPostReq("change.js", 0, promoItem1, function() {
            if (isPromoItem2) {
                removeItem2();
            } else {
                location.reload(true);
            }
        });
    } else if (isPromoItem2) {
        removeItem2();
    }
};

/*
 * Removes all promo items in the cart
 *
 * @param {Array} cartItems   Array of items in the cart
 * @param {Array} promoItems  ID's of promo items to be REMOVED from the cart
 */

var removeAllPromo = function(cartItems, promoItems) {
var i;
var arr = [];
for(i = 0; i < promoItems.length) {
    var j;
    for(j = 0; j < cartItems.length; j+=1){
        if(promoItems[i] === cartItems[j].id) {
            arr.push(promoItems[i]);
        }
    }
}

var z;
for(z = 0; z < arr.length; z+=1) {

}
}