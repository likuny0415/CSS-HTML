function showPic(whichPic) {
    if (!document.getElementById('placeholder')) return false;

    var source_img = whichPic.getAttribute("href")
    var placeholder = document.getElementById("placeholder")
    placeholder.setAttribute("src", source_img)
    
    if (document.getElementById('description')) {
        var text = whichPic.getAttribute("title")
        var description = document.getElementById("description")
         // change description by nodeValue
          // description.childNodes[0].nodeValue = source_text
    
         // change description by firstChild
         description.firstChild.nodeValue = text
    }
    return true;
}

function countBodyChildren() {
    var source = document.getElementsByTagName('body')[0];
    var len = source.childNodes.length;
   console.log(len)
   
}



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

// addLoadEvent(prepareLinks)

function popUp(url) {
    window.open(url,'popUp', "width=500, height=600")
}

// must add this line

function prepareGallery() {
    if (!document.getElementById) return false;
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById('gallery')) return false;
    var gallery = document.getElementById('gallery');
    var links = gallery.getElementsByTagName('a')

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            showPic(this)
            return false;
        }
    }
}

// window.onload = function() {
//     prepareLinks()
//     prepareGallery()
// };

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(prepareGallery)
addLoadEvent(prepareLinks)

function testDiv() {
    var testdiv = document.getElementById('testdiv');
    testdiv.innerHTML = 'Content created by innerHTML'
}

addLoadEvent(testDiv)

function createChild() {
    var para = document.createElement('p')
    var text = document.createTextNode('New node created by createElement')
    para.appendChild(text)
    var testdiv = document.getElementById('testdiv')
    testdiv.appendChild(para)
}

addLoadEvent(createChild)

// insert a new element after targetElement
function insertAfter(newElement, targetElemet) {
    var parent = targetElemet.parentNode;
    if (parent.lastChild == targetElemet) {
        parent.appendChild(newElement)
    } else {
        parent.insertBefore(newElement,targetElemet.nextSibling)
    }
}


function appendGallery() {
    var placeholder = document.createElement('img')
    placeholder.setAttribute('id', 'placeholder')
    placeholder.setAttribute('src', 'images/placeholder.png')
    placeholder.setAttribute('alt', 'my image gallery')
    var description = document.createElement('p')
    var text = document.createTextNode('Choose an image')
    description.appendChild(text)

    var gallery = document.getElementById('gallery')
    // this function do not need gallery as prefix
    // just call it
    insertAfter(placeholder,gallery)
    
}

addLoadEvent(appendGallery)



