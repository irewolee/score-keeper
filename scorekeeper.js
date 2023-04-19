const p1Btn = document.querySelector('#p1Btn');
const p2Btn = document.querySelector('#p2Btn');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetBtn = document.querySelector('#resetBtn');
const winningScoreSelect = document.querySelector('#playTo');


let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;


p1Btn.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
    if(p1Score === winningScore){
  isGameOver = true;
  p1Display.classList.add('win')
  p2Display.classList.add("lost")
    }
    p1Display.textContent = p1Score;
  }
})

p2Btn.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
    if(p2Score === winningScore){
  isGameOver = true;
  p2Display.classList.add('win')
  p1Display.classList.add('lost')

}
p2Display.textContent=p2Score;
    }}
)

winningScoreSelect.addEventListener('change', function(){
    winningScore=parseInt(this.value);
    reset();
  })

resetBtn.addEventListener('click', reset);


function reset () {
    isGameOver = false;
    p1Score= 0;
    p2Score= 0;
    p1Display.textContent= p1Score;
    p2Display.textContent= p2Score;
    p1Display.classList.remove('win','lost');
    p2Display.classList.remove('lost','win');
  }