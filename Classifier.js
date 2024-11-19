//variáveis para armazenar o nome, e a quantidade de experiência (XP) de um herói:
let heroName = "Lukesky";
let heroExperience = "1";
//Uma estrutura de decisão para apresentar alguma das mensagens:
    switch (heroExperience) {
        case heroExperience <= 1000:
            console.log ("Ferro");
            break;
        case heroExperience >= 1001 && <= 2000:
            console.log ("Bronze");
            break;
        case heroExperience >= 2001 && <= 5000:
            console.log ("Prata");
            break;
        case heroExperience >= 5001 && <= 7000:
            console.log ("Ouro");
            break;
        case heroExperience >= 7001 && <= 8000:
            console.log ("Platina");
            break;
        case heroExperience >= 8001 && <= 9000:
            console.log ("Ascendente");
            break;
        case heroExperience >= 9001 && <= 10000:
            console.log ("Imortal");
            break;
        default:
            console.log ("Radiante");                   
    }
 
//estrutura de repetição:
while ()