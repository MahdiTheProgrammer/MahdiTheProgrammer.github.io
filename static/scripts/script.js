
let x=0;
function namedit(){
    const phone = document.querySelector("#tel");
    const myname = prompt('مقدار جدید را وارد کنید');
    if (!myname) {
      x++;
    } else {
        location.assign('changename?phonekarbar='+phone.textContent+'&newname='+myname+'&fun=name')
    }

}
function fnamedit(){
    const phone = document.querySelector("#tel");
    const myname = prompt('مقدار جدید را وارد کنید');
    if (!myname) {
      x++;
    } else {
        location.assign('changename?phonekarbar='+phone.textContent+'&newname='+myname+'&fun=fname')
    }

}
function phonedit(){
    const phone = document.querySelector("#tel");
    const myname = prompt('مقدار جدید را وارد کنید');
    if (!myname) {
      x++;
    } else {
        location.assign('changename?phonekarbar='+phone.textContent+'&newname='+myname+'&fun=phone')
    }

}
function addressedit(){
    const phone = document.querySelector("#tel");
    const myname = prompt('مقدار جدید را وارد کنید');
    if (!myname) {
      x++;
    } else {    
        location.assign('changename?phonekarbar='+phone.textContent+'&newname='+myname+'&fun=address')
    }

}
function emailedit(){
    const phone = document.querySelector("#tel");
    const myname = prompt('مقدار جدید را وارد کنید');
    if (!myname) {
      x++;
    } else {
        location.assign('changename?phonekarbar='+phone.textContent+'&newname='+myname+'&fun=email')
    }

}
function passedit(){
    const phone = document.querySelector("#tel");
    const myname = prompt('مقدار جدید را وارد کنید');
    if (!myname) {
      x++;
    } else {
        location.assign('changename?phonekarbar='+phone.textContent+'&newname='+myname+'&fun=pass')
    }

}
function linkedit(){
    const phone = document.querySelector("#tel");
    const myname = prompt('مقدار جدید را وارد کنید');
    if (!myname) {
      x++;
    } else {
        location.assign('changename?phonekarbar='+phone.textContent+'&newname='+myname+'&fun=link')
    }

}
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
  