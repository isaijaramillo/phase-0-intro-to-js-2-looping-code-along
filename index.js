

function writeCards(namesArray, eventName) {
    const messagesArray = [];
    
    for (let i = 0; i < namesArray.length; i++) {
      const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
      messagesArray.push(message);
    }
    
    return messagesArray;
  }
  
  function countdown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  function countDown() {
    for (let countup = 0; countup <= 10; countup++) {
      console.log(countup);
    }
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const thankYouMessages = writeCards(names, eventName);
  console.log(thankYouMessages);
  
  countdown(5);
  
  countDown();

