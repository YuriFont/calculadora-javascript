
function calculadora(tipo, valor) {

    if(tipo === 'acao'){

      if(valor === 'c'){
        document.getElementById('calculo').value = ''
      }

      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){

        document.getElementById('calculo').value += valor

      }

      if(valor === '='){
        let resultado_calculo = eval(document.getElementById('calculo').value)

        document.getElementById('calculo').value = resultado_calculo
      }

    }else if(tipo === 'valor'){

      document.getElementById('calculo').value += valor

    }


  }
