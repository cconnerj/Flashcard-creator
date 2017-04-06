String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

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

var cardsHandle = {
    cards: [],
    cardInd: 0,
    cardButton: document.getElementById("cardButton"),
    cardText: document.getElementById("cardText"),
    cardTPosition: document.getElementById("positionIndex"),
    cardSide: 0,

    cardAdd: function(back, front) {
        this.cards.push(new Card(back, front));
    },
    cardUpdate: function() {
        var curCard = this.cards[this.cardInd];
        this.cardText.innerHTML = curCard.display(this.cardSide);
        this.cardTPosition.innerHTML = (this.cardInd + 1) + "/" + this.cards.length;
    },
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

var userEnter = function() {
    var nFront = document.getElementById("newFront"),
        nBack = document.getElementById("newBack");

    if (nFront.value.isEmpty() || nBack.value.isEmpty())
        return;

    cardsHandle.cardAdd(nFront.value, nBack.value);
    nFront.value = "";
    nBack.value = "";
    cardsHandle.cardUpdate();
}

cardsHandle.cardButton.addEventListener('click', function() {
    cardsHandle.cardTap();
});

Mousetrap.bind('right', function() {
    cardsHandle.cardMove(1);
});

Mousetrap.bind('left', function() {
    cardsHandle.cardMove(-1);
})
