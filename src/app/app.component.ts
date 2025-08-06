import { Component } from '@angular/core';
import { SudokuService, Difficulty } from './sudoku.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Sudoku Planner';
  difficulties: Difficulty[] = ['easy', 'medium', 'hard', 'extreme'];
  selectedDifficulty: Difficulty | null = null;
  puzzle: number[][] | null = null;
  userGrid: number[][] | null = null;
  result: string = '';

  constructor(private sudokuService: SudokuService) {}

  ngOnInit() {
    // Initialization logic can go here
  }

  selectDifficulty(diff: Difficulty) {
    this.selectedDifficulty = diff;
    this.puzzle = this.sudokuService.getPuzzle(diff);
    // Deep copy for user input
    this.userGrid = this.puzzle.map(row => row.map(cell => cell));
    this.result = '';
  }

  onInput(row: number, col: number, event: any) {
    const value = parseInt(event.target.value, 10);
    if (this.userGrid && !isNaN(value) && value >= 1 && value <= 9) {
      this.userGrid[row][col] = value;
    } else if (this.userGrid) {
      this.userGrid[row][col] = 0;
    }
  }

  isEditable(row: number, col: number): boolean {
    return this.puzzle ? this.puzzle[row][col] === 0 : false;
  }

  checkSolution() {
    if (this.userGrid && this.sudokuService.checkSolution(this.userGrid)) {
      this.result = 'Congratulations! Your solution is correct!';
    } else {
      this.result = 'Sorry, the solution is incorrect. Try again!';
    }
  }
}