   const refreash = document.getElementsByTagName('button')[0]; 
   var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
   var randomDiceImage = "dice" + randomNumber1 + ".png";
   var randomImageSource = "images/" + randomDiceImage;

   var image1 = document.querySelectorAll("img")[0];
   image1.setAttribute("src" , randomImageSource);

   var randomNumber2 = Math.floor(Math.random()* 6) + 1;

   var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

   document.querySelectorAll("img")[1].setAttribute("src" ,randomImageSource2 );
    
   if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
      celebration();
   }
   else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      celebration();
   }
   else{
    document.querySelector("h1").innerHTML = "Draw!";
   };

   refreash.addEventListener('click', function(){
      location.reload();
   });

   function celebration() {
      for(i=0; i<100; i++) {
         // Random rotation
         var randomRotation = Math.floor(Math.random() * 360);
           // Random Scale
         var randomScale = Math.random() * 1;
         // Random width & height between 0 and viewport
         var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
         var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
         
         // Random animation-delay
         var randomAnimationDelay = Math.floor(Math.random() * 15);
       
         // Random colors
         var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
         var randomColor = colors[Math.floor(Math.random() * colors.length)];
       
         // Create confetti piece
         var confetti = document.createElement('div');
         confetti.className = 'confetti';
         confetti.style.top=randomHeight + 'px';
         confetti.style.right=randomWidth + 'px';
         confetti.style.backgroundColor=randomColor;
         // confetti.style.transform='scale(' + randomScale + ')';
         confetti.style.obacity=randomScale;
         confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
         confetti.style.animationDelay=randomAnimationDelay + 's';
         document.getElementById("confetti-wrapper").appendChild(confetti);
       }
   }

   