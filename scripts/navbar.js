let articleMenu = document.getElementById("topbar");

const list = [
  {text: "Showcasing", link: "showcase.html"},
  {text: "Events", link: "events.html"},
  {text: "News", link: "news.html"},
  {text: "About", link: "about.html"},
  {text: "Sponsors", link: "sponsors.html"},
];

for(let n = 0; n < list.length; n++) {
  let linkMenu = document.createElement("a");
  linkMenu.innerHTML = list[n].text;
  linkMenu.href = list[n].link;
  articleMenu.appendChild(linkMenu);
}

let linkMenu = document.createElement("a");
linkMenu.innerHTML = "Apply Now!";
linkMenu.href = "apply.html";
linkMenu.classList.add("highlight");
articleMenu.appendChild(linkMenu);