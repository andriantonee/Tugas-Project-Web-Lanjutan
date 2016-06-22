var h = require('../handlers'),
	router;

router = function(app, express){
	var r = express.Router();

	r.get('/hidden', h.admin.login);
	r.get('/hidden/home', h.admin.home);
	r.post('/hidden/authentication', h.admin.authentication);
	r.post('/hidden/logout', h.admin.logout);
	app.use(r);	
};

module.exports = router;