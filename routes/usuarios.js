

const {Router} = require('express')

const router = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{usuarioGet, usuarioPost, usuarioPut, usuarioDelete}=require('../controllers/usuario')
router.get('/', usuarioGet)
router.post('/',usuarioPost )
router.put('/',usuarioPut )
router.delete('/',usuarioDelete )



module.exports = router


