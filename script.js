function insert_Row() {
    //Write your code here
  const btn= document.querySelector('input');
const table= document.querySelector(' #sampleTable');


// btn.addEventListener('click',()=>{
    const newrow=document.createElement('tr');
    for(let i=1;i<=2;i++){
        const newdata= document.createElement('td');
        newdata.textContent= 'New Cell'+i;
        newrow.appendChild(newdata);
    }
    table.prepend(newrow);
// });

  
}
