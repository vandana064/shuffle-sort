var displayArr = [];

    document.querySelector('.num-suffle').addEventListener('click', shuffle);
    document.querySelector('.num-sort').addEventListener('click', sort);

    var toAdd = document.createDocumentFragment();
   for(var i=0; i < 9; i++){
   var newDiv = document.createElement('div');
   var newSpan = document.createElement('span');
   
   newDiv.id = 'c'+i;
   newDiv.className = 'cell';
   newSpan.className ='span-cell';
   newSpan.innerHTML = i+1;
   newDiv.appendChild(newSpan);
   displayArr.push(i+1);
   toAdd.appendChild(newDiv);
   }

document.getElementById('grid-temp').appendChild(toAdd);
 


function shuffle() {
    for (let i = displayArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [displayArr[i], displayArr[j]] = [displayArr[j], displayArr[i]];
    }
    rearrangeNum();
}

function sort(){
    displayArr = displayArr.sort(function(a,b){return a - b});
    rearrangeNum();
}

function rearrangeNum(){
    let c = document.getElementById("grid-temp").childNodes;
for(var i=0; i < displayArr.length; i++){
 c[i].childNodes[0].innerHTML=displayArr[i];
}

}
