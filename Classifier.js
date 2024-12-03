//variáveis para armazenar o nome, e a quantidade de experiência (XP) de um herói:
let heroName = "Lukesky";
let heroExperience = 999;
let nivel = " ";
//A estrutura de repetição enquanto a experiência for menor que 10999:
while (heroExperience < 11000) {                             
//Uma estrutura de decisão para verificar o nível do herói:
    switch (true) {
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
// Incremento para evitar loop infinito:
heroExperience += 1000; 
}