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
 * @description Controller class for Tik Tac Toe code.
 * This file implement the Model of that program
 */

'use strict';

import {TicTacToeModel} from './model.js';
import {TicTacToeView} from './view.js';

/**
 * @class
 * @description Model Class
 */
export class TicTacToe {
  /** @private */
  #model;
  #view;
  /**
   * @constructor
   * @description Controller constructor instance model and view classes.
   * Also instance events.
   */
  constructor() {
    this.#model = new TicTacToeModel();
    this.#view = new TicTacToeView();

    this.#view.getPlayEvent().addListener((move) => {
      this.#model.play(move);
    });

    this.#model.getUpdateCellEvent().addListener((data) => {
      this.#view.updateCell(data);
    });
    this.#model.getVictoryEvent().addListener((winner) => {
      this.#view.victory(winner);
    });
    this.#model.getNoWinnerEvent().addListener(() => {
      this.#view.noWinner();
    });
  }

  /**
   * @method run
   * @description Once run is called, print HTML content
   */
  run() {
    this.#view.render();
  }
}
