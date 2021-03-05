function showPic(whichPic) {
    var source_img = whichPic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", source_img)

    var text = whichPic.getAttribute("title")
    var description = document.getElementById("description")
    // change description by nodeValue
    // description.childNodes[0].nodeValue = source_text
    
    // change description by firstChild
    description.firstChild.nodeValue = text
}

function countBodyChildren() {
    var source = document.getElementsByTagName('body')[0];
    var len = source.childNodes.length;
   console.log(len)
   
}

window.onload = prepareLinks;
function prepareLinks() {
    if (!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName('a')
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('class') == 'popup') {
            links[i].onclick = function() {
                popUp(this.getAttribute('href'));
                return false;
            }
        }
    }
}


function popUp(url) {
    window.open(url,'popUp', "width=500, height=600")
}




