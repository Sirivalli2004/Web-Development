var cube1 = document.querySelectorAll('.cube1');

var cube2 = document.querySelectorAll('.cube2');

var cube3 = document.querySelectorAll('.cube3');

var cube4 = document.querySelectorAll('.cube4');

var colors = ["red","orange","green","blue","yellow","grey"];

var color = [];

var play1 = document.getElementById("music")
var play2 = document.getElementById("music1")
var play3 = document.getElementById("music2")
for(i=0;i<9;i++){
    cube1[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;
     color[i] = cube1[i].style.backgroundColor;
     cube2[i].style.backgroundColor =  color[i];
}

for(i=9;i<24;i++){
    cube2[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;
}

for(i=0;i<cube3.length;i++){
    cube3[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;
     color[i] = cube3[i].style.backgroundColor;
     cube4[i].style.backgroundColor =  color[i];
}

for(i=cube3.length;i<cube4.length;i++){
    cube4[i].style.backgroundColor = colors[Math.floor(Math.random()*colors.length)] ;
}
document.getElementById('won1').style.display = 'none'
document.getElementById('won2').style.display = 'none'
document.querySelectorAll('.cube1').forEach(item =>{item.style.display = 'none'});

document.querySelectorAll('.cube2').forEach(item =>{item.style.display = 'none'});

document.querySelectorAll('.cube3').forEach(item =>{item.style.display = 'none'});

document.querySelectorAll('.cube4').forEach(item =>{item.style.display = 'none'});

document.getElementById('reload').style.display = 'none';

document.getElementById('playagain').style.display = 'none';

document.getElementById('normalmode').style.display = 'none';

document.getElementById('num').style.display = 'none';

document.getElementById('about1').style.display = 'none';

document.getElementById('about2').style.display = 'none';

cube2[24].style.backgroundColor = 'white';
cube4[35].style.backgroundColor = 'white';
let counterelement = document.getElementById("countertime")
let countercount = 0
let firstmode = null

document.querySelectorAll('.score').forEach(item =>{item.style.display = 'none'})

function startcounter() {
    firstmode = setInterval(function() {
        document.getElementById('reload').style.display = 'block';
        counterelement.textContent = "⌛"+countercount + " sec"
        countercount = countercount + 1
        counterelement.style.backgroundColor = "rgb(21, 196, 15)"
        counterelement.style.color = 'rgb(35, 5, 105) '
        counterelement.style.float = 'right'
        counterelement.style.fontFamily = 'BLACKJACK'
        counterelement.style.fontSize = '50px'
        counterelement.style.font = 'bold'
        counterelement.style.borderStyle = 'solid'
        counterelement.style.borderWidth = '4px'
        counterelement.style.borderRadius = '15px'
        counterelement.style.borderColor = 'rgb(95, 67, 14)'
        counterelement.style.padding = '5px'
        document.getElementById('reload').addEventListener('click',()=>{
            window.location.reload(true);
        })
        document.getElementById('button').style.display = 'none';
        document.getElementById('about1').style.display = 'block';
        
        document.querySelectorAll('.cube1').forEach(item =>{item.style.display = 'block'});
        document.querySelectorAll('.cube2').forEach(item =>{item.style.display = 'block'});
        document.getElementById('num').style.display = 'block';
         
             play1.play();
         
    }, 1000)
     
}

var swap= document.getElementById('swap');

var box = [];

for(i=1;i<=25;i++){
     box[i] = document.getElementById('box'+i);
}

tile1 =  document.getElementById('box'+1);
console.log(tile1.id);
var num = 0;

function check(){
    let arr = [2, 3, 4];
    let e = 1;
    
    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < arr.length; j++) {
            let num = 5 * i + arr[j];
            let firstbackgroundColor = document.getElementById("box" + num).style.backgroundColor;
            let secondbackgroundColor = document.getElementById("tile" + e).style.backgroundColor;
            e++;
        
        if(firstbackgroundColor !== secondbackgroundColor){
            return false;
            
        }
    }
}
            return true;
  
        }  

    document.querySelectorAll('.cube2').forEach(item =>{item.addEventListener('click',function (event){
             
            id = event.target.id;
            
             var tile = document.getElementById(id);
            let i = parseInt(id.substring(3, id.length));

            
                
            if(document.getElementById('box'+i).style.backgroundColor !== "white")
            {
                
                if(i>5 && i <=20){
                    if(document.getElementById('box'+(i+5)).style.backgroundColor == "white"){
                    change(tile,document.getElementById('box'+(i+5))); 
                    num = num +1
                    }
                    if ( (i-1)%5 != 0) {
                    if(document.getElementById('box'+(i-1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-1)));  
                    num = num +1
                        }
                    }
                     if( i%5 != 0 ){
                    if(document.getElementById('box'+(i+1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+1)));
                    num = num +1
                        }
                    }
                    if(document.getElementById('box'+(i-5)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-5)));
                    num = num +1
                    }
                }
            else if (i>=21 && i<=25){
                
                 if(document.getElementById('box'+(i-5)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-5)));
                    num = num +1
                }
                 if(i != 25){
                    if(document.getElementById('box'+(i+1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+1)));
                    num = num +1
                    }
                 }
                 if(i != 21){
                    if(document.getElementById('box'+(i-1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-1)));
                    num = num +1
                }
            }
            }

            else if(i>=1 && i<=5){
                
                if(i != 5){
                     if(document.getElementById('box'+(i+1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+1)));
                    num = num +1
                    }
                }
                if(i != 1){
                    if(document.getElementById('box'+(i-1)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i-1)));
                    num = num +1
                }
                }
                 if(i>=1 && i<=5){
                if(document.getElementById('box'+(i+5)).style.backgroundColor === "white"){
                    change(tile,document.getElementById('box'+(i+5)));
                    num = num +1
                 
                }
            }
            }
        }
        document.getElementById('numberofmoves').innerText = num; 
        if(Boolean (check())){
            document.querySelectorAll('.cube2').forEach(item =>{item.style.display = 'none'  })
            document.querySelectorAll('.cube1').forEach(item =>{item.style.display = 'none'  })
            document.getElementById('won1').style.display = 'block';
            document.getElementById('won1').innerText = '🥳️Congrats you won the Easy mode  Play Normal mode🥳️';
            clearInterval(firstmode);
            document.querySelectorAll('.score').forEach(item =>{item.style.display = 'block'})
            document.getElementById('normalmode').style.display = 'block';
            var totalscore = Math.round(10000 * (1/countercount) + 1000 * (1/num)) ;
            document.getElementById('score').innerText = "💫TOTAL SCORE :" + totalscore;
            play1.pause();
            play2.play();
            
            if(localStorage.getItem("best") == null){
                localStorage.setItem("best",totalscore)
                 var highscore = localStorage.getItem("best")
                console.log('hello')
                document.getElementById('highscore').innerText = "🌟BEST SCORE :" + highscore
            }
            else if(totalscore > localStorage.getItem('best')){
                 localStorage.setItem("best",totalscore)
                 var highscore = localStorage.getItem("best")
                 document.getElementById('highscore').innerText = "🌟BEST SCORE :" + highscore
            }
            else{
                var highscore = localStorage.getItem("best")
                console.log('hi')
                document.getElementById('highscore').innerText ="🌟BEST SCORE :" +  highscore
            }
           
        } 
    }
    )
    }
    )
      
    

    function check(){
        let arr = [2, 3, 4];
        let e = 1;
        
        for (let i = 1; i <= 3; i++) {
            for (let j = 0; j < arr.length; j++) {
                let num = 5 * i + arr[j];
                let firstbackgroundColor = document.getElementById("box" + num).style.backgroundColor;
                let secondbackgroundColor = document.getElementById("tile" + e).style.backgroundColor;
                e++;
            
            if(firstbackgroundColor !== secondbackgroundColor){
                return false;
                
            }
        }
    }
                return true;
      
            }  
