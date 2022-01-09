function Deck() {
  const deck = []
  for (let color of ["R", "G", "Y", "B"]) {
    for (let number of ["1","2","3","4","5","6","7","8","9"]) {
      deck.push(color + number)

    }
    for (let special of ["skip", "rev", "D2"]) {
      deck.push(color + special)
      
    }
  }
  for (let wild in [1,2,3,4]){
    deck.push("W")
    deck.push("WD4")
  }
  return deck;

}

export default Deck;
