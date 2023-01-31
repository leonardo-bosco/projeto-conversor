alert("Olá, seja bem-vindo a Nave novamente! 🚀 ");
alert("Para começarmos a nossa viagem , irei precisar de algumas informações suas ok? ");

var nome = prompt ("Escolha a forma que deseja ser chamado(a): ");

var idade = prompt ("Me informe sua idade por favor: ");

var comida = prompt ("Sua comida favorita:");

alert("Ok, já consegui atualizar o sistema da nave, então agora é minha vez de se apresentar. Muito prazer " + nome + " , eu me chamo H-1518 sua IA🧠(Inteligência artificial) da Nave , mas vc pode me chamar de Carla , serei sua companheira nessa sua jornada!😉");

alert("Vi aqui que você gosta de " + comida + " , já estou preparando a sua refeição, vai demorar uns 10 minutinhos , ok?");

alert("Há , já ia me esquecendo , qual nome você gostaria de dar para essa Nave?");

var nave = prompt("Escolha um nome para a Nave: ");

alert("Eu adorei , ficou muito bom !!! ");

alert("Antes de iniciarmos a viagem , eu preciso que vc me informe o quanto de Cosmos você trouxe para evoluirmos a " + nave + " ?")

alert("Perai , você não sabe o que é Cosmos?? 🤨 Quem foi o seu professor na academia de pilotos??? Com toda certeza foi o Leonardo Bosco.... Ele nunca lê o material atualizado no e-mail dele , eu sempre mando com todas as informações , ele fica jogando Lol todo o dia e esquece de fazer suas coisas... 😠 ")

alert("Bom , mas não tem problema , eu estou aqui para te ajudar , então vamos lá.  Cosmos ou (ATOM) é uma criptomoeda utilizada para a transferencias de dados e valores diretamente entre Blockchains.")

alert("E também para a evolução dos equipamentos dessa Nave!!! Olha que legal !!")

alert("Já que você não trouxe , eu tenho algumas nessa gaveta ai em baixo , você pode pegar para você , só me fala quantos Cosmos  tem ai para eu fazer a conversão em Euro, Dolar e Real ")

alert("Porque do Euro,Dolar e Real ?? Bom ... Eu to pensando em comprar um PS5 para a Nave quando voltarmos ao Brasil , para eu poder jogar quando você tiver fora.... Ouvi dizer que o God of War Ragnarök está maravilhoso,   e como eu te dei as minhas moedas , você ta me devendo um PS5 😁 ")

var moedas = prompt("Ensira a quantidade de Cosmos que você tem:")

var valorEmDolar = 13.06;
var valorEmEuro = 12.04;
var valorEmReal = 66.82;
var valorConversao = moedas * valorEmEuro;
var valorConversao2 = moedas * valorEmDolar;
var valorConversao3 = moedas * valorEmReal;

alert ("Então de acordo com a cotação do Euro,Dolar e Real no dia 30/01/2023 , nós temos € " + valorConversao.toFixed(2) + ", $" + valorConversao2.toFixed(2) + " e R$ " + valorConversao3.toFixed(2) + ".");

alert ("Bom , chega de enrolação , isso está parecendo o Enem ......Nossa missão é chegar até a proxima Centauri partindo de uma base perto do Sol(onde estamos), isso vai levar em torno de 4,25 Anos-luz ou 40.208.000.000.000 km , pouco tempo né? .");

var pergunta = prompt ("E você , quantos KM você corre por dia, será que dá para chegar na velocidade da luz??");

var anoLuz = 0.00000000000010570;
var total = anoLuz * pergunta;

alert ("Caramba você correu " + total.toFixed(20) + " Ano-luz , correu nada até agora kkkkkkkkkkk !! ");

alert ("Bom bora focar na missão , para começarmos a nossa jornada preciso saber quantos graus Celsius você quer colocar na Nave??");

var temperatura = prompt ("Temperatura do Ar Condicionado: ");
var fa = 33.80000;
var kel = 274.150;
var tempTotal1 = temperatura *  fa;
var tempTotal2 = temperatura + kel;

alert (" Então a Nave irá ficar em " + temperatura + " ℃ , " + tempTotal1.toFixed(4) + " ℉ , " + tempTotal2 + " K , ok?"  )

alert (" Bom ,  então vamos lá , coloque o cinto de segurança e de um play no vídeo  para começarmos a nossa viagem ")



