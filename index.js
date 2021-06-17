

let express = require("express");
let handlebars = require("express-handlebars"); // usar templates html
let bodyParser = require("body-parser"); // pegar dados de forms em chamadas POST


let app = express(); // instancia servidor

// config geral
app.listen(8001, () => {
    console.log("ouvindo a porta 8001");
});


// config template engine
app.engine('handlebars', handlebars({default: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static("images"));
  

  




// config body parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// rotas
app.get('/', (req, res) => {
    res.render('form');
});
app.get('/atendimento', (req, res) => {
    res.render('atendimento');
});

app.get('/cadastrofornecedor', (req, res) => {
    res.render('cadastrofornecedor');
});

app.get('/compras', (req, res) => {
    res.render('compras');
});

app.get('/vendas', (req, res) => {
    res.render('vendas');
});


app.get('/tela2', (req, res) => {
    res.render('tela2');
});

app.get('/servicos', (req, res) => {
    res.render('servicos');
});

app.get('/consulta', (req, res) => {
    res.render('consulta');
});


app.post('/servicos', (req, res) => {
let tamanhoGrande = req.body.gender;
let tamanhoMedio = req.body.gender;
let tamanhoPequeno = req.body.gender;
let banhoSim = req.body.gender1;
let banhoNao = req.body.gender1;
let tosaSim = req.body.gender2;
let tosaNao = req.body.gender2;


          // envia resposta
    res.render('servicoresposta', { tamanho: tamanhoGrande,tamanho: tamanhoMedio,tamanho: tamanhoPequeno,
        banho: banhoSim,banho: banhoNao,
        tosa: tosaSim,tosa: tosaNao})

});




app.post('/tela2', (req, res) => {
    ref5.set({
        

    });

});

app.post('/cadastrar', (req, res) => {
    let nomeCliente = req.body.nomeCliente;
    let cpfCliente = req.body.cpfCliente;
    let telCliente = req.body.telCliente;
    



    // envia resposta
    res.render('formresposta', {nome: nomeCliente, cpf: cpfCliente, telefone: telCliente})
});



app.post('/registraratendimento', (req, res) => {
    let cpfCliente = req.body.cpfCliente;
    let idAtendente = req.body.idAtendente;
    let dataAtendimento = req.body.dataAtendimento;
    let descricaoAtendimento = req.body.descricaoAtendimento;

   
    // envia resposta
  res.render('atendimentoresposta', {idcliente: cpfCliente,id_atendente: idAtendente,data_atendimento: dataAtendimento,
     descricao_atendimento: descricaoAtendimento})
       
});





app.post('/cadastrofornecedor', (req, res) => {
    let cnpjFornecedor = req.body.cnpjFornecedor;
    let nomefor = req.body.nome;
    let razaoSocial = req.body.razaoSocial;
    let telefone = req.body.telefone;

    
    res.render('cadastrofornecedorresposta', {cnpj: cnpjFornecedor, nome: nomefor, razaoSocial: razaoSocial,
        telefone: telefone})

});







    app.post('/cadastrarcompras', (req, res) => {
        let cnpjFornecedor = req.body.cnpjFornecedor;
        let dataCompra = req.body.data;
        let idProduto = req.body.idproduto;
        let quantidade = req.body.quantidade;
        let valorUnitario = req.body.valorUnitario;
     
       
         // envia resposta
  res.render('comprasresposta', {cnpjFornecedor: cnpjFornecedor,data_compra: dataCompra,idproduto: idProduto,
    quantidade: quantidade,valor_unitario: valorUnitario})

    });




    app.post('/cadastrarvendas', (req, res) => {
        let cpfCliente = req.body.cpfCliente;
        let dataVenda = req.body.data;
        let idProduto = req.body.idproduto;
        let quantidade = req.body.quantidade;
        let valorUnitario = req.body.valorUnitario;
     
       

         // envia resposta
  res.render('vendasresposta', {cpfCliente: cpfCliente, data_venda: dataVenda, idproduto: idProduto,
    quantidade: quantidade,valor_unitario: valorUnitario})
 

   

});


