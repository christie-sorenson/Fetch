/**
 *
 * Selects all books and then renders the page with the list.ejs template
 */
var list = module.exports.list = function(req, res) {
  var limit = '';

  if (req.headers['x-book-limit']){
    limit = ' LIMIT ' + parseInt(req.headers['x-book-limit'], 10);
  }

  var hack = [{"id":22,"title":"The Queen of the Tearling","author":"Erika Johansen","publisher":"Harper","price":9.5},{"id":23,"title":"Truthwitch","author":"Susan Dennard","publisher":"Tor Books","price":9.99},{"id":24,"title":"The Alloy of Law","author":"Brandon Sanderson","publisher":"Tor Books ","price":8.99},{"id":25,"title":"The Queen of the Tearling","author":"Erika Johansen","publisher":"Harper","price":9.5},{"id":26,"title":"Truthwitch","author":"Susan Dennard","publisher":"Tor Books","price":9.99},{"id":31,"title":"The Alloy of Law","author":"Brandon Sanderson","publisher":"Tor Books ","price":8.99},{"id":32,"title":"The Queen of the Tearling","author":"Erika Johansen","publisher":"Harper","price":9.5},{"id":34,"title":"The Alloy of Law","author":"Brandon Sanderson","publisher":"Tor Books ","price":8.99},{"id":35,"title":"The Queen of the Tearling","author":"Erika Johansen","publisher":"Harper","price":9.5},{"id":36,"title":"Truthwitch","author":"Susan Dennard","publisher":"Tor Books","price":9.99},{"id":45,"title":"The Queen of the Tearling","author":"Erika Johansen","publisher":"Harper","price":9.5},{"id":46,"title":"Truthwitch","author":"Susan Dennard","publisher":"Tor Books","price":9.99}];
  res.json(hack);
};
