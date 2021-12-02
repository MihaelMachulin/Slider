const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`
upBtn.addEventListener('click',  () => {changeSlide('up'  )})
downBtn.addEventListener('click',() => {changeSlide('down')})

document.addEventListener('keydown', event => {  // Управление слайдером с клавиатуры
    // console.log(event.key) // event.key - слушает ВСЮ! клавиатуру. Можно в консоли посмотреть, какое событие вызывает каждая кнопка
    if (event.key === 'ArrowUp') changeSlide('up') // ArrowUp/ArrowDown - события стрелка вверх\вниз
    else if (event.key === 'ArrowDown') changeSlide('down')
})

document.addEventListener('wheel', event => {
    console.log(event.deltaY)
     if (event.deltaY >= 100) changeSlide('up')
     else if (event.deltaY <= -100) changeSlide('down')
})

// document.onwheel = event => event.deltaY > 100 ? changeSlide('up') : changeSlide('down')
// На самом деле - при обработке колёсика мыши нужно учитывать скорость прокрутки и кросс-браузерность.
// А иногда уместней будет использовать обработку прокрутки, но в простом виде оно вот-так.

function changeSlide(direction){
    if (direction === 'up'){
        activeSlideIndex++
        if (activeSlideIndex === slidesCount)
        {
            activeSlideIndex = 0
        }
      } else if (direction === 'down'){
             activeSlideIndex--
             if (activeSlideIndex < 0)
             {
                activeSlideIndex = slidesCount - 1
             }
      }

    const  height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}