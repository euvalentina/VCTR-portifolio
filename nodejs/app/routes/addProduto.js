module.exports = function(app){
    app.get('/addProduto',function(req, res){
	    res.render('admin/form_add_produto');
    });
};