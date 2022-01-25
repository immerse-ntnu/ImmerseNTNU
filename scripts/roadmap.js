
// -------------------
// ----- SET UP ------
// -------------------

// set up eventlisteners by getting all list items (roadmapBoxes)
const roadmapBoxes = document.getElementById('roadmap-list').children;

// And then iterating through them and setting the eventhandler
for (var i=0; i<roadmapBoxes.length; i++){
    roadmapBoxes[i].addEventListener('click', toggle_roadmapBox);
    
    // Toggle the text off initially
    // Does it in js in case we want to remove the functionality, 
    // and now we can simply disable it here
    toggle_image(roadmapBoxes[i].children);
}

// --------------------------
// ----- FUNCTIONALITY ------
// --------------------------

// main eventhandler
function toggle_roadmapBox(){
    // gets the roadmapBox as a liste of the content (children)
    let roadmapBox = this.children;

    // toggles the text
    toggle_image(roadmapBox);
}

// toggler for text
function toggle_image(roadmapBox){
    // acquires the 'image' of the roadmapBox
    let image = roadmapBox[0].children[3];

    // Toogles the text "on" and "off"
    if(image.style.display == 'none'){
        image.style.display = '';
    }
    else{
        image.style.display = 'none';
    }
}


// avstand roadmap mobil
