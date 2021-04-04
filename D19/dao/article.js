const Article = require("../entity/article");

module.exports = {

    save: async (data)=>{
        const article = new Article(data);
        return article.save();
    },

    findAllArticles: (data)=>{
        return Article.find({});
    }

}
