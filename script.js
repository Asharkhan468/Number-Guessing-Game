let input = document.querySelector("#user-input");
let paragarph = document.querySelector(".para");

let attempt=0;
attempt++;

function userNum() {

  let num = Math.round(Math.random() * 10 + 1);

  console.log(num);


  if (input.value == "") {
    paragarph.innerHTML = "Please Enter Any Number";
  } else if (num > input.value) {
    paragarph.innerHTML = `Too Low ! Try Again`;
    input.value = "";
  }else if(num==input.value){
    paragarph.innerHTML = `Congratulations! You guessed the correct number! 🎉`;  
    input.value="";
  }else{
    paragarph.innerHTML = `Too High ! Try Again`;
    input.value = "";
  } 


}


