const form = document.querySelector('form')
const userInput = document.querySelector('#input')
const result = document.querySelector('#result')
const error = document.querySelector('#error')
const loader = document.querySelector('.loader');

const getEightBallAnswer = async (userQuestion) => {
  try{
     
    if(userQuestion.length === 0){
      return errorMessage("Please enter a question")
    }else if(userQuestion[userQuestion.length -1] !== '?'){
      return errorMessage('Your question must end with a question mark')
    }
    errorMessage("")
    
    const baseURI = 'https://8ball.delegator.com/magic/JSON/'
    loader.classList.add('show');
    const res = await fetch(baseURI + userQuestion)
    const data = await res.json()
    
    result.textContent = data.magic.answer
    loader.classList.remove('show');
    form.reset()
    }catch(err){
      loader.classList.remove('show');
      return errorMessage('Invalid request')
  }
}

const errorMessage = (msg) =>{
  error.innerHTML = msg
}

form.addEventListener('submit', e => {
  e.preventDefault()
  getEightBallAnswer(userInput.value)
})
