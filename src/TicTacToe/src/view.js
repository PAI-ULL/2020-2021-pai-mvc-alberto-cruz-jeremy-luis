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
 * @description View class for Tik Tac Toe code.
 * This file implement the View of that program
 */

'use strict';

import {Event} from './event.js';

/**
 * @class
 * @description View Class
 */
export class TicTacToeView {
  /** @private */
  #playEvent; /** createEvent */

  /**
   * @constructor
   * @description create a new Event
   */
  constructor() {
    this.#playEvent = new Event();
  }

  /**
   * @method getPlayEvent
   * @description get the private attribute
   * @return {Event}
   */
  getPlayEvent() {
    return this.#playEvent;
  }

  /**
   * @method render
   * @description Create element in DOM
   */
  render() {
    const board = document.createElement('div');
    board.className = 'board';

    this.cells = Array(9).fill().map((_, i) => {
      const cell = document.createElement('div');
      cell.className = 'cell';

      cell.addEventListener('click', () => {
        this.#playEvent.trigger(i);
      });

      board.appendChild(cell);

      return cell;
    });

    this.message = document.createElement('div');
    this.message.className = 'message';

    document.getElementById('main').appendChild(board);
    document.getElementById('main').appendChild(this.message);
  }

  /**
   * @method updateCell
   * @description Print current player in cell
   * @param {Object} data
   */
  updateCell(data) {
    if (data.player === 'X') {
      const LIGHTORANGECOLOR = '#EEAA66';
      this.cells[data.move].style.backgroundColor = LIGHTORANGECOLOR;
    } else {
      const DARKORANGECOLOR = '#C76F16';
      this.cells[data.move].style.backgroundColor = DARKORANGECOLOR;
    }
    this.cells[data.move].innerHTML = data.player;
  }

  /**
   * @method victory
   * @description Print who win the match
   * @param {string} winner
   */
  victory(winner) {
    this.message.innerHTML = `${winner} wins!`;
  }

  /**
   * @method noWinner
   * @description Print on the HTML if no player wins
   */
  noWinner() {
    this.message.innerHTML = 'There is no winner, try again!';
  }
}
