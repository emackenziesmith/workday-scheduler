var events = JSON.parse(localStorage.getItem("saved events"));

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

  if(today != JSON.parse(localStorage.getItem("day"))) {
    localStorage.setItem("day", JSON.stringify(today));
    $("textarea").each().text("");
    events = ["", "", "", "", "", "", "", ""];
    localStorage.setItem("saved events", JSON.stringify(events));
  }
};

function auditEvents() {
  var now = moment().startOf("hour");
  for(var i = 0; i < events.length; i++) {
    var eventId = JSON.parse($(".row").attr("id")) + i;
    var eventTime = JSON.parse($("div# + eventId").find("textarea").attr("time"));

    //color code for past, present, future
    if(now.isAfter(eventTime)) {
      $("div#" = eventId).find("textarea").addClass("past")
    }
    else if(now.isSame(eventTime)) {
      $("div#" + eventId).find("textarea").addClass("present");
    }
    else if(now.isBefore(eventTime)) {
      $("div#" + eventId).find("textarea").addClass("future");
    }
  }
};

function loadEvents() {
  for(var i = 0; i < events.length; i++) {
    var eventId = JSON.parse($(".row").attr("id")) + i; 
    $("div#" + eventId).find("textarea").text(events[i]);
  };
};

$("i").on("click", function() {
  var eventDescription = $(this).parents("row").find("textarea").val().trim();
  events.splice($(this).parents(".row").attr("id"), 1, eventDescription);
  localStorage.setItem("saved events", JSON.stringify(events));
})

loadEvents(); 

auditEvents();

//audit day every 30 minutes
setInterval(auditDay(), (1000 * 60 * 30)); 

//audit events every 15 minutes
setInterval(auditEvents(), (1000 * 60 * 15));
