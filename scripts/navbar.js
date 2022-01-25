let articleMenu = document.getElementById("topbar");

const list = [
  {text: "Showcasing", link: "showcase.html", icon: "SC"},
  {text: "Events", link: "events.html", icon: "E"},
  {text: "News", link: "news.html", icon: "N"},
  {text: "About", link: "about.html", icon: "A"},
  {text: "Sponsors", link: "sponsors.html", icon: "S"},
  {text: "Contact", link: "contact.html", icon: "C"},
];

for(let n=0; n < list.length; n++) {
  let linkMenu = document.createElement("a");
  linkMenu.innerHTML = list[n].text;
  linkMenu.href = list[n].link;
  articleMenu.appendChild(linkMenu);
}