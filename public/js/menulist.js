
let loadBtn = document.querySelector(".loadMore"); 
let boxList = document.querySelectorAll(".lists");  
let startIndex = 3; 



loadBtn.addEventListener("click",function(){
    
    for(let i = startIndex ; i < startIndex + 3 ; i++){
        boxList[i].style.display = "block";

    }
   
    startIndex = startIndex + 3;

   
    if(startIndex >= boxList.length){
        loadBtn.style.display = "none";
    }
   

})