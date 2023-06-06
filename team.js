console.log('ready2')

// const imageFlipElement = document.querySelector('.imgflip')

// const viewportHeightAgain = window.innerHeight || document.documentElement.clientHeight;

//   // icon1
//   window.addEventListener("scroll", function() {
  //     if(teamProfile.getBoundingClientRect().top < viewportHeightAgain / 10 * 5) {
    //         imageFlipElement.classList.add('flipped');
    //     } else {
      //         imageFlipElement.classList.remove('flipped');
      //     }
      //   })
      
      
      
  //     window.addEventListener('scroll', changeImage);
      
  //     function changeImage() {
  //       // Calculate the scroll position
  //       var scrollPosition = window.scrollY;
        
  //       // Define the scroll position to switch images
  //       var switchPosition = 500;
        
  //   // Get the imageFlip container element
  //   var imageFlipElement = document.getElementById('imageFlip');
    
  //   // Check if the current scroll position is greater than the switch position
  //   if (scrollPosition >= switchPosition) {
  //     // Toggle the "flipped" class on the imageFlip container
  //     imageFlipElement.classList.add('flipped');
  //   } else {
  //     imageFlipElement.classList.remove('flipped');
  //   }
  // }
  
  const teamProfile1 = document.querySelector('#team-profile-1')
  const teamProfile2 = document.querySelector('#team-profile-2')
  const headshot1 = document.querySelector('#headshot1')
  const headshot2 = document.querySelector('#headshot2')
  
  
  window.addEventListener("scroll", function() {
    if(teamProfile1.getBoundingClientRect().top < viewportCenter) {
      headshot1.classList.remove('hidden');
      headshot1.classList.add('visible');
    } else {
      headshot1.classList.remove('visible');
      headshot1.classList.add('hidden');
    }
  })

  window.addEventListener("scroll", function() {
    if(teamProfile2.getBoundingClientRect().top < viewportCenter) {
      headshot2.classList.remove('hidden');
      headshot2.classList.add('visible');
    } else {
      headshot2.classList.remove('visible');
      headshot2.classList.add('hidden');
    }
  })