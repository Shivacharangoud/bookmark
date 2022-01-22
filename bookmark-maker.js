// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let bookmarksListE = document.getElementById("bookmarksList");
// create and append function
function createAndAppend(name, url) {
    bookmarksListE.classList.remove("d-none");
    let listItemE = document.createElement("li");
    listItemE.classList.add("mb-2")
    let paraE = document.createElement("p");
    let anchorE = document.createElement("a");
    paraE.textContent = name;
    anchorE.href = url;
    anchorE.target = "_blank";
    anchorE.textContent = url;
    listItemE.appendChild(paraE);
    listItemE.appendChild(anchorE);
    bookmarksListE.appendChild(listItemE);


}




//  name change 
let siteNameInputE = document.getElementById("siteNameInput");
let siteUrlInputE = document.getElementById("siteUrlInput");
let siteNameErrMsgE = document.getElementById("siteNameErrMsg");
siteNameInputE.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgE.textContent = "Required*";
    } else {
        siteNameErrMsgE.textContent = "";
    }
})

// url name
let siteUrlErrMsgE = document.getElementById("siteUrlErrMsg");
siteUrlInputE.addEventListener("change", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgE.textContent = "Required*";
    } else {
        siteUrlErrMsgE.textContent = "";
    }
})


// bookmark submission
let bookmarkFormE = document.getElementById("bookmarkForm");
bookmarkFormE.addEventListener("submit", function(event) {
    event.preventDefault();
    if (siteNameInputE.value === "" || siteUrlInputE.value === "") {
        if (siteNameInputE.value === "") {
            siteNameErrMsgE.textContent = "Required*";
        }
        if (siteUrlInputE.value === "") {
            siteUrlErrMsgE.textContent = "Required";
        }
    } else {
        siteNameErrMsgE.textContent = "";
        siteUrlErrMsgE.textContent = "";
        let name = siteNameInputE.value;
        let url = siteUrlInputE.value;
        createAndAppend(name, url);
    }
});