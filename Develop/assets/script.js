var events = JSON.parse(localStorage.getItem("saved event"));

if(!events) {
  events = ["", "", "", "", "", "", "", ""];
};

// set time attributes for each textarea
for(var i = 0; i < events.length; i++) {
  var eventId = JSON.parse($(".row").attr("id")) + i;
  $("div#" + eventID).find("textarea").attr("time", JSON.stringify(moment().set("hour", (9 + i)).startOf("hour")));
};

function auditDay() {
  var today = moment().format("dddd, MMMM Do");
  $("#currentDay").append("<p>").text(today);

  if(today ! = JSON.parse(localStorage.getItem("day"))) {
    localStorage.setItem("day", JSON.stringify(today));
    $("textarea").each().text("");
    events = ["", "", "", "", "", "", "", ""];
    localStorage.setItem("saved events", JSON.stringify(events));
  }
};

function auditEvent() {
  var now = moment().startOf("hour");
  frameElement(var i = 0; i < events.length; i++) {
    var eventId = JSON.parse($(".row").attr("id")) + i;
    var eventTime = JSON.parse($("div# + eventId").find("textarea").attr("time"));
  }
}

