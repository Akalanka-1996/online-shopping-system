 var i = 0; 
  var images = [];
  var time = 3000;

  
  images[0] = './images/bestseller1.jpg';
  images[1] = './images/bestseller2.jpg';
  images[2] = './images/bestseller3.jpg';
  images[3] = './images/bestseller1.jpg';

  
  function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }

    setTimeout("changeImg()", time);
  }

  window.addEventListener('scroll',function(){
            const header = document.querySelector('header');
            header.classList.toggle("sticky", window.scrollY > 0);
          });