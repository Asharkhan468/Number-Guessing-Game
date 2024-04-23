let input = document.querySelector("#user-input");
let paragarph = document.querySelector(".para");


function userNum() {

  let num = Math.round(Math.random() * 19 + 1 );

  console.log(num);


  if (input.value == "") {
    paragarph.innerHTML = `Please Enter Any Number`;
    
  } else if (num > input.value) {
    paragarph.innerHTML = `Too Low ! Try Again <br>
    <button onclick=" playAgain()" type="button" class="btn btn-danger playagain-btn">
      Try Again
    </button>`;
  }else if(num==input.value){
    paragarph.innerHTML = `Congratulations! You guessed the correct number! 🎉 <br> <button onclick=" playAgain()" type="button" class="btn btn-primary playagain-btn">
      Play Again
    </button>`;  
  }else{
    paragarph.innerHTML = `Too High ! Try Again <br> <button onclick=" playAgain()" type="button" class="btn btn-danger playagain-btn">
      Try Again
    </button>`;
  } 


}


function playAgain(){
  paragarph.innerHTML = "";
   input.value = "";
}


