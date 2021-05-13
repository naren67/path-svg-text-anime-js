// const letters = document.querySelectorAll('#letter path')

// console.log(letters)

// for(i=0;i<letters.length;i++){
//           console.log(`letter${i} : ${letters[i].getTotalLength()}`)
// }

anime({
          targets: '#word path',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutSine',
          duration: 1000,
          delay: function(el, i) { return i * 250 },
          direction: 'alternate',
          loop: false
        });