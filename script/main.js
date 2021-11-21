// Efeito scrollReveal

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '150px',
    duration: 1050,
    reset: true
  })
  
  scrollReveal.reveal(
'#main, #highlights, #section ',    {
      interval: 100
    }
  )

  // Typed (maquina de escrever)
  const title = document.querySelector('.title')
  const subTitle = document.querySelector('.sub-title')

  function typeWriter(element) {
    let arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    
    arrayText.forEach((letter, index) => {
        setTimeout(() => element.innerHTML += letter, 75 * index )
    });
  }

  typeWriter(title)
  typeWriter(subTitle)

