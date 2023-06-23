const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const upload = require('../../middleware/multer')

router.get('/gym/create', adminController.createGym)
router.get('/gym/:id/edit', adminController.editGym)
router.get('/gym/:id', adminController.getGym)
router.put('/gym/:id', upload.single('image'), adminController.putGym)
router.delete('/gym/:id', adminController.deleteGym)
router.get('/gym', adminController.getAdminPage)
router.post('/gym', upload.single('image'), adminController.postGym)
router.patch('/users/:id', adminController.patchUser)
router.get('/users', adminController.getUsers)
router.get('/', (req, res) => res.redirect('/admin/gym'))
module.exports = router
