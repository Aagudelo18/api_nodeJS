const {Router} = require('express')

const router = Router()
//se define despues de crear el controllador
//importar metodos del controlador
const{login}=require('../controllers/auth')

router.post('/login', login)




module.exports = router
