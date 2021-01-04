class Step {
  constructor() {
    this.inProgress = true;
    this.currentTurn = Step.S
    this.squares = new Array(15).fill().map(s => new Square());
  }

  makeMove(i) {
    if (this.inProgress && !this.squares[i].value) {
      this.squares[i].value = this.currentTurn;
    } else if (this.inProgress && this.squares[i].value) {
      this.squares[i].value = null;
    }
  }
}

Step.S = 'S';
Step.M = 'M';
Step.F = 'F';