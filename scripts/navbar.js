let articleMenu = document.getElementById("links");

const list = [
  {text: "Showcasing", link: "showcase.html", icon: "SC"},
  {text: "Events", link: "events.html", icon: "E"},
  {text: "News", link: "news.html", icon: "N"},
  {text: "About", link: "about.html", icon: "A"},
  {text: "Sponsors", link: "sponsors.html", icon: "S"},
  {text: "Contact", link: "contact.html", icon: "C"},
];

var thisPage = window.location.pathname.split("/").pop();

for(let n=0; n < list.length; n++) {
  let linkMenu = document.createElement("a");
  linkMenu.innerHTML = list[n].text;
  linkMenu.href = list[n].link;



  if(list[n].link === thisPage) {
    linkMenu.id = "this";
    console.log(thisPage);
    console.log(list[n].link);
  }
  else {
    linkMenu.id = "notThis";
  }

  articleMenu.appendChild(linkMenu);
}