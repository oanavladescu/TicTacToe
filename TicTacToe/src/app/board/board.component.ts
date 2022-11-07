import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  squares!: any[];
  xIsNext!: boolean;
  winner!: string | null;
  moves!: number;
  isTie!: boolean;

  constructor() {}

  // init hook, first method, game start
  ngOnInit(): void {
    this.newGame();
  }

  // init hook behavior
  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true;
    this.moves = 0;
    this.isTie = false;
  }

  // getter for player, determines whose turn it is
  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  // event handler for moves
  makeMove(idx: number) {
    if (!this.squares[idx]) {
      this.squares.splice(idx, 1, this.player);
      this.moves++;
      this.xIsNext = !this.xIsNext;
    }

    if (this.moves !== 9) {
      this.winner = this.calculateWinner();
    } else {
      this.isTie = true;
    }
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return null;
  }
}
