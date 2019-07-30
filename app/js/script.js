console.log('[SAN06] Mobile Home Page Tiles v2 (QA)');
 
function waitForEl(selector, callback) {
  if (document.querySelector(selector)) {
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};

var newCardsHTML = '<div class="col-xs-6">' +
  '<a href="https://www.sanity.com.au/featured/411/Music"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14453.jpg" title="Buy Music On CD &amp; Vinyl"></a>' +
  '<a href="https://www.sanity.com.au/featured/414/Movies"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14454.jpg" title="Buy Movies On 4K UHD, Blu-ray &amp; DVD"></a>' +
  '<a href="https://www.sanity.com.au/featured/413/TV"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14455.jpg" title="Buy TV Shows On DVD &amp; Blu-ray"></a>' +
'</div>' +
'<div class="col-xs-6">' +
  '<a href="https://www.sanity.com.au/genre/Merchandise/Pop_Vinyl"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14457.jpg" title="Buy Pop Vinyl Now"></a>' +
  '<a href="https://www.sanity.com.au/specials/1127/New_Release_DVD__Blu-ray"><img style="padding: 7px;" src="https://www.sanity.com.au/contentimages/homerecommendedtable/14458.jpg" title="Buy The Latest Movies &amp; TV Shows Out Now"></a>' +
  '<a href="https://www.sanity.com.au/specials/2021/Hottest_Pre-Orders"><img style="padding: 7px;" src="https://www.sanity.com.au/contentimages/homerecommendedtable/14459.jpg" title="Pre-order The Hottest Titles Coming Soon"></a>' +
  '<a href="https://www.sanity.com.au/featured/410/Games"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14460.jpg" title="Buy Games &amp; Gaming Accessories"></a>' +
'</div>' +
'<div class="col-xs-12">' +
  '<a href="https://www.sanity.com.au/specials/3021/Board_Games"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14456.jpg" title="Buy Board Games Now"></a>' +
  '<a href="https://www.sanity.com.au/featured/415/Merchandise"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14461.jpg" title="Buy Merchandise Now"></a>' +
'</div>' +
'<div class="col-xs-6">' +
  '<a href="https://www.sanity.com.au/products/2422034/Shanghai_Job_The"><img src="https://www.sanity.com.au/contentimages/homerecommendedtable/14462.jpg" title="Buy Books Now"></a>';
'</div>' +

waitForEl('.mobile-homebanner', function() {
  var existingCardsHTML = document.querySelector('.mobile-homebanner');
  existingCardsHTML.innerHTML = newCardsHTML;
});