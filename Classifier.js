//variáveis para armazenar o nome, e a quantidade de experiência (XP) de um herói:
let heroName = "Lukesky";
let heroExperience = "1";
let nivel = true;//posso fazer a variavel receber texto depois de números
//A estrutura de repetição:
while (heroExperience < 10002) {                                                                 //risco de um valor pra cima de 10002 não rodar.
//Uma estrutura de decisão para apresentar alguma mensagem:
    switch (heroExperience) {
        case heroExperience <= 1000:
            nivel = "Ferro";
            console.log ("O Herói de nome " + heroName + " está no nível de " + nivel); 
            break;
        case heroExperience >= 1001 && heroExperience <= 2000:
            nivel = "Bronze";
            console.log ("O Herói de nome " + heroName + " está no nível de " + nivel);
            break;
        case heroExperience >= 2001 && heroExperience <= 5000:
            nivel = "Prata";
        console.log ("O Herói de nome " + heroName + " está no nível de " + nivel);
            break;
        case heroExperience >= 5001 && heroExperience <= 7000:
            nivel = "Ouro";
            console.log ("O Herói de nome " + heroName + " está no nível de " + nivel);
            break;
        case heroExperience >= 7001 && heroExperience <= 8000:
            nivel = "Platina";
            console.log ("O Herói de nome " + heroName + " está no nível de " + nivel);
            break;
        case heroExperience >= 8001 && heroExperience <= 9000:
            nivel = "Ascendente";
            console.log ("O Herói de nome " + heroName + " está no nível de " + nivel);
            break;
        case heroExperience >= 9001 && heroExperience <= 10000:
            nivel = "Imortal";
            console.log ("O Herói de nome " + heroName + " está no nível de " + nivel);
            break; 
        default:
            nivel = "Radiante";
            console.log ("O Herói de nome " + heroName + " está no nível de " + nivel);                   
    }
}