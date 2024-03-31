
var pessoa = {
    nome: "luiz",
    sobrenome: "felipe " 
    };
    
    console.log("ola " + pessoa["nome" ], pessoa["sobrenome"])
    
    
    
    
    var pessoa1 = new Object();
    pessoa1.nome = "luiz"
    pessoa1.sobrenome = "felipe"
    pessoa1.falarNome = function(){
        console.log("nome é: " + this.nome )
    
    }
    
    console.log(pessoa1.falarNome);