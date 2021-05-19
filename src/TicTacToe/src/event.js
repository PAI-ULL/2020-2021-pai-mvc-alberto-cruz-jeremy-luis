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
 * @description Event class for Tik Tac Toe code.
 * The event class will be useful to control the interaction actions of the
 * user.
 */

'use strict';

/**
 * @class
 * @description Event class
 */
export class Event {
  /**
   * @constructor
   * @description Event constructor initialize an empty array to keep
   * listener events.
   */
  constructor() {
    this.listeners = [];
  }

  /**
   * @method addListener
   * @description Insert a function param into the listener array.
   * @param {function} listener is the function given
   */
  addListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * @method trigger
   * @description Take params that will be passed
   * to function that is contained in the listener array.
   * @param {object} params data params
   */
  trigger(params) {
    this.listeners.forEach((listener) => {
      listener(params);
    });
  }
}
