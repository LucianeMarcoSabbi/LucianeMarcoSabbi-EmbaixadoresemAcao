const caixaPrincipal = document.querySelector("caixa-principal");
const caixaPerguntas = document.querySelector("caixa-perguntas");
const caixaAlternativas = document.querySelector("caixa-alternativas");
const caixaResultado = document.querySelector("caixa-resultado");

const perguntas =[
      {
     enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, que é capaz de gerar imagens, áudios e vídeos super realistas.Qual o seu sentimento?  ",
     alternativas: [
          "Isso é aterrorizante!",
          "Isso é motivador!",
     ]
    },
     {
     enunciado: "Você se interessa em aprender e tentar dominar essa nova tecnologia?",
     alternativas: [
          "Sim, acho que vai ser importante para o meu futuro!",
          "Não, acredito que não vou precisar disso para nada!",
     ]
    },
    {
     enunciado: "Você se questiona se essa nova tecnologia chamada de Inteligência Artificial poderá ser nociva de alguma forma para os seres humanos?",
     alternativas: [
          "Sim, eu me questiono sempre sobre o futuro!",
          "Não, eu não sou responsável por nada do que os outros fazem!",
     ]
    },
    {
     enunciado: "E caso você decida se atualizar e passe a estudar a IA, você irá utilizá-la para desenvolver seus trabalhos",
     alternativas: [
          "Sim, o tempo todo, para que eu devo pensar, se tem uma tecnologia que vai pensar por mim!",
          "Não, usarei apenas em alguns momentos  e em outros procurarei desenvolver usando aplicativos que dependam mais de mim!",
     ]
    },
    {
     enunciado: "Quem seria o responsável se um aplicativo de IA tomasse uma decisão prejudicial para um ser humano?",
     alternativas: [
          "A pessoa que criou o algoritmo para o aplicativo de IA!",
          "O proprietário do equipamente que passou a utilizar aquele algoritmo! ",
     ]
    },
]
