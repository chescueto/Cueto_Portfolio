    function showAlert() { 
    		var myText = "Somebody once told me the world is gonna roll me"
    		alert (myText);
  			}

  	function updateTime() { 

  			// get all parts of the current time
    		var now = new Date();
    		var hours = now.getHours();
    		var minutes = now.getMinutes();
    		var seconds = now.getSeconds();

    		 // add leading zero
  			if (minutes < 10) { 
  			  minutes = '0' + minutes;
  			}
  			if (seconds < 10) { 
  			  seconds = '0' + seconds;
  			}				

 			 // am/pm
 			 if (hours >= 12 && hours < 24) { 
 			   var timeOfDay = 'pm';
 			 }
 			 else { 
 			   var timeOfDay = 'am'; 
 			 }
				
  			// military to normal time
  			if (hours > 12) { 
  			  hours = hours - 12;
			}

    		// join them together into a character string named "currentTime"
    		var currentTime = hours + ':' + minutes + ':' + seconds + ' ' + timeOfDay;
    
    		// get the clock div 
    		var myClock = document.getElementById('clock');
    
    		// write the currentTime string to the clock div
    		myClock.innerHTML = currentTime;
			}

		function toggleClock() { 
   			 // get clock 
   			 var myClock = document.getElementById('clock');

   			 // get the current value of the display property 
    			var displaySetting = myClock.style.display;

   			 // get the clock button, so we can change what it says 
   			 var clockButton = document.getElementById('clockButton');
				
   			 // toggle the clock and the button text, depending on current state
   			 if (displaySetting == 'block') { 
   			   // clock is visible. hide it
   			   myClock.style.display = 'none';
   			   // change button text
   			   clockButton.innerHTML = 'Show clock';
  			  }
   			 else { 
   			   // clock is hidden. show it 
   			   myClock.style.display = 'block';
   			   // change button text
   			   clockButton.innerHTML = 'Hide clock';
    			}
 			 }