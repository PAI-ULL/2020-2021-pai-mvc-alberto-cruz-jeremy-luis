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

import {TicTacToe} from './controller.js';

/**
 * @function main
 * @description main of the Tic Tac Toe program
 */
function main() {
  const app = new TicTacToe();
  app.run();
}

main();
