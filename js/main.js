var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elSpan = document.querySelector(".js-result");
var elSpan2 = document.querySelector(".js-result2")
var elSpan3 = document.querySelector(".js-result3")
var elSpan4 = document.querySelector(".js-result4")
var elWarning = document.querySelector(".js-warning")

elForm.addEventListener('submit', function(e){
   e.preventDefault();

   if(elInput.value <= 0){
      elWarning.textContent = "Aka musbat son kiriting"
      elInput.classList.add('is-invalid')
      elInput.classList.remove('is-valid')
      return;
   }else{
      elWarning.textContent = ''
      elInput.classList.add('is-valid')
      elInput.classList.remove('is-invalid')
   }

   elSpan.textContent = result().toFixed(2);
   elSpan2.textContent = result2().toFixed(2);
   elSpan3.textContent = result3().toFixed(2);
   elSpan4.textContent = result4().toFixed(2);
})

function result(a = 3.6){
   return +elInput.value / a
   
}

function result2(a = 20.1){
   return +elInput.value / a
}

function result3(a = 70){
   return +elInput.value / a
}

function result4(a = 800){
   return +elInput.value / a
}