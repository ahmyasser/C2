var express = require('express'),
  router = express.Router(),
  productCtrl = require('../controllers/C2Controller');

  const authentication = require('../controllers/authentication')(router);
  app = express();
	memberCtrl = require('../controllers/MemberController');


//-------------------------------Product Routes-----------------------------------
router.get('/c2/getProducts', productCtrl.getProducts);
router.get('/c2/getProduct/:productId', productCtrl.getProduct);
router.get(
  '/c2/getProductsBelowPrice/:price',
  productCtrl.getProductsBelowPrice
);
router.post('/c2/createProduct', productCtrl.createProduct);
router.patch('/c2/updateProduct/:productId', productCtrl.updateProduct);
router.delete('/c2/deleteProduct/:productId', productCtrl.deleteProduct);


app.use('/authentication' , authentication);

//-------------------------------Member Routes-----------------------------------
router.get('/member/getMembers', memberCtrl.getMembers);
router.post('/member/createMember', memberCtrl.createMember);
router.patch('/member/updateMember/:memberId', memberCtrl.updateMember);
router.delete('/member/deleteMember/:memberId', memberCtrl.deleteMember);

//------------------------------User Routes-----------------------------------


module.exports = router;
