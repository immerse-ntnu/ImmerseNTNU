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
  if(list[n].link !== thisPage) {
    let linkMenu = document.createElement("a");
    linkMenu.innerHTML = list[n].text;
    linkMenu.href = list[n].link;
    articleMenu.appendChild(linkMenu);
  }
  else {
    let linkMenu = document.createElement("p");
    linkMenu.innerHTML = list[n].text;
    articleMenu.appendChild(linkMenu);
  }
}