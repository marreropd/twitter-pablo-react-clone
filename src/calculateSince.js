/**
 * Calculates the Twitter time since the tweet was created
 * @param datetime returned by Twitter API in created_at
 * @return time since in html
 */

function calculateSince(datetime) {
  var tTime = new Date(datetime);
  var cTime = new Date();
  var sinceMin = Math.round((cTime - tTime) / 60000);
  if (sinceMin === 0) {
    var sinceSec = Math.round((cTime - tTime) / 1000);
    if (sinceSec < 10) var since = "10 seg";
    else if (sinceSec < 20) var since = "20 seg";
    else var since = "medio min";
  } else if (sinceMin === 1) {
    var sinceSec = Math.round((cTime - tTime) / 1000);
    if (sinceSec === 30) var since = "medio min";
    else if (sinceSec < 60) var since = "1 min";
    else var since = "1 min";
  } else if (sinceMin < 45) var since = sinceMin + " mins";
  else if (sinceMin > 44 && sinceMin < 60) var since = "1 hora";
  else if (sinceMin < 1440) {
    var sinceHr = Math.round(sinceMin / 60);
    if (sinceHr === 1) var since = "1 hora";
    else var since = sinceHr + " horas";
  } else if (sinceMin > 1439 && sinceMin < 2880) var since = "1 día";
  else {
    var sinceDay = Math.round(sinceMin / 1440);
    var since = sinceDay + "dias";
  }
  return since;
}

module.exports = calculateSince;

/* 
Refresh the Time Since Tweeted

This is how you could use a setInterval to refresh the time since tweeted using the calculateSince function above. */

//auto refresh interval to load more tweets
/* setInterval(function () {
  console.log("updating time since...");
  var tweets = $("#tweets .tweet");
  $.each(tweets, function (i, v) {
    //update the time since for the tweet
    $(v)
      .find(".tweet-time")
      .html(calculateSince($(v).find(".tweet-user").attr("created_at")))
      .fadeIn();
  });
}, 30000);
 */
