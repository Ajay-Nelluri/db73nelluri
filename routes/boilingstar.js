var express = require('express');
const costume_controller= require('../controllers/costume');
var router = express.Router();
/* GET costumes */
router.get('/', costume_controller.costume_view_all_Page );

router.get('/detail', costume_controller.costume_view_one_Page); 

router.get('/create', costume_controller.costume_create_Page); 
 
router.get('/update', costume_controller.costume_update_Page);

router.get('/delete', costume_controller.costume_delete_Page); 

module.exports = router;