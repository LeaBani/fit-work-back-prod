import loginMapper from "../DataMapper/loginMapper.js";
export default{
    /**
     * Vérification de l'authentification
     * @param {*} req 
     * @param {*} res 
     */
    async checkLogin(req,res,next){
        try{
        const loggedUser = await loginMapper.checkLogin(req.body)
        if (!loggedUser){
            throw "Email ou mot de passe incorrect"
        }
        res.json(loggedUser);
        }
        catch (error){
            console.log('checkLogin-error : ',error);
            next(error);
        }
    }
};