let $ = document

let navAddClass = $.querySelector('.nav_add_class')
let headerTopClass = $.querySelector('.header-top')
let logoElem = $.querySelector('.nav-logo__img')
let funFactsNum = $.querySelectorAll('.funfact-number')


document.addEventListener('scroll', function(){
  if(document.documentElement.scrollTop > 0){
    headerTopClass.classList.add('nav_add_class')
    logoElem.style.width = '10%'
  }else{
    headerTopClass.classList.remove('nav_add_class')
    logoElem.style.width = '12%'
  }
})

funFactsNum.forEach(counter =>{
  counter.innerText = '0'

  const updateCounter = () =>{
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText
    const increament = target / 100

    if(c < target){
      counter.innerText = '${Math.ceil(c + increament)}'
      setTimeout(updateCounter, 1);

    }else{
      counter.innerText = target
    }
  }

  updateCounter()
})
