      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');


	var  data= new Firebase("https://radiant-fire-746.firebaseio.com");


	  



  WebFontConfig = {
    google: { families: [ 'Orbitron::latin' ] }
  };


		
	var score = 0;
      var alien = {
      	x: canvas.width/2,
      	y: canvas.height/2
      };

      var x;
      var y;
      var width;
      var height;

      function play() {
      	document.getElementById("play1").style.display = "none";
      	document.getElementById("title").style.display = "none";
      	document.getElementById("instruct").style.display = "none";
      	document.getElementById("leader").style.display = "none";
		  
	context.fillStyle = "red";
	context.font = "14px Orbitron";
	context.textAlign = "left";
	context.textBaseline = "top";
		  
	context.fillText("Score: "+score,canvas.width-100, 5 );

      	navigator.getUserMedia = (navigator.getUserMedia ||
      		navigator.webkitGetUserMedia ||
      		navigator.mozGetUserMedia ||
      		navigator.msGetUserMedia);
		  
		  var colors = new tracking.ColorTracker(['magenta']);
		  var trackerTask = tracking.track('#vid', colors);
		  



      	if (navigator.getUserMedia) {
      		// Request the camera.
      		navigator.getUserMedia(
      			// Constraints
      			{
      				video: true
      			},

      			// Success Callback
      			function(localMediaStream) {
						
					
					var a=0;
					var j=20;
					 var time = window.setInterval(function(){
					  	context.fillText("Time Left: "+j, 10,5);
						setTimeout(bruh, 1000);
						context.clearRect(10, 5, 100, 30);
						context.fillText("Time Left: "+j, 10,5);
						
					}, 850);
					setTimeout(lol, 20000);
					
							  function lol(){
								  context.clearRect(0,0,canvas.width,canvas.height);
								  trackerTask.stop();
								  clearInterval(time);
								  $('#leaders').modal('show');

							  }
							
							


							  function bruh(){
								  j= j-1;
							  }
					
      				var vid = document.getElementById('vid');
      				vid.src = window.URL.createObjectURL(localMediaStream);
				var imageObj = new Image();

				  imageObj.onload = function() {
					context.drawImage(imageObj, alien.x, alien.y,15,15);
				  };
				  imageObj.src = 'monster.png';
      

      				colors.on('track', function(event) {
						
      					if (event.data.length === 0) {
      						
      					} else {
      						event.data.forEach(function(rect) {
      							context.beginPath();
								context.clearRect(x,y,width,height);
      							x =(canvas.width-(rect.x + (rect.width / 2)))-(rect.width/2);
      							y = rect.y;
      							width = rect.width;
      							height = rect.height;
      							context.arc(canvas.width-(rect.x + (rect.width / 2)), rect.y + (rect.height / 2), 3, 0, 2 * Math.PI);
								context.fillStyle = 'red';
     							context.fill();
								hit(canvas.width-(rect.x + (rect.width / 2))-3, rect.y + (rect.height / 2)-3,6,6);
      							context.stroke();
								
      						});
      					}
      				});
      				tracking.track('#vid', colors);

					
					
					function hit(x1,y1, width1, height1){
						if(x1<alien.x + 15
						   && x1+width1 > alien.x && y1< alien.y + 15 && y1+height1 > alien.y ){
								context.clearRect(alien.x,alien.y,15,15);
								alien.x = Math.round( Math.random() * (canvas.width-40)  + 10);
								alien.y = Math.round( Math.random() * (canvas.height-100) + 10);
							score++;
							context.clearRect(canvas.width-100, 5, 100,30);
							context.fillText("Score: "+score,canvas.width-100, 5 );
							if(a%2==1){imageObj.src = "monster.png";}
							if(a%2==0){imageObj.src = "monster05.png";}
								context.drawImage(imageObj, alien.x, alien.y,15,15);
							a++;
								return true;
							
						}
					}

      			},

      			// Error Callback
      			function(err) {
      				// Log the error to the console.
      				console.log('The following error occurred when trying to use getUserMedia: ' + err);
      			}
      		);

      	} else {
      		alert('Sorry, your browser does not support the features necessary for this game. Please download a modern browser such as Google Chrome');
      	}
      }


function sub(){
	var use = document.getElementById('user').value;
	

data.push({
    user_score: score,
	name: use
});
}



