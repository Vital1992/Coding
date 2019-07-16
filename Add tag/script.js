const btn = document.querySelector('button');
let i=0;
btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);
  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  pElem.id = i+=1;
  document.body.appendChild(pElem);
  //document.getElementsByTagName("p")[0].textContent = 'This is a newly-added paragraph.'; //changes only the first <p>
});
