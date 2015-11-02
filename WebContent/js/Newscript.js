// The root URL for the RESTful services
var rootURL = "http://localhost:8080/cellar/rest/wines";

var currentWine;

$(window).load(function() {
	 // executes when complete page is fully loaded, including all frames, objects and images
	 //alert("window is loadedzzzzzzzzz");
	 
	});


var person = {
		  firstName: "Jim",
		  introduce: function(){
			  console.log("Hi, I'm " + this.firstName);
		  }
		};

		person.introduce();
		// Outputs: Hi, I'm Jim
		setTimeout(person.introduce, 20);

//alert("window loadad");