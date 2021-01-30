const express = require('express');
const router = express.Router();
const blog = require('../controllers/controllers');

router.get('/blogs',blog.getall)
router.post('/create',blog.create);
router.get('/blog/:blogID',blog.getone);
router.put('/update/:blogID',blog.updateone);
router.delete('/delete/:blogID',blog.deleteone);
router.get('/blogsbytitle/:title',blog.getoneTitle);
router.get('/blogsbyauth/:author',blog.getoneAuthor);
router.get('/blogsbydesc/:desc',blog.getoneDesc);


module.exports=router;