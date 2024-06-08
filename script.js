// selecting the id for content
const countValue=document.querySelector('#selection');

const increement= () => {
    // getting content and converting into integer as .innerText gives string value
    let value= parseInt(countValue.innerText);
    // updating value on increementing
    value=value+1;
    // set the increemented value in innerText
    countValue.innerText= value;
};

const decreement= () => {
    let value= parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText= value;
};