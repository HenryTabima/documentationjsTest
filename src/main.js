/**
 * Represent a book
 * @constructor
 * @param {string} title - The itle of the book
 * @param {string} author - The author of the book
 */
function Book (title) {
}

/**
 * Adds two numbers together
 * @param {number} first The First Number
 * @param {number} second The second Number
 * @returns {number}
 */
function addTwo (first, second) {
  return frist + second
}

/**
 * area chart generator
 * @returns {chart}
 */
var area = function() {
  /**
   * Run a chart over a given selection
   * @param {Selection} selection
   */
  var chart = function(selection) {
  };
  /**
   * Sets the chart data.
   */
  chart.data = function(_) {
  };
  return chart;
};

/**
 * This method has hierachical params
 * @param {Object} animals different kinds of animals
 * @param {String} animals.fishes number of kinds of fish
 */
function fishesAndFoxes({ fishes, foxes }) {
  return fishes + foxes;
}

/**
 * This is the documentation for the created class, a SelectionEngine
 */
const SelectionEngine = declare(
  null,
  /** @lends SelectionEngine */ {
    /**
     * This method will be parsed as SelectionEngine.expandColsTo
     * because the object that contains it has a @lends tag indicating
     * that it will be lended to the SelectionEngine prototype.
     */
    expandColsTo: function(foo, bar, baz) {}
  }
);

/**
 * @module {Module} utils/math
 * @parent utils
 *
 * The module's description is the first paragraph.
 *
 * The body of the module's documentation.
 */
import _ from 'lodash';

/**
 * @function
 *
 * This function's description is the first
 * paragraph.
 *
 * This starts the body.  This text comes after the signature.
 *
 * @param {Number} first This param's description.
 * @param {Number} second This param's description.
 * @return {Number} This return value's description.
 */
export function sum(first, second){};

/**
 * @property {{}}
 *
 * This function's description is the first
 * paragraph.
 *
 * @option {Number} pi The description of pi.
 *
 * @option {Number} e The description of e.
 */
export var constants = {
  pi: 3.14159265359,
  e: 2.71828
};