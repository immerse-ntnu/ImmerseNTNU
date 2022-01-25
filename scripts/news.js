/*jshint esversion: 6 */

let divbox = document.getElementById("container");
let articleRow = document.createElement("article");
divbox.appendChild(articleRow);

//Fetches the json file and give it some content
fetch("../json/news.json")
  .then((r) => r.json())
  .then((res) => {
    for (var { headline, date, paragraph, img } of res.elements) {
      // Uses a for loop and creates a box for each news in the Json

      //Creates elements that will get filled with data from the Json
      let p = document.createElement("p");
      let sectionElement = document.createElement("section");
      let header = document.createElement("h3");
      let header2 = document.createElement("h4");
      let article = document.createElement("div");
      let image = document.createElement("img");
      let link = document.createElement("a");
      let article_text = document.createElement("div");

      // when clicked the function divexpand will run on the clicked div
      article.onclick = divexpand;

      //everything is inside articleRow and sectionElement
      //SectionElement creates article that has the rest of the
      //elements inside it except article_text witch has the paragraph

      articleRow.appendChild(sectionElement);
      sectionElement.appendChild(article);
      article.appendChild(image);
      article.appendChild(header);
      article.appendChild(header2);
      article.appendChild(article_text);
      article.appendChild(link);
      article_text.appendChild(p);

      //all the elemenets sets the information except image
      //which sets a source since the Json file contains the source to the file

      p.innerHTML = paragraph;
      header.innerHTML = headline;
      date = new Date(date);
      header2.innerHTML = date.getDate()+"."+(date.getMonth() + 1)+"."+date.getFullYear();
      link.innerHTML = "Click to read more";
      image.src = img;

      //A class is added to the elements that need it
      article.classList.add("newsList", "newsList-col");
      article_text.classList.add("layer", ".layer:hover");
      articleRow.classList.add("row");
      image.classList.add("bilde");

      // the div expand funtion that toggels a class in css named active
      function divexpand() {
        article.classList.toggle("active");
      }
    }
  });
