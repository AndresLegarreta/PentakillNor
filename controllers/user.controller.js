const User = require('../models/user.model.js').User;

async function registrarUsuario(req, res){
    const usern = req.body.us;
    const passw = req.body.pass;
    

    try{
    const newUser = await new User({
        username: usern,
        password: passw
    
        }).save();
        res.json({
            obj: newUser
        })
    } catch (err) {
    console.log(err);
    }
    
}

async function login(req, res) {
    const usern = req.body.us;
    const passw = req.body.pass;
    console.log(usern);
    console.log(passw);
  
    try {
      const user = await User.findOne({ username: usern });
      console.log(user);

      if (user.password === passw) {
        res.json({ 
            message: 'login OK',
            username: user.username,
            password: user.password
        });
      }else{
        res.status(401).json({message: 'login ERROR'});
      }

    } catch (err) {
      console.log(err);
    }
  }
  
module.exports = {
    registrarUsuario,
    login
}

