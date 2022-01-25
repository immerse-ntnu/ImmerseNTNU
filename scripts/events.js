
// Gets the div with the container id witch the entire evnets
//side is inside of
// the div gets a class and creates an article inside of it
let container = document.getElementById("container");
let articleElement = document.createElement("article");
container.appendChild(articleElement);

container.classList.add("container");
//Fetches the json file and its content

fetch("../json/events.json")
	.then((r) => r.json())
	.then((res) => {
		for (var {
				headline, date, time, paragraph, img
			}
			of res.elements) {
			let sectionElement = document.createElement("section");
			let header = document.createElement("h3");
			let eventDate = document.createElement("h4");
			let p = document.createElement("p");
			let event = document.createElement("div");
			let eventRow = document.createElement("div");
			let eventImg = document.createElement("img");

			//everything is inside articleElement and sectionElement
			//eventRow creates event that has the rest of the elements inside it

			articleElement.appendChild(sectionElement);
			sectionElement.appendChild(eventRow);
			event.appendChild(eventImg);
			eventRow.appendChild(event);
			event.appendChild(header);
			event.appendChild(eventDate);
			event.appendChild(p);

			//all the elemenets sets the information except image
			//wich sets a source since the Json file contains the source to the file
			//EventDate takes date and the time from the Json file and adds a space between

			eventImg.src = img;
			p.innerHTML = paragraph;
			header.innerHTML = headline;
			date = new Date(date);
			eventDate.innerHTML = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " " + time;
			//A class is added to the elements that need it

			eventImg.classList.add("imgDiv");
			eventRow.classList.add("body");
			event.classList.add("events-col");
		}
	});
