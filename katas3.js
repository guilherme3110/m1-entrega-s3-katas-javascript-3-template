
Exercício 1
Desenvolva uma função chamada xRunning que recebe o array `["x", "-", "-", "-", "-", "-
", "-", "-", "-", "-", "-"]` e deve exibir no console a movimentação do "x" ao longo do
array, de sua posição inicial até a final.

Exemplo:

xRunning(["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
⁠// Deve exibir:
⁠// ["x", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
⁠// ["-", "x", "-", "-", "-", "-", "-", "-", "-", "-", "-"]
⁠// ["-", "-", "x", "-", "-", "-", "-", "-", "-", "-", "-"]
⁠// .....
⁠// ["-", "-", "-", "-", "-", "-", "-", "-", "-", "x", "-"]
⁠// ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "x"]
    function xRunning

Exercício 2

Desenvolva uma função chamada vowelsCounte que recebe um parâmetro:

1. lista, um array de strings

E deve retornar um novo array substituindo as posições das strings por um número representando a contagem de vogais daquelas palavras.

Exemplo:

vowelsCounter(["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]);
⁠// Deve retornar:
⁠// [3, 4, 4, 3, 2, 4]



let frutas = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"]
function vowelsCounter(Lista){
    for( let i = 0; i < Lista.length; i++){

    }
}                   
vowelsCounter()


Exercício 3

Desenvolva uma função chamada stringTripletGroup que recebe um parâmetro:

1. string, sendo uma string representando uma frase.
E deve **retornar** um novo array com esta frase fatiada em 3 em 3 caracteres 
posicionados ao longo do array. Caso a quantidade de letras da última posição seja
 menor que 3, deverá ser completado com espaços vazios.

 stringTripletGroup("Os três mosqueteiros");
 ⁠// Deve retornar:
 ⁠// ["Os ", "trê", "s m", "osq", "uet", "eir", "os "]
    //let arr = texto.split(" ");

    function stringTripletGroup() {
        let texto = "Os três mosqueteiros";
        let arr = [];
            for(let i = 0; i <= texto.length; i++){
                if(arr += texto[i]){
                    
                }
            }
            }
            

        console.log(arr);

    }

 Exercício 4

 Desenvolva uma função chamada dominantPet que recebe um parâmetro:
 1. lista, um array de strings contendo as palavras "dog" ou "cat" escritas sem um padrão definido.
 E deve retornar uma string com o tipo de pet que aparece mais vezes no array, ou 
 seja, o dominante em maiúsculo e com uma exclamação ("CAT!" ou "DOG!"). Caso a
  quantidade dos dois seja igual, deverá retornar a string "DRAW!".



dominantPet(["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"]
⁠// Deve retornar:
⁠// "CAT!"

    function dominanPet() {
        let arr = ["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT"];
        
    }

Exercício 5
// criar uma função essa função tera 2 parametros
 // o primeiro parametro seria uma lista de número
 // o segundo parametro será um número divisor
 // criar variavel de saida para o novo array
 function divisibleList(a, b){
    let output = [];
    for( let i = 0; i < a.length; i++){
        if(a[i] % b == 0){
            output.push(a[i])
        }
    }
    return output;
 }

 Exercício 6 

 Desenvolva uma função chamada trustMeORNot que recebe dois parâmetros: 

 1.bool, sendo um valor booleando true ou false.

 1.numero, sendo um número inteiro positivo.Desenvolva.

 E deve retornar um array com a quantidade de posições passadas por 
 parâmetro e cada uma destas casas preenchido com o valor booleano escolhido pelo parâmetro.


 // criar uma função que receberá dois parametros.
 // o primeiro paramentro e um valor booleando true ou false.
 // o segundo parametro e um número inteiro positivo.
 // criar uma variavel de saida para o novo array.

function trustMeOrNot(a, b) {
    let output = [];
    for(let i = 0; i <= output.length; i++){

        output.push(a[b])
        
        }
    }
    

 

 Exercício 7 


 Desenvolva uma função chamada changeLampStatus que recebe um parâmetro:

 1. lista, um array com somente valores booleanos representando o 
 estado da lâmpada (ligado/desligado)

 E deve retornar um novo array com os valores booleanos de cada posição invertido.

 function changeLampStatus() {
    
 }


 Exercício 8 

 Desenvolva uma função chamada gradeAverage que recebe um parâmetro:

 1. lista, um array com várias números inteiros/float representando as 
  notas de atividades de um aluno (0.0 até 10.0)

  E deve retornar uma string dizendo qual a média destas notas. O valor
   da média deve se limitar a duas casas decimais.


function gradeAverage() {
    
}   

Exercício 9 

Desenvolva uma função chamada canvasDeliveriesPercentage que recebe um parâmetro:

1. lista, um array com vários números inteiros/float representando as 
notas de um aluno (0.0 até 10.0).

Deve retornar uma string dizendo qual a porcentagem sobre o total de 
entregas que o aluno atingiu.

Consideraremos que cada entrega possui o valor de 10.0 pontos, sendo este o máximo.

O valor da porcentagem deve se limitar a duas casas decimais.


function canvasDeliveriesPercentage() {
    
}

Exercício 10

Desenvolva uma função chamada shouldIGo que recebe um parâmetro:


1. lista, um array com várias strings com uma das seguintes letras:
 "R", "Y", "G". Estas letras podem estar em maiúsculo ou minúsculo e 
 representam as cores do semáforo.
 E deve exibir no console um novo array com a conversão destas letras
  para as seguintes palavras:

  "R" = "Stop!"

"Y" = "Attention!"

"G" = "Go!"

Exemplo: 