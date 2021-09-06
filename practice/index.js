var $btn = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time =document.querySelector('#time') ;
var $app = document.querySelector('.wrapper-marks-js');
var $isGame = false;
var $timeHeader = document.querySelector('#time-header');
var $result = document.querySelector('#result-header');
var $resultText = 0;
var $appContent = document.querySelector('#app');
var $appContentId = document.querySelectorAll('.app');


$btn.addEventListener('click',startGame);

function startGame (){
    $timeHeader.classList.remove('hide');
    $result.classList.add('hide');
    $resultText=0;
    document.querySelector('#result').textContent = $resultText;
    $isGame = true;
    if ($isGame && document.querySelector('#game-time').value>0 ){
        var $valueTime = document.querySelector('#game-time').value;
        $time.textContent = $valueTime;
        var interval = setInterval(function (){
            var time = parseFloat($time.textContent);
            if (time<=0){
                clearInterval(interval);
               endGame();
            }else{
                $time.textContent = (time-0.1).toFixed(1); 
            }
        },100);
    
        $btn.classList.add('hide');
        $game.style.backgroundColor = '#fff';
        renderBox();
    }else{
        
    }
}


function renderBox(){
var box = document.createElement('div');
var size = Math.round(Math.random()*(100-20)+20);
var left = Math.round(Math.random()*(207-5)+5);
var top = Math.round(Math.random()*(207-5)+5);

///случайная генерация цвета
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

box.style.height = box.style.width = size+'px';
box.style.position = 'absolute';
box.style.backgroundColor =  getRandomColor();
box.style.top = top+'px';
box.style.left = left+'px';
box.style.cursor = 'pointer';
box.classList.add('box-last');

$game.insertAdjacentElement("afterbegin",box);

if ($isGame){
    box.addEventListener('click',function(){
        box.remove();
        renderBox();
        $resultText+=1;
        document.querySelector('#result').textContent = $resultText;
        });
}else{
    box.remove();
}
}

function endGame(){
    $isGame = false;
    $btn.classList.remove('hide');
    $game.style.backgroundColor = '#ccc';
    $timeHeader.classList.add('hide');
    $result.classList.remove('hide');
    var $hideBox = document.querySelector('.box-last');
    $hideBox.classList.add('hide');
}
 colors=['red','green','blue'];
 colors[0] = '#ff9393' ;
 colors[30] = 'green' ;
 colors[60] = 'blue' ;
 colors[90] = 'red' ;


// вкладки игровые
for (i=0; i<30*4; i+=30){
    var radio = document.createElement('input');
    radio.setAttribute('id','tab-btn-'+i);
    radio.setAttribute('name','tab-btn-radio');
    radio.setAttribute('type','radio');
    radio.classList.add('radio-tbs');
    var mark = document.createElement('label');
    mark.setAttribute('for','tab-btn-'+i);
    mark.classList.add('mark_game');
    mark.style.left = 40+i+'px';
    $app.insertAdjacentElement("afterbegin",mark);
    $app.insertAdjacentElement("afterbegin",radio);
    mark.style.backgroundColor = colors[i];


    radio.addEventListener('change',function(){
        for (i=0; i<4; i++){
            $appContentId[i].classList.remove('show');
        }
       idNumber= this.getAttribute('id');
       var isNumber;
       var Show;
       if (idNumber.length === 9){
        isNumber= idNumber.slice(-2);
        Show= 'app'+isNumber;
       }else if(idNumber.length === 10){
        isNumber= idNumber.slice(-3);
        Show= 'app'+isNumber;
       }
       Show= 'app'+isNumber;
       idContent = document.querySelector('#'+Show);
       idContent.classList.add('show');
       idContent.style.backgroundColor=colors[isNumber.substr(1)];
    });
}


// ---------Game-Two-----------



var $btnTwo = document.querySelector('#start-two');
var $gameTwo = document.querySelector('#game-two');
var $plane = document.querySelector('.plane');
var $spawn = false;
var idInterval;
console.log($spawn);

$btnTwo.addEventListener('click',startGameTwo);

function  startGameTwo (){
    $gameTwo.style.backgroundImage = "url('img/space.jpg')";
    $btnTwo.classList.add('hide');
    $rock= document.querySelector('#rock');
    var go = true;
        document.addEventListener('keydown', function manual(event){
            // console.log('Key: ', event.key);
            // console.log('keyCode: ', event.keyCode);
            // console.log( $plane.style.left);
            if(event.keyCode === 65){
                string=$plane.style.left.substring(0, $plane.style.left.length - 1);
                $plane.style.left = Number(string)-2+'%'; 
                if(Number(string)<=4){
                    $plane.style.left = 4+'%';
                }
               console.log(string);
               console.log(go);
            }else if(event.keyCode === 68){
                string=$plane.style.left.substring(0, $plane.style.left.length - 1);
                $plane.style.left = Number(string)+2+'%'; 
                if(Number(string)>=96){
                    $plane.style.left = 96+'%';
                }
            }else if(event.keyCode === 87){
                string=$plane.style.bottom.substring(0, $plane.style.bottom.length - 1);
                $plane.style.bottom = Number(string)+2+'%'; 
                if(Number(string)>=20){
                    $plane.style.bottom = 20+'%';
                }
            }else if(event.keyCode === 83){
                string=$plane.style.bottom.substring(0, $plane.style.bottom.length - 1);
                $plane.style.bottom = Number(string)-2+'%'; 
                if(Number(string)<=0){
                    $plane.style.bottom = 0+'%';
                }
            }
        });
        
        

        

        function rockdrop(){
            
    function createRock (){
        var rockSide = Math.round(Math.random()*(94-6)+6);
                $rockItem = document.createElement('img');
                $gameTwo.insertAdjacentElement("afterbegin",$rockItem);
                $rockItem.setAttribute('id',"rock"+i);
                rockId= document.querySelector('#rock'+i);
                rockId.style.bottom = 575+'px';
                rockId.style.left = rockSide+'%';
                $rockItem.setAttribute('src',"./img/rock (1).svg");
                $rockItem.classList.add('rock');
            };

            for (i=0; i<=7; i++){
                createRock();
            }
            
            $rockArray=Array.from(document.querySelectorAll('.rock'));
            $rockArray.forEach(rock => {
                time = Math.round(Math.random()*(20-10)+10);
                timeOut = Math.round(Math.random()*(100-50)+50);
                function drop (){
                
                    rock.style.bottom = parseInt(rock.style.bottom)-1+'px';
                    if ( parseInt(rock.style.bottom) <= -53){
                        clearInterval(idInterval);
                        rock.remove();
                        $spawn = true;
                        console.log($spawn);
                    }
                }
                idInterval= setInterval(drop,time);
            });
          if($spawn === true){
            createRock();
            $spawn = false;
            console.log($spawn);
          }
        
        }
        rockdrop();
    }
                
    
