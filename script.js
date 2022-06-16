let text = document.getElementById('text');
let hr = document.getElementById('hr');
function showData (event){   
var hr = document.createElement('hr');
var element1 = document.createElement('p');
var element2 = document.createElement('p');
var Nik = document.getElementById("Ник").value
var Comment = document.getElementById("Коментария").value
element1.textContent = Nik;
element2.textContent = Comment;
text.append(element1, element2, hr);

}
