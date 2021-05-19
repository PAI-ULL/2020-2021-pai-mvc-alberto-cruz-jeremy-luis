/**
 * University of La Laguna
 * Computer engineering Degree
 * Interactive application programming
 * Project: Presentation of MVC
 * @author Alberto Cruz Luis
 * @email alu0101217734@ull.edu.es
 *
 * @author Jeremy Manuel Luis Leon
 * @email alu0101244587@ull.edu.es
 *
 * @since 17.May.2021
 * @link
 * @description Model class for Tik Tac Toe code.
 * This file implement the Model of that program
 */

'use strict';

import {Event} from './event.js';

/**
 * @class
 * @description Model Class
 */
export class TicTacToeModel {
  /** @private */
  #board; /** board */
  #currentPlayer; /** current player */
  #finished; /** finish match */
  #updateCellEvent; /** update cell when click */
  #victoryEvent; /** event is dispatch when someone win */
  #noWinnerEvent; /** event is dispatch when no one win */

  /**
   * @constructor
   * @description Initialize an array and fill it.
   * Initialize events and the current player, also if program has finished yet.
   */
  constructor() {
    this.#board = Array(9).fill();
    this.#currentPlayer = 'X';
    this.#finished = false;

    this.#updateCellEvent = new Event();
    this.#victoryEvent = new Event();
    this.#noWinnerEvent = new Event();
  }

  /**
   * @method getUpdateCellEvent
   * @description get event that update cell when click
   * @return {event}
   */
  getUpdateCellEvent() {
    return this.#updateCellEvent;
  }

  /**
   * @method getVictoryEvent
   * @description get event that event is dispatch when someone win
   * @return {event}
   */
  getVictoryEvent() {
    return this.#victoryEvent;
  }

  /**
   * @method getNoWinnerEvent
   * @description get event that is dispatch when no one win
   * @return {event}
   */
  getNoWinnerEvent() {
    return this.#noWinnerEvent;
  }

  /**
   * @method play
   * @description receive they array position
   * @param {number} move is the array position
   * @return {boolean} true if finished, false in other case.
   */
  play(move) {
    if (this.#finished || move < 0 || move > 8 || this.#board[move]) {
      return false;
    }

    this.#board[move] = this.#currentPlayer;
    this.#updateCellEvent.trigger({move, player: this.#currentPlayer});

    this.#finished = this.victory() || this.noWinner();

    if (!this.#finished) {
      this.switchPlayer();
    }

    return true;
  }

  /**
   * @method victory
   * @description create an array with the winner positions.
   * Then check if a current player has win or not.
   * @return {boolean} true if player wins, false in other case.
   */
  victory() {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const victory = winLines.some((line) => this.#board[line[0]] &&
      this.#board[line[0]] === this.#board[line[1]] &&
      this.#board[line[1]] === this.#board[line[2]]);

    if (victory) {
      this.#victoryEvent.trigger(this.#currentPlayer);
    }

    return victory;
  }

  /**
   * @method noWinner
   * @description check every cell and if all cells have been filled and
   * if there are all filled that means there is no winner.
   * @return {Boolean} true if all board is filled, false in other case
   */
  noWinner() {
    const noWinner = this.#board.every((cell) => cell);

    if (noWinner) {
      this.#noWinnerEvent.trigger();
    }

    return noWinner;
  }

  /**
   * @method switchPlayer
   * @description change between current player and next player by convenience
   */
  switchPlayer() {
    this.#currentPlayer = this.#currentPlayer === 'X' ? 'O' : 'X';
  }
}
