document.addEventListener('DOMContentLoaded',()=>{
    const cardArray = [
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        },
        {
          name: 'fries',
          img: 'images/fries.png'
        },
        {
          name: 'cheeseburger',
          img: 'images/cheeseburger.png'
        },
        {
          name: 'ice-cream',
          img: 'images/ice-cream.png'
        },
        {
          name: 'pizza',
          img: 'images/pizza.png'
        },
        {
          name: 'milkshake',
          img: 'images/milkshake.png'
        },
        {
          name: 'hotdog',
          img: 'images/hotdog.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const display = document.querySelector('.grid')
    const result = document.querySelector('.score')
    const attempts = document.querySelector('.attempts')
    let flippedCardId = []
    let WinningScore= 0;
    let Attempts = 0;

    function showCards(){
        cardArray.forEach((ele,i)=>{
            var card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipCard)
            display.append(card)
        })
    }

    //matching function
    function matching(){
        const cards = document.querySelectorAll('img')
        const firstImage = cardArray[flippedCardId[0]].name
        const secondImage = cardArray[flippedCardId[1]].name
        if(flippedCardId[0]===flippedCardId[1]){
            cards[flippedCardId[0]].setAttribute('src','images/blank.png')
            alert('You Clicked the same card twice!!')
            flippedCardId=[]
            ++Attempts;
        }else if(firstImage === secondImage){
            cards[flippedCardId[0]].setAttribute('src','images/white.png')
            cards[flippedCardId[1]].setAttribute('src','images/white.png')
            cards[flippedCardId[0]].removeEventListener('click',flipCard)
            cards[flippedCardId[1]].removeEventListener('click',flipCard)
            WinningScore = WinningScore+1;
            alert('You!! Guessed it right you got a point')
            flippedCardId=[]
            ++Attempts;
        }else{
            cards[flippedCardId[0]].setAttribute('src','images/blank.png')
            cards[flippedCardId[1]].setAttribute('src','images/blank.png')
            alert('Opps!!! Guessed It Wrong.... Try Again!')
            flippedCardId=[]
            ++Attempts;
        }
        console.log(WinningScore)
        result.textContent = WinningScore
        attempts.textContent = Attempts
        if(WinningScore===(cardArray.length)/2){
            alert('Congratulation!! You won the game')
        }

    }

    // flipcard
    function flipCard(){
        let cardId = this.getAttribute('data-id')
        flippedCardId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        // flippedCard.push(cardArray[cardId].name)
        if(flippedCardId.length===2){
            setTimeout(matching,500)
        }
    }











    showCards()


})