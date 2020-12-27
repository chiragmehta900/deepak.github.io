//      random word 

var phraseArray = ["Antonio <br> For Music Shop", "Lololi <br> For Candy Shop", "Cocobar <br> For Beer Bar","Teoin <br> For Chatting App","insane","a potato"];

function randomIndex(arr){
  return Math.floor((Math.random() * arr.length));
}

function completeSentence(arr, loc){
  index = randomIndex(arr);
  document.getElementById(loc).innerHTML = arr[index];
}


var backgroundApp = {  
    element: '', 
    colors: [], 
    
    currentColor: '', 
    resultsContainer: '',
    
    randomColor() {
      return '#' + Math.random().toString(16).slice(2, 8);
    },
    
    changeBackground() { 
      var newColor = this.randomColor();
      this.colors.push(newColor);  
      this.setColor(newColor);
    }, 
    
    
    
//      change color on click
    
    setColor(newColor) {
      this.element.style.background = newColor; 
    },
        
    disableClick(className) {
      var elements = document.getElementsByClassName(className);
      var len = elements.length;
  
      for (i = 0; i < len; i++) {
        elements[i].setAttribute('href', 'javascript:void(0)');
      }
    }, 
    
    obj(id) {
      return document.querySelector(id);
    },
       
    
    main() {  
      var $ = this.obj;
      this.disableClick('btn'); 
      
      this.element = $('#random_background');
      this.currentColor = $('#current_color');
      this.resultsContainer = $('#results'); 
      
      // event listeners  
      $('.btn-change').addEventListener('click', this.changeBackground.bind(this)); 
       
            
      // this.changeBackground();  
      this.setColor('#3cb4cd');
    }
  }; 
  
  backgroundApp.main();
  