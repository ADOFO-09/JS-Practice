// jQuery Syntax

$("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title margin-50");

console.log($("h1").hasClass("big-title margin-50")); // returns boolean value

$("h1").text("Hey");

// $("button").html("<em>Don't click me</em>");

$("button")

$("a").attr("href", "http://www.yahoo.com");

console.log($("img").attr("src"));

$("button").click(function(){
    $("h1").css("color", "purple");
})

$("input").keypress(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "red");
})

// $("h1").before("<button>New</button>");
// $("h1").after("<button>Save</button>");
// $("h1").append("<button>Okay</button>");
// $("h1").prepend("<button>Cancel</button>");

// $("button").remove();

//jQuery Effect Methods
$("button").click(function(){
    // $("h1").slideUp().slideDown().fadeOut().fadeIn();
    // $("h2").hide().show().toggle();
    $("h1").animate({margin: '20px'}); // only add css rules that have numeric values like padding, margin etc. 

});