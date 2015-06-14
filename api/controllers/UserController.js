/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	toto: function(req,res) {
		var toto = 'gregregregregerffffffffrgergergegrergerge';

		console.log(toto);
		console.log(sails.config.i18n.defaultLocale);


		res.send({'toto':toto, 'default' :sails.config.i18n.defaultLocale})

	}
};

