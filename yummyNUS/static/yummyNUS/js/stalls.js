//Search Bar

document.getElementById('searchBar').addEventListener('input',filter);

// differ = function(word1,sent){
//   if (word1.length > sent.length){ // phrase is longer than the text
//     return false;
//   }
//   if (word1.length == 1 & sent.indexOf(word1) === -1){
//     return false;
//   }
//   if (word1.length == 2 & sent.indexOf(word1) === -1){
//     return false;
//   }
//   let difference = 0;
//   let word = '';
//   for (let i = 0 ; i <word1.length ; i++){
//     if (difference >= 2){
//       return false;
//     }
//     if(word1[i])
//     word+= word1[i]
//     if (sent.indexOf(word) === -1){ // word doesnt exist inside the container
//       difference++;
//       word = word.slice(0,i)
//       if (word === ''){
//         word = sent[0]
//       }
//       else{
//       const indInSent = sent.indexOf(word)
      
//       word = sent.slice(indInSent,indInSent+i+1)
//       }
//     }
//   }
//   return true
// } 

function filter(e){
  value = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(stall){
    const item = stall.childNodes[1].textContent;
    console.log(stall.childNodes[1].classList)
    if(item.toLowerCase().indexOf(value) != -1 && stall.childNodes[1].classList.value.indexOf('hide')=== -1){ //Phrase in the name of the stall
      stall.style.display = 'block';
    } 
    // else if(differ(value,item.toLowerCase()) && stall.childNodes[1].classList.value.indexOf('hide')=== -1){
    //   stall.style.display = 'block';
    // }
    else {
      stall.style.display = 'none';
    }
  });
}



function checkBox(name){
  if (name !== 'YIH'){
    if(document.getElementById(`${name}`).checked){
      document.querySelectorAll('.collection-item').forEach(function(stall){
        const item = stall.childNodes[1].classList.value;
        if(item.indexOf(name) !== -1 && stall.style.display !== 'none'){ 
          stall.style.display = 'block';
        } 
        else {
          stall.style.display = 'none';
          if (stall.childNodes[1].classList.value.indexOf('hide') !== -1){
            stall.childNodes[1].classList+= ' hide'
          }
        }
      });
    }
  }
  else{
    if(document.querySelector('#YIH').checked){
      document.querySelectorAll('.collection-item').forEach(function(stall){
        const item = stall.childNodes[1].classList.value;
        if(item.indexOf("Yusof") !== -1 && stall.style.display !== 'none'){
          stall.style.display = 'block';
        } 
        else {
          stall.style.display = 'none';
          if (stall.childNodes[1].classList.value.indexOf('hide') !== -1){
            stall.childNodes[1].classList+= ' hide'
          }
        }
      });
    }
  }
}


document.querySelector('#YIH').addEventListener('click',checkAll)
document.querySelector('#U-town').addEventListener('click',checkAll)
document.querySelector('#Asian').addEventListener('click',checkAll)
document.querySelector('#Western').addEventListener('click',checkAll)
document.querySelector('#Vegetarian').addEventListener('click',checkAll)
document.querySelector('#Noodle').addEventListener('click',checkAll)
document.querySelector('#Drinks').addEventListener('click',checkAll)

function checkAll(e){
  tickBoxes = document.querySelectorAll('input')
  var ticked = false;
  document.querySelectorAll('.collection-item').forEach(function(stall){
    stall.style.display = 'block';
    if (stall.childNodes[1].classList.value.indexOf('hide') !== -1){
      stall.childNodes[1].classList.remove('hide')
    }
  })
  for (let i = 1 ; i < tickBoxes.length ; i++){
    if (tickBoxes[i].checked){
      ticked = true;
      checkBox(tickBoxes[i].id);
    }
  }
  if (!ticked){
    document.querySelectorAll('.collection-item').forEach(function(stall){
          stall.style.display = 'block';
          if (stall.childNodes[1].classList.value.indexOf('hide') !== -1){
            stall.childNodes[1].classList.remove('hide')
          }
    })
  }
}

function checkAll(e){
  tickBoxes = document.querySelectorAll('input')
  var ticked = false;
  document.querySelectorAll('.collection-item').forEach(function(stall){
    stall.style.display = 'block';
    if (stall.childNodes[1].classList.value.indexOf('hide') !== -1){
      stall.childNodes[1].classList.remove('hide')
    }
  })
  for (let i = 1 ; i < tickBoxes.length ; i++){
    if (tickBoxes[i].checked){
      ticked = true;
      checkBox(tickBoxes[i].id);
    }
  }
  if (!ticked){
    document.querySelectorAll('.collection-item').forEach(function(stall){
          stall.style.display = 'block';
          if (stall.childNodes[1].classList.value.indexOf('hide') !== -1){
            stall.childNodes[1].classList.remove('hide')
          }
    })
  }
}


document.querySelectorAll('.list-group-item').forEach(function(stall){
  if(stall.childNodes[1].classList.value.indexOf('Asian') !== -1){
    stall.childNodes[1].childNodes[0].innerText += ' 🍱'
  }
  else if(stall.childNodes[1].classList.value.indexOf('Western') !== -1){
    stall.childNodes[1].childNodes[0].innerText += ' 🍔'
  }
  else if(stall.childNodes[1].classList.value.indexOf('Vegetarian') !== -1){
    stall.childNodes[1].childNodes[0].innerText += ' 🍛'
  }
  else if(stall.childNodes[1].classList.value.indexOf('Drinks') !== -1){
    stall.childNodes[1].childNodes[0].innerText += ' 🥤'
  }
  else if(stall.childNodes[1].classList.value.indexOf('Noodle') !== -1){
    stall.childNodes[1].childNodes[0].innerText += ' 🍜'
  }
  
})