const fs = require('fs');
const path = require('path');
let {validationResult} = require('express-validator')
const { loadUsers ,cargarUsers } = require('../dataBase/users/db_usersModule')



module.exports = {
    login:  (req, res) => {
        return res.render('usersLogin')
    },
    
    profile: (req, res) => {
        const users = loadUsers();
        const user = users.find(usuario => usuario.id === +req.params.id);
        return res.render('usersProfile', {
            users,
            
        })
    },
    crearUsers: (req, res) => {
        
        const users = loadUsers();
        res.render('usersRegister',{
            users
        })

        res.redirect('/usersProfile/' + +req.params.id)
},
usersStore: (req, res) => {
    const users = loadUsers();
    const {name,image,usuario,password,repeatPassword,nacimiento,ciudad,domicilio,comprador,vendedor,intereses} = req.body;
    const id = users[users.length - 1].id;

    const nuevoUsers = {
        id : id + 1,
        ...req.body,
        name: name.trim(),
        usuario : usuario.trim(),
        password : password.trim(),
        repeatPassword : repeatPassword.trim(),
        nacimiento,
        ciudad,
        domicilio,
        comprador,
        vendedor,
        intereses,
        image : req.file ? req.file.filename : "default-image.png"
    }

    const usersNuevo = [...users,nuevoUsers];

    cargarUsers(usersNuevo)

    return res.redirect('usersProfile')
},
cambiarUsers: (req, res) => {
    const users = loadUsers();
    const {id} = req.params;
    const {name, usuario,password,repeatPassword,nacimiento,ciudad, domicilio, comprador, vendedor, intereses, imagen} = req.body;

    const usersModificados = users.map(user => {
        if (user.id === +id ){
            return {
                id : user.id,
                name: name.trim(),
                usuario : usuario.trim(),
                password : password.trim(),
                repeatPassword : repeatPassword.trim(),
                nacimiento,
                ciudad,
                domicilio,
                comprador,
                vendedor,
                intereses,
                imagen
            }
        }
        return user
    })
},

editarUsers: (req, res) => {
    const users = loadUsers();
    const user = users.find(user => user.id === +req.params.id);
    return res.render('users-editar-form',{
       user
}
    )
},
removerUsers : (req, res) => {
    const users = loadUsers();

    const usersModificados = users.filter(user => user.id !== +req.params.id )
    cargarUsers(usersModificados);
    
    return res.redirect('/usersProfile')

}

}
