/*jshint esversion: 6 */

const eventDiv = document.getElementById("event-div");
const newsDiv = document.getElementById("news-div");

//gets the Events.json file, when uploaded to a server, makes it an array of event objects
fetch("../json/events.json")
	.then((r) => r.json())
	.then((events) => {
		let earliestEvent = events.elements[0];
		//finds earliest event
		for (const event of events.elements) {
			const eariestDate = new Date(earliestEvent.date);
			const date = new Date(event.date);
			if (
				date > eariestDate ||
				(date.getDate() == eariestDate.getDate &&
					event.time >= earliestEvent.time)
			) {
				continue;
			}
			earliestEvent = event;
		}

		CreateContent(earliestEvent, eventDiv, true);
	});
fetch("../json/news.json")
	.then((r) => r.json())
	.then((news) => {
		let latestNews = news.elements[0];
		for (const n of news.elements) {
			if (n > latestNews) latestNews = n;
		}

		CreateContent(latestNews, newsDiv, false);
	});

function CreateContent(event, div, usetime) {
	const image = document.createElement("img");
	const head3 = document.createElement("h3");
	const head4 = document.createElement("h4");
	const para = document.createElement("p");

	image.src = event.img;
	head3.innerHTML = event.headline;
	const date = new Date(event.date);
	head4.innerHTML = usetime ? date.getDate() +
		  "." +
		  (date.getMonth() + 1) +
		  "." +
		  date.getFullYear() +
		  " " +
		  event.time
		: date.getDate() +
		  "." +
		  (date.getMonth() + 1) +
		  "." +
		  date.getFullYear();
	para.innerHTML = event.paragraph;

	div.appendChild(image);
	div.appendChild(head3);
	div.appendChild(head4);
	div.appendChild(para);
}
