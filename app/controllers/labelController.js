import labelMapper from "../DataMapper/labelMapper.js";

export default{

    async getAllLabels(req,res,next){
        try{
            const labels = await labelMapper.getAll();
            if (!labels){
                throw "Impossible de récupérer les labels."
            }
            res.json(labels);
        }
        catch(error){
            console.log('getAllLabels-error : ',error);
            next(error)
        }
    },

    async getAllArticlesByLabels(req,res,next){
        try{
            const articleWithLabel = await labelMapper.getAllArticles(req.params.id);
            if (!articleWithLabel){
                throw "Impossible de récupérer les articles de ce label."
            }
            res.json(articleWithLabel);
        }
        catch(error){
            console.log('getAllArticlesByLabels-error : ',error);
            next(error)
        }
    }
};