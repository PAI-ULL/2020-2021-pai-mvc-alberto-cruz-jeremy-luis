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
 * @description skeleton of each one MVC classes. Each class could be name as
 * programmer want, but the principle of how they work has to be in order to
 * the Model Controller View architecture style
 */

'use strict';

/**
 * @class
 */
class Model {
  /**
   * @constructor
   */
  constructor() {}
}

/**
 * @class
 */
class View {
  /**
   * @constructor
   */
  constructor() {}
}

/**
 * @class
 */
class Controller {
  /**
   *
   * @param {Object} controllerProperties
   * @param {Size}  controllerProperties.model
   */
  constructor({model, view}) {
    this.model = model;
    this.view = view;
  }
}

const app = new Controller(new Model(), new View());
app;
