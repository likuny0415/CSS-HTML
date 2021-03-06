function loadXMLDoc() {
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        request = new ActiveXObject('MicroSoft.XMLHTTP')
    }

    request.onreadystatechange = function() {
        if (request.status == 200 & request.readyState == 4) {
            var para = document.createElement('p');
            var txt = document.createTextNode(request.responseText);
            para.appendChild(txt)
            document.getElementById('new').appendChild(para)
        }
    }
    // send request to servers
    request.open('GET', 'example.txt', true)
    request.send()
}


// function loadXMLDoc() {
//     var xmlhttprequest;
//     if (window.XMLHttpRequest) {
//         xmlhttprequest = new XMLHttpRequest();
//     } else {
//         xmlhttprequest = new ActiveXObject('Microsoft.XMLHTTP')
//     }
//     xmlhttprequest.onreadystatechange = function() {
//         if (xmlhttprequest.readyState == 4 & xmlhttprequest.status == 200) {
//             var para = document.createElement('p')
//             var txt = document.createTextNode(xmlhttprequest.responseText)
//             para.appendChild(txt)
//             document.getElementById('new').appendChild(para)
//         }
//     }

//     xmlhttprequest.open("GET","example.txt",true);
//     xmlhttprequest.send();
// }

// learning process
// function loadXMLDoc() {
// var xmlhttp;

// if (window.XMLHttpRequest)
//   {// code for IE7+, Firefox, Chrome, Opera, Safari
//   xmlhttp=new XMLHttpRequest();
//   }
// else
//   {// code for IE6, IE5
//   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
//   }
// xmlhttp.onreadystatechange=function()
//   {
//   if (xmlhttp.readyState==4 && xmlhttp.status==200)
//     {
//     document.getElementById("new").innerHTML=xmlhttp.responseText;
//     }
//   }
// xmlhttp.open("GET","example.txt",true);
// xmlhttp.send();
// }