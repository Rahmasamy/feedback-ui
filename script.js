const ratingsEls=document.querySelectorAll('.emoj');
const btnele = document.getElementById('btn');
const cont =document.getElementById('container');
let selectedata= "";
ratingsEls.forEach((ratingEL) =>{
  ratingEL.addEventListener("click", (event) => {
     removeActive()
     selectedata=event.target.innerText || event.target.parentNode.innerText;
     //console.log(event.target.innerText|| event.target.parentNode.innerText);
     event.target.classList.add("active");
     //console.log(event);==> pointer refers to the img 
     //console.log(event.target); ==> img 
     //console.log(event.target.parentNode); ==> emoj 
     event.target.parentNode.classList.add("active");
  })
});
btnele.addEventListener("click",()=>{
    if (selectedata!= ""){
        cont.innerHTML=`
        <strong> Thank You </strong>
        <br>
        <br>
        <strong> FeedBack is : ${selectedata} </strong>
        <p> we will use your feedback to improve our customer services 
        `
       
    }
})
function removeActive(){
  ratingsEls.forEach((ratingEL)=> {
    ratingEL.classList.remove("active");
  })
}