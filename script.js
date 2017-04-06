String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};
//If there is no string entered, it will return nothing
function Card(front, back) {
    this.frontVal = front;
    this.backVal = back;

    this.display = function(side) {
        if (side === 0) {
            return this.frontVal;
        } else {
            return this.backVal;
        }
    };
}
//Created a card containing a front and back value, and putting a side of 0 equal to the front, anything else will be assign to the back
var cardsHandle = {
    cards: [],
    cardInd: 0,
    cardButton: document.getElementById("cardButton"),
    cardText: document.getElementById("cardText"),
    cardTPosition: document.getElementById("positionIndex"),
    cardSide: 0,
//Created an object to dry up code, as well as creating variables needed for below functions that are attached
    cardAdd: function(back, front) {
        this.cards.push(new Card(back, front));
    },
    //function used to add(.push) a created card  with a front and back value
    cardUpdate: function() {
        var curCard = this.cards[this.cardInd];
        this.cardText.innerHTML = curCard.display(this.cardSide);
        this.cardTPosition.innerHTML = (this.cardInd + 1) + "/" + this.cards.length;
    },
    //Changes html(.innerhtml) ,specifically card position and card text, and updates the current card side and order of card (poistioning)
    cardFlip: function() {
        this.cardSide = (this.cardSide + 1) % 2;
    },
    cardMove: function(moveBy) {
        this.cardInd += moveBy;
        if (this.cardInd < 0) {
            this.cardInd += this.cards.length;
        }
        this.cardInd = this.cardInd % this.cards.length;

        this.cardSide = 0;
        this.cardUpdate();
    },
    //this function helps with the keystokes for moving up by 1, "(1)" or -1, "(-1)" and staying on the front side
    cardTap: function() {
        this.cardFlip();
        this.cardUpdate();
    }

};

cardsHandle.cardAdd("Alabama", "Montgomery");
cardsHandle.cardAdd("Alaska", "Juneau");
cardsHandle.cardAdd("Arizona", "Phoenix")
cardsHandle.cardAdd("Arkansas", "Little Rock")
cardsHandle.cardAdd("California", "Sacramento")
cardsHandle.cardAdd("Colorado", "Denver");
cardsHandle.cardAdd("Connecticut", "Hartford")
cardsHandle.cardAdd("Delaware", "Dover")
cardsHandle.cardAdd("Florida", "Tallahassee")
cardsHandle.cardAdd("Georgia", "Atlanta")
cardsHandle.cardAdd("Hawaii", "Honolulu")
cardsHandle.cardAdd("Idaho", "Boise")
cardsHandle.cardAdd("Illinois", "Springfield")
cardsHandle.cardAdd("Indiana", "Indianapolis")
cardsHandle.cardAdd("Iowa", "Des Moines")
cardsHandle.cardAdd("Kansas", "Topeka")
cardsHandle.cardAdd("Kentucky", "Frankfurt")
cardsHandle.cardAdd("Louisiana", "Baton Rouge")
cardsHandle.cardAdd("Maine", "Augusta")
cardsHandle.cardAdd("Maryland", "Annapolis")
cardsHandle.cardAdd("Massachusetts", "Boston")
cardsHandle.cardAdd("Michigan", "Lansing")
cardsHandle.cardAdd("Minnesota", "St.Paul")
cardsHandle.cardAdd("Mississippi", "Jackson")
cardsHandle.cardAdd("Missouri", "Jefferson City")
cardsHandle.cardUpdate();
// adding preloaded cards, and calling cardupdate to make changes
var userEnter = function() {
    var nFront = document.getElementById("newFront"),
        nBack = document.getElementById("newBack");
  //created variables for the typed in and submited new cards, and tieing them to a function

    if (nFront.value.isEmpty() || nBack.value.isEmpty())
        return;
//returns with nothing when the new front value or the new back value is left blank
    cardsHandle.cardAdd(nFront.value, nBack.value);
    nFront.value = "";
    nBack.value = "";
    cardsHandle.cardUpdate();
}
//adds new cards with use of the input on webpage
cardsHandle.cardButton.addEventListener('click', function() {
    cardsHandle.cardTap();
});
//using a click event listener to call cardtap and flip the card
Mousetrap.bind('right', function() {
    cardsHandle.cardMove(1);
});

Mousetrap.bind('left', function() {
    cardsHandle.cardMove(-1);
})
//mousetrap js file referenced for this shorthand, the key in quotes followed by a function, in this case to move the card back or foward
