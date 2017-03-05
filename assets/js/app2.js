var topics = ["Archer", "Family Guy", "Futurama", "Rick and Morty", "Metalocalypse"];
render();

function render(){
$("#buttons").empty();
for (var i = 0; i < topics.length; i++) {
	var button = $("<button>")
	button.addClass("btn btn-success");
	button.attr("data-value", topics[i]);
	button.attr("id", "gifBtn");
	button.text(topics[i]);

	$("#buttons").append(button);
}
}

function gifs() {
	$("#gifs").empty();
	var btnVal = $(this).attr("data-value").split(" ").join("+");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + btnVal + "&rating=pg-13&limit=12&api_key=dc6zaTOxFJmzC";
	console.log(btnVal);
	$.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){
  	console.log(queryURL);
		console.log(response);
		var results = response.data;
		console.log(results);
		for (var i = 0; i < results.length; i++){
			var gifDiv = $("<div>");
			var rating = $("<p>").text("Rating: " + results[i].rating);
			var gifImg = $("<img>");
			gifImg.attr("src", results[i].images.fixed_height.url);

			gifDiv.addClass("col-sm-4");
			gifDiv.append(gifImg);
			gifDiv.append(rating);

			$("#gifs").append(gifDiv);
		}
  })
}

$("#add-show").on("click", function(event) {
	event.preventDefault();
	var show = $("#show-input").val().trim();
	$("#show-input").append().val("");
	topics.push(show);
	render();
});

$(document).on("click", "#gifBtn", gifs);
render();