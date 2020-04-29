        const soma = '+'; 
        const sub = '-';
        const multiplicacao = '*';
        const divisao = '/';
        const decimal = '.';
        const igualdade = '=';
        var valida_decimal = false;
        
        var opeSoma = false;
        var opeSub = false;
        var opeDivisao = false;

        var primeiroValor = 0;
        var segundoValor = 0;
        var resultadofinal = 0;

        var tm_nortm = 0;
        var tamanho_menos1 = 0;

        var exeOpen = ''


    function retiraponto(texto, tamanho_menos1, tamanho_normal, decimal){
        console.log('============ESTOU DENTRO DA FUNÇÃO CAPTURA retiraponto================')
        console.log('Que valor é esse? (estou dentro da função retira ponto) ' + texto.substr(tamanho_menos1,tamanho_normal))
        console.log('Sou um valor válido para passar para passar pela condição? ' + (texto.substr(tamanho_menos1,tamanho_normal) == decimal))
    
        if(texto.substr(tamanho_menos1,tamanho_normal) == decimal){

        
            var casasDecimais = texto.substr(0,tamanho_menos1)
            
            console.log('Casas decimais' + casasDecimais)
            console.log('Valor de "texto" ' + texto)
            console.log('Substring ' + texto.substr(0,tamanho_menos1))

            elemento = casasDecimais.concat(numero)

            console.log('CasasDecimais: ' + casasDecimais)
            document.getElementById('resultado').value = elemento

            //TORNA
            valida_decimal = false;
            
        }
        console.log('==================FIM FUNÇÃO CAPTURA retiraponto======================\n')
    }

    function capturaValor1(texto){
        console.log('===============ESTOU DENTRO DA FUNÇÃO CAPTURA VALOR1=================')
        var primeirodigito = ''
        primeirodigito = texto;
        console.log('Qual o primeiro digito em string: ' + primeirodigito)
        primeiroValor = parseFloat(primeirodigito)
        console.log('O valor do primeiro valor dessa equação: ' +  primeiroValor)
        console.log('=====================FIM FUNÇÃO CAPTURA VALOR1=======================\n')
    }

    function capturaValor2(numero){
        console.log('===============ESTOU DENTRO DA FUNÇÃO capturaValor2=================')
        var segundodigito = '';
        var stringquebrada = '';
        var tmstring = 0;
        var mm = '';
        var aa = 1;


        console.log('Qual o valor de entrada' + numero)
        console.log('Que operador é esse: ' + exeOpen)

        segundodigito = primeiroValor + exeOpen

        console.log('Valor da String final é ' + segundodigito)

        stringquebrada = numero.replace(segundodigito,"");
        console.log('string quebrada: ' + stringquebrada)

        segundoValor = parseFloat(stringquebrada)

        console.log('Qual o valor convertido aqui: ' +  segundoValor)
        console.log('=====================FIM FUNÇÃO CAPTURA capturaValor2=======================\n')
    }

    function resultadoIgualdade(exeOpen, primeiroValor, segundoValor){
        console.log('===============ESTOU DENTRO DA FUNÇÃO RESULTADOIGUALDADE=================')

        
        
        if(exeOpen == soma){
            resultadofinal = primeiroValor + segundoValor
            document.getElementById('resultado').value = resultadofinal
        }else if(exeOpen == sub){
            resultadofinal = primeiroValor - segundoValor
            document.getElementById('resultado').value = resultadofinal
        }else if(exeOpen == multiplicacao){
            resultadofinal = primeiroValor * segundoValor
            document.getElementById('resultado').value = resultadofinal
        }else if((segundoValor == 0) && (exeOpen == divisao)){
            console.log('Usuário burro')
            document.getElementById('resultado').value = 'ERRO'
        }else if((segundoValor > 0) && (exeOpen == divisao)){
            resultadofinal = primeiroValor / segundoValor
            document.getElementById('resultado').value = resultadofinal
        }else{
            document.getElementById('resultado').value = 'Erro de operação'
        }
        
        

        console.log('================FIM DENTRO DA FUNÇÃO RESULTADOIGUALDADE==================')
    }

    function capturaOperador(elemento,tamanho_menos1,tamanho_normal){
        console.log('===============ESTOU DENTRO DA FUNÇÃO CAPTURA CAPTURAOPERADOR=================')

        var operador = ''

        var normal = 0;
        var menos1 = 0;

        normal = elemento.length
        menos1 = normal - 1

        operador = elemento.substr(menos1,normal)
        console.log('Quem é o elemento: ' + elemento)
        console.log('O valor do operador dentro da função captura operador é: ' + operador)

        if(operador == soma){
            exeOpen = '+'
        }else if(operador == sub){
            exeOpen = '-'
        }else if(operador == multiplicacao){
            exeOpen = '*'
        }else if(operador == divisao){
            exeOpen = '/'
        }

        console.log('O valor do operador é: ' + exeOpen)

        console.log('=====================FIM FUNÇÃO CAPTURA CAPTURAOPERADOR=======================\n')
    }

    
    function PickAndShow(num){
      
      var tm_normal = 0;
      var tm_normal_1 = 0;

      var elemento = '';

      numero = num.textContent;

      var texto = document.getElementById('resultado').value

        
        if(numero == decimal){
            console.log('=====================SOU UM DECIMAL=======================\n')

            var tamanho_normal = 0;
            var tamanho_menos1 = 0;

            tamanho_normal = texto.length
            tamanho_menos1 = tamanho_normal - 1

            console.log(texto.substr(tamanho_menos1,tamanho_normal))
            console.log('O que devo ser: ' + (texto.substr(tamanho_menos1,tamanho_normal) != soma))

            if((texto.substr(tamanho_menos1,tamanho_normal) != soma) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != sub) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != multiplicacao) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != divisao) &&
              (texto.substr(tamanho_menos1,tamanho_normal) != decimal) &&
              (texto != '')           
            ){
                
                if(valida_decimal == false){
                    console.log('Sou um decimal');
                    elemento = texto.concat(numero);
                    
                    console.log(elemento);
                    document.getElementById('resultado').value = elemento;
                    valida_decimal = true;
                }

            }else{

                var vazio = ''
                elemento = texto.concat(vazio)
                document.getElementById('resultado').value = elemento
            }

        console.log('=======================FIM DECIMAL========================\n')   

        }else if((numero == soma) ||
            (numero == sub) ||
            (numero == multiplicacao) ||
            (numero == divisao)){
                

                var tamanho_normal = 0;
                var tamanho_menos1 = 0;

                tamanho_normal = texto.length
                tamanho_menos1 = tamanho_normal - 1

                console.log('=======================OPERADOR========================\n')  
                if(texto != ''){
                    
                    

                    console.log('SOU UM OPERADOR')
                    console.log('Qual valor já temos: ' + elemento)
                    console.log('Qual o valor de Entrada: ' + texto)
                    

                    if((opeSoma == false) ||
                       (opeSub == false)  ||
                       (opeDivisao == false)){

                    console.log('Número das operacoes o que eu sou: ' + numero)

                    elemento = texto.concat(numero)
                    
                    console.log('Elemento das operacoes o que eu sou: ' + elemento)

                    document.getElementById('resultado').value = elemento

                    retiraponto(texto,tamanho_menos1, tamanho_normal, decimal)

                    capturaValor1(texto)

                    capturaOperador(elemento,tamanho_menos1,tamanho_normal)

                    valida_decimal = false;
                    
                    opeSoma = true;
                    opeSub = true;
                    opeDivisao = true;

                    }
                    
                }else{
                    document.getElementById('resultado').value = ''
                }
                console.log('=======================OPERADOR========================\n')


        }else if((numero == igualdade)){

            console.log('=====================SOU IGUALDADE=======================\n')
            console.log('Sou sinal de igualdade')
            capturaValor2(texto)
            resultadoIgualdade(exeOpen, primeiroValor, segundoValor)
            console.log('=====================IGUALDADE===========================\n')

        }else{
            console.log('=====================SOU UM NÚMERO=======================\n')

            var segundoNumero = '';

            console.log('Sou um numero')

            segundoNumero = document.getElementById('resultado').value
            elemento = segundoNumero.concat(numero);
            console.log('Qual o valor do número ' + elemento)
            document.getElementById('resultado').value = elemento
            console.log('=====================FIM UM NÚMERO=======================\n')
        }

      
    }
