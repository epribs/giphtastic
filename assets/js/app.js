var topics = ["Archer", "Family Guy", "Futurama", "Rick and Morty", "Metalocalypse"];
for (var i = 0; i < topics.length; i++) {
	var button = $("<button>")
	button.addClass("btn btn-success gifBtn");
	button.attr("data-value", topics[i]);
	button.text(topics[i]);
	$("#buttons").append(button);
}

$(".gifBtn").on("click", function() {
	$("#gifs").empty();
	var btnVal = $(this).attr("data-value").split(" ").join("+");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + btnVal + "&rating=pg-13&limit=12&api_key=dc6zaTOxFJmzC";
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
			var imgDiv = $("<button>");
			var gifStill = $("<img>");
			gifStill.attr("src", results[i].images.fixed_height_small_still.url);
			imgDiv.append(gifStill);
			imgDiv.attr("data-toggle", "modal");
			imgDiv.attr("data-target", "#myModal");
			imgDiv.attr("id", results.i);
			console.log(results[i]);
			$("#gifs").append(imgDiv);

			//For Modal
			var gifModalBody = $(".modal-body");
			gifModalBody.append(gifDiv);
			var gifDiv = $("<div>");
			var resultsData = $("imgDiv").attr("id");
			console.log("RESULTDATA" + resultsData);
			// var rating = $("<p>").text("Rating: " + resultsData.rating);
			var gifImg = $("<img>");
			gifDiv.addClass("col-sm-4");
			// gifImg.attr("src", resultsData.images.fixed_height.url);
			gifImg.addClass("imgCenter");
			gifDiv.append(gifImg);
			// gifDiv.append(rating);
		}

		
			
  })
});