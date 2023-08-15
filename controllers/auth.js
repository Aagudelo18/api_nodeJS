const Usuario =require ('../models/usuario')
const bcrypt = require ('bcrypt')
const {generarJWT} = require('../helpers/generar-jwt')

async function comparePassword(passwordForm, passworsBD){
    const result = await bcrypt.compare(passwordForm, passworsBD);
    return result;
}

const login = async (req, res) =>{
    const {nombre, password} = req.body 

    const usuarios = await Usuario.findOne((nombre))
    try {
        if (!usuarios){
            return res.status(400).json({
                msg:'correo electronico no encontrado'
            })
        }

        if (!usuarios.estado){
            return res.status(400).json({
                msg:'Usuario inactivo'
            })
        }
        
        resultado = await comparePassword(password,usuarios.password)

        if (resultado== true){
            const token = await generarJWT(usuarios)
            return res.status(200).json({
                //usuarios,
                token:token
            })
        }else {
            return res.status(400).json({
                msg:'la contraseña es incorrecta'
            })
        }
    } catch (error) {
        return res.status(400).json({
            msg:'Apreciado usuario comuniquese con el administrador'  
        })
    }
}

module.exports = {
    login
}