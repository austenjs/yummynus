a = document.querySelectorAll('.starShown')

console.log('kontol')

for (i = 0 ; i < a.length; i++){
  if (a[i].textContent ==='5'){
    a[i].textContent = `★★★★★`;
  }
  else if(a[i].textContent ==='4'){
    a[i].textContent = `☆★★★★`;
  }
  else if(a[i].textContent ==='3'){
    a[i].textContent = `☆☆☆★★★`;
  }
  else if(a[i].textContent ==='2'){
    a[i].textContent = `☆☆☆★★`;
  }
  else if(a[i].textContent ==='1'){
    a[i].textContent = `☆☆☆☆★`;
  }
}