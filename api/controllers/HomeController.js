/**
 * HomeController
 *
 * @description :: Server-side logic for managing Connects
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `HomeController.index()`
   */
  index: function (req, res) {
		res.view({
			user: req.user
		});
  },
};
