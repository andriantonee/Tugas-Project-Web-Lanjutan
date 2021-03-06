var h = require('../handlers'),
	router;

router = function(app, express, upload){
	var r = express.Router();

	r.get('/hidden', h.admin.login);
	r.get('/hidden/home', h.admin.home);
	r.get('/hidden/music/category', h.admin.music_category);
	r.get('/hidden/music/list', h.admin.music_list);
	r.get('/hidden/music/list/:category', h.admin.music_list_category);
	r.post('/hidden/authentication', h.admin.authentication);
	r.post('/hidden/logout', h.admin.logout);
	r.post('/hidden/music/category/add', h.admin.music_category_add);
	r.post('/hidden/music/category/delete', h.admin.music_category_delete);
	r.post('/hidden/music/list/add', h.admin.music_list_add);
	r.post('/hidden/music/list/upload', upload.single('image'), h.admin.music_list_upload);
	r.post('/hidden/music/list/delete', h.admin.music_list_delete);
	r.post('/hidden/view', h.admin.view);
	r.post('/hidden/like', h.admin.like);
	r.get('/hidden/sync/list', h.admin.sync_list);
	r.post('/hidden/sync', h.admin.sync);
	app.use(r);	
};

module.exports = router;