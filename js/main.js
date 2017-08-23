// placeholder event
let thing = document.getElementById('thing'),
    li = thing.children,
    add = document.getElementById('add'),
    placeHolder = document.getElementById('placeHolder');
function placeHolderCheck(){
    if (thing.children.length !== 0) {
        placeHolder.style.display = 'none';
    }
    else {
        placeHolder.style.display = 'block';
    }
}
placeHolderCheck();
// make every thing has close item
for (let i = 0;i < li.length;i++) {
    let createSpan = document.createElement('span'),
        createCloseNode = document.createTextNode('\u00d7');
    createSpan.className = 'delete';
    createSpan.appendChild(createCloseNode);
    li[i].appendChild(createSpan);
}
// add new item event
function Add(){
    let inputVal = document.getElementById('toDoName').value,
        input = document.getElementById('toDoName');
    if (inputVal === '') {
        input.setAttribute('placeholder','you must be input something!');
    }
    else {
        let createLi = document.createElement('li'),
            node = document.createTextNode(inputVal);
        createLi.appendChild(node);
        thing.appendChild(createLi);
        for (let i = 0;i < li.length;i++) {
            let createSpan = document.createElement('span'),
                createCloseNode = document.createTextNode('\u00d7');
            createSpan.className = 'delete';
            createSpan.appendChild(createCloseNode);
            li[i].appendChild(createSpan);
            input.value = '';
            input.setAttribute('placeholder','');
            placeHolderCheck();
        }
    }
}
// delete click event and animation
function closeListener() {
    let close = document.getElementsByClassName('delete');
    for (let i = 0;i < close.length;i++){
        close[i].onclick = function () {
            let thisThing = this.parentElement;
            thisThing.style.transform = 'rotateX(90deg)';
            setTimeout(function () {
                thisThing.remove();
                placeHolderCheck();
            },500);

        }
    }
}
closeListener();
//list click event
let queryList = document.querySelector('ul');
queryList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('check');
    }
}, false);
