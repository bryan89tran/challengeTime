
{% comment %}
/*
 * Add specific product to the cart by executing AJAX request
 *
 * @param {String}           script  The type of 
 * @param {(Number|String)}  amount  Amount of quantity desired for item
 * @param {(Number|String)}  itemId  ID of variant
 * @param {Callback}         cb      Optional call back on success of Ajax
 */
{% endcomment %}

var mayPromoPostReq = function (script, amount, itemId, cb) {
  var params = {
    type: "POST",
    url: "/cart/" + script,
    data: "quantity=" + amount + "&id=" + itemId,
    dataType: "json",
    success: function () {
      if (cb instanceof Function) {
        cb();
      }
    }
  };
  $.ajax(params);
}

{% comment %}
/*
 * Add the promoted item to the cart. 
 *
 * @param {Array}    cartItems     Array of items in the cart
 * @param {Number}   promoIDAdd    ID of promo item to be ADDED to the cart
 * @param {Number}   promoIDRemove ID of promo item to be REMOVED from the cart
 * @param {Callback} removeItem    Callback function to keep synchronous code
 */
{% endcomment %}

var executeMayPromo = function (cartItems, promoIDAdd, promoIDRemove, removeItem) {

  var i;
  var isQualifiedItem = false;
  for (i = 0; i < cartItems.length; i += 1) {
    if (cartItems[i].id === promoIDAdd) {
      isQualifiedItem = true;
    }
  }

  // If promo item is NOT found in the car then add it
  if (!isQualifiedItem) {
    mayPromoPostReq("add.js", 1, promoIDAdd, function () {
      removeItem(cartItems, promoIDRemove, true);
    });
  }
  else {
    removeItem(cartItems, promoIDRemove, false);
  }

}

{% comment %}
/*
 * Exist as a callback function for executeMayPromo
 * Removes sepcified promo item
 *
 * @param {Array}   cartItems      Array of items in the cart
 * @param {Number}  promoIDRemove  ID of promo item to be REMOVED from the cart
 * @param {Boolean} needsReload    If executeMayPromo made an ajax request 
 *                                 then a reload is required
 */
{% endcomment %}

var removePromoItem = function (cartItems, promoIDRemove, needsReload) {

  var i;
  var isNotQualifiedItem = false;
  for (i = 0; i < cartItems.length; i += 1) {
    if (cartItems[i].id === promoIDRemove) {
      isNotQualifiedItem = true;
    }
  }

  if (isNotQualifiedItem) {
    mayPromoPostReq("change.js", 0, promoIDRemove, function () {
      location.reload(true);
    });
  }
  else if (needsReload) {
    location.reload(true);
  }

}

{% comment %}
/*
 * Removes all promo items in the cart
 *
 * @param {Array} cartItems   Array of items in the cart
 * @param {Array} promoItems  ID's of promo items to be REMOVED from the cart
 */
{% endcomment %}

var removeAllPromo = function (cartItems, promoItems) {
  var i;
  var arr = [];
  for (i = 0; i < promoItems.length; i += 1) {
    var j;
    for (j = 0; j < cartItems.length; j += 1) {
      if (promoItems[i] === cartItems[j].id) {
        arr.push(promoItems[i]);
      }
    }
  }

  if (arr.length > 0) {
    var count = 0;
    arr.forEach(function (item, i) {
      mayPromoPostReq("change.js", 0, item, function () {
        count += 1;

        if (count === arr.length) {
          location.reload(true);
        }
      });
    });
  }
}

var displayPromoText = function (text) {
  $(".may-promo__container").removeClass("display-none");
  $(".may-promo__item").text(text);
}

{% comment %}
/*
 * May Promotions is tiered based on how much spent
 * At each price range, customers receive different perks
 *
 * @param {Number} totalPrice Subtotal spend by customer
 * @param {Array}  items      Array of items in the cart
 */
{% endcomment %}

function mayPromotions(totalPrice, items) {
  totalPrice /= 100;

  if (totalPrice < 500) {
    removeAllPromo(items, [{{ my_dnage_test_kit }}, { { water_bottle } }]);
}
        else if (totalPrice >= 500 && totalPrice < 1000) {
  executeMayPromo(items, {{ water_bottle }}, { { my_dnage_test_kit } }, removePromoItem);
        }
        else if (totalPrice >= 1000 && totalPrice < 2000) {
  executeMayPromo(items, {{ my_dnage_test_kit }}, { { water_bottle } }, removePromoItem);
        }
        else if (totalPrice >= 2000 && totalPrice < 5000) {
  removeAllPromo(items, [{{ my_dnage_test_kit }}, { { water_bottle } }]);
displayPromoText("miniPCR™ Thermal Cycler")
        }
        else if (totalPrice >= 5000) {
  removeAllPromo(items, [{{ my_dnage_test_kit }}, { { water_bottle } }]);
displayPromoText("Free Eppendorf Research Plus® Pipettes 4-pack")
        }
    }
