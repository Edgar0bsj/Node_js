let id = 2;
exports.userId = function(){
    id += 1;
    return id;
}
exports.clientes = [
    {
        id: 1,
        nome: "Edgar",
        sobrenome: "Barbosa",
        email: "edgar@azmail.com"
    },
    {
        id: 2,
        nome: "Luciane",
        sobrenome: "Lima",
        email: "Luci@azmail.com"
    },
];