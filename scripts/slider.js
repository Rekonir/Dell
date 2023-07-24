const sliderPositionArray = document.getElementsByClassName('sliderBox__position')
const trackerPositionArray = document.getElementsByClassName('tracker')

const changeSlide = () => {
    let indexCurentSlider = 1
    sliderPositionArray[indexCurentSlider-1].classList.add('sliderBox__position__active')
    trackerPositionArray[indexCurentSlider-1].classList.add('tracker_active')

    setInterval(() => {
        if (indexCurentSlider !== 0) {
          sliderPositionArray[indexCurentSlider-1].classList.remove('sliderBox__position__active')
          sliderPositionArray[indexCurentSlider].classList.add('sliderBox__position__active')

          trackerPositionArray[indexCurentSlider-1].classList.remove('tracker_active')
          trackerPositionArray[indexCurentSlider].classList.add('tracker_active')
        }
        else {            
          sliderPositionArray[sliderPositionArray.length - 1].classList.remove('sliderBox__position__active')
          sliderPositionArray[indexCurentSlider].classList.add('sliderBox__position__active')

          trackerPositionArray[sliderPositionArray.length - 1].classList.remove('tracker_active')
          trackerPositionArray[indexCurentSlider].classList.add('tracker_active')
        }
        indexCurentSlider < (sliderPositionArray.length - 1) ? indexCurentSlider++ : indexCurentSlider = 0
        console.log(indexCurentSlider, sliderPositionArray)
    }, 10000)
}
changeSlide()