function change(box2,box3){
    swap.style.backgroundColor = box2.style.backgroundColor ;
    box2.style.backgroundColor = box3.style.backgroundColor;
    box3.style.backgroundColor = swap.style.backgroundColor;
}
let secondcounterelement = document.getElementById("secondcountertime")
let secondcountercount = 0
let secondmode = null

function secondcounter() {
    secondmode = setInterval(function() {
        document.getElementById('won1').style.display = 'none';
        secondcounterelement.textContent = "⌛"+secondcountercount + " sec"
        secondcountercount = secondcountercount + 1
        secondcounterelement.style.backgroundColor = "rgb(21, 196, 15)"
        secondcounterelement.style.color = 'rgb(35, 5, 105) '
        secondcounterelement.style.float = 'right'
        secondcounterelement.style.fontFamily = 'BLACKJACK'
        secondcounterelement.style.fontSize = '50px'
        secondcounterelement.style.font = 'bold'
        secondcounterelement.style.borderStyle = 'solid'
        secondcounterelement.style.borderWidth = '4px'
        secondcounterelement.style.borderRadius = '15px'
        secondcounterelement.style.borderColor = 'rgb(95, 67, 14)'
        secondcounterelement.style.padding = '5px'
        document.getElementById('normalmode').style.display = 'none';
        document.getElementById('about2').style.display = 'block';
        document.getElementById('about1').style.display = 'none';
        document.getElementById('numberofmoves').innerText = '';
        document.getElementById('countertime').style.display = 'none';
        document.querySelectorAll('.cube3').forEach(item =>{item.style.display = 'block'});
        document.querySelectorAll('.cube4').forEach(item =>{item.style.display = 'block'});
        document.getElementById('num').style.display = 'block';
        play3.play();
        play2.pause();
       
        document.querySelectorAll('.score').forEach(item =>{item.style.display = 'none'})
        
    }, 1000)
     
}
var num1 = 0;
document.querySelectorAll('.cube4').forEach(item =>{item.addEventListener('click',function (event){
   

    id = event.target.id;
    
     var tile = document.getElementById(id);
    let i = parseInt(id.substring(5, id.length));

   
    if(document.getElementById('delta'+i).style.backgroundColor !== "white")
    {
        
        if(i>6 && i <=30){
            if(document.getElementById('delta'+(i+6)).style.backgroundColor == "white"){
            change(tile,document.getElementById('delta'+(i+6))); 
            num1 = num1 +1
            }
            if ( (i-1)%6 != 0) {
            if(document.getElementById('delta'+(i-1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-1)));  
            num1 = num1 +1
                }
            }
             if( i%6 != 0 ){
            if(document.getElementById('delta'+(i+1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+1)));
            num1 = num1 +1
                }
            }
            if(document.getElementById('delta'+(i-6)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-6)));
            num1 = num1 +1
            }
        }
    else if (i>=31 && i<=36){
        
         if(document.getElementById('delta'+(i-6)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-6)));
            num1 = num1 +1
        }
         if(i != 36){
            if(document.getElementById('delta'+(i+1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+1)));
            num1 = num1 +1
            }
         }
         if(i != 31){
            if(document.getElementById('delta'+(i-1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-1)));
            num1 = num1 +1
        }
    }
    }

    else if(i>=1 && i<=6){
        
        if(i != 6){
             if(document.getElementById('delta'+(i+1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+1)));
            num1 = num1 +1
            }
        }
        if(i != 1){
            if(document.getElementById('delta'+(i-1)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i-1)));
            num1 = num1 +1
        }
        }
         if(i>=1 && i<=6){
        if(document.getElementById('delta'+(i+6)).style.backgroundColor === "white"){
            change(tile,document.getElementById('delta'+(i+6)));
            num1 = num1 +1
         
        }
    }
    }
}
    document.getElementById('numberofmoves1').innerText = num1;
    if(Boolean (finish())){
        document.querySelectorAll('.score').forEach(item =>{item.style.display = 'block'})
        document.querySelectorAll('.cube3').forEach(item =>{item.style.display = 'none'  })
        document.querySelectorAll('.cube4').forEach(item =>{item.style.display = 'none'  })
        document.getElementById('won2').style.display = 'block';
        document.getElementById('won2').innerText = '🥳️Congratulations buddy YOU WON THE GAME🥳️';
        document.getElementById('reload').style.display = 'none';
        document.getElementById('playagain').style.display = 'block';
        document.getElementById('playagain').addEventListener('click',()=>{
            window.location.reload(true);
            play2.pause()
        })
        play3.pause();
            play2.play();
        clearInterval(secondmode);
        var totalscore = Math.round(10000 * (1/secondcountercount) + 1000 * (1/num)) ;
                document.getElementById('score').innerText = "💫TOTAL SCORE :" + totalscore;
                
                if(localStorage.getItem("best1") == null){
                    localStorage.setItem("best1",totalscore)
                     var highscore = localStorage.getItem("best1")
                    document.getElementById('highscore').innerText = "🌟BEST SCORE :" + highscore
                }
                else if(totalscore > localStorage.getItem('best1')){
                     localStorage.setItem("best1",totalscore)
                     var highscore = localStorage.getItem("best1")
                     document.getElementById('highscore').innerText ="🌟BEST SCORE :" +  highscore;
                }
                else{
                    var highscore = localStorage.getItem("best1");
                    document.getElementById('highscore').innerText ="🌟BEST SCORE :" +  highscore
                }
    
   }
}
)
}
)

function finish(){
    let arr = [2, 3, 4, 5];
    let c = 1;
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < arr.length; j++) {
            let num = 6 * i + arr[j];
            let firstbackgroundColor = document.getElementById("delta" + num).style.backgroundColor;
            let secondbackgroundColor = document.getElementById("puzzle" + c).style.backgroundColor;
            c++;
        
        if(firstbackgroundColor !== secondbackgroundColor){
            return false;
        }
    }
}
return true;
}   