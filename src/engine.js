import Observer from './helpers/observer.js'


const observer = new Observer()

const inputField = document.querySelector('.inputField')
const changeText = document.querySelector('.changeText')

const paragraphText = text => changeText.innerHTML = text

observer.subscribe(paragraphText)

inputField.addEventListener('keyup', (event) => {
  const valueData = event.target.value

  observer.notify(valueData, (data) => {
    console.log(observer.acessObservers().forEach(item => item(data)))
  })
})