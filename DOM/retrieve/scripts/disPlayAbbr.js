addLoadEvent(displayAbbr)

function displayAbbr() {
   var abbreviations = document.getElementsByTagName('abbr');
   if (abbreviations.length < 1) return false;

   var def = new Array();
   for (var i = 0; i < abbreviations.length; i++) {
       var abbr = abbreviations[i];
       var definition = abbr.getAttribute('title');
       var key = abbr.lastChild.nodeValue;
       def[key] = definition
   }

   var dlist = document.createElement('dl');
   for (key in def) {
       var dtitle = document.createElement('dt');
       var dtitle_text = document.createTextNode(key)
       dtitle.appendChild(dtitle_text)

       var ddes = document.createElement('dd');
       var dd_text = document.createTextNode(definition)
       ddes.appendChild(dd_text)

       dlist.appendChild(dtitle)
       dlist.appendChild(ddes)
   }

   
   var head = document.createElement('h2');
   var head_text = document.createTextNode('Abbreviations')
   head.appendChild(head_text)
   document.body.appendChild(head)
   document.body.appendChild(dlist)
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func()
        }
    }
}

