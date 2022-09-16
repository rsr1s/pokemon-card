
let electric = 0;
let fire = 1;
let grass  = 2;
let water = 3;

let randomplayerfile =  Math.floor(Math.random()*4);
let randomPlayerImageName =  Math.floor(Math.random()*4);
let randomComImage=  Math.floor(Math.random()*4);
let randomComfile =  Math.floor(Math.random()*4);


function comapre(randomComfile,randomComImage){

    function comapre1(){

      let img = `image/images${randomComfile}/images${randomComImage}.jpeg`;

      if (randomplayerfile===electric & randomComfile===water){
              document.getElementById('c1').style.backgroundImage = `url(${img})`;
              document.querySelector('h3').innerHTML='💖 You Wins!';
      }
      else if (randomplayerfile===fire & randomComfile===grass) {
          document.getElementById('c1').style.backgroundImage= `url(${img})`;
          document.querySelector('h3').innerHTML='💖 You Wins!';

      }
      else if (randomplayerfile===grass & randomComfile===water) {
          document.getElementById('c1').style.backgroundImage= `url(${img})`;
          document.querySelector('h3').innerHTML='💖 You Wins!';

      }
      else if (randomplayerfile===water & randomComfile===grass) {
        document.getElementById('c1').style.backgroundImage= `url(${img})`;
        document.querySelector('h3').innerHTML='💖 You lose';
      }
      else if (randomplayerfile===water & randomComfile===fire) {
          document.getElementById('c1').style.backgroundImage= `url(${img})`;
          document.querySelector('h3').innerHTML='💖 You Wins!';
      }
      else if(randomplayerfile===fire & randomComfile===water){
        document.getElementById('c1').style.backgroundImage= `url(${img})`;
        document.querySelector('h3').innerHTML='💔 You Lose!';

      }
      else if(randomplayerfile===grass & randomComfile===fire){
        document.getElementById('c1').style.backgroundImage= `url(${img})`;
        document.querySelector('h3').innerHTML='💔 You Lose!';
      }
      else if(randomplayerfile===water & randomComfile===electric){
        document.getElementById('c1').style.backgroundImage= `url(${img})`;
        document.querySelector('h3').innerHTML='💔 You Lose!';
      }
      else if (randomplayerfile===randomComfile & randomPlayerImageName===randomComImage){
          document.getElementById('c1').style.backgroundImage= `url(${img})`;
          document.querySelector('h3').innerHTML='🤝Draw ';
      }
  };
  comapre1();
};


document.getElementById("button").addEventListener('click',function (){
  // console.log('click');
  let randomcom4 =  Math.floor(Math.random()*4);
  let randomcom5 =  Math.floor(Math.random()*4);

  for(var i = 0; i<4;i++){
    randomPlayerImageName =  Math.floor(Math.random()*4);
    randomplayerfile =  Math.floor(Math.random()*4);
    let img1 = `image/images${randomplayerfile}/images${randomPlayerImageName}.jpeg`;
    document.getElementById('p1').style.backgroundImage= `url(${img1})`;
    comapre(randomcom4,randomcom5);
  }
});

