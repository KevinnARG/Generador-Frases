function randomInt(max){
    return Math.floor(Math.random() * max)
}

document.querySelector("#newPhrase").onclick = function(){

    let selected = randomInt(6);
    let phrase;
    let author;

    switch(selected) {

        case 0:
            phrase = "Lo que no sé, tampoco creo saberlo.";
            author = "- Platón";
            break;
        case 1:
            phrase = "No dejes crecer la hierba en el camino de la amistad.";
            author = "- Sócrates";
            break;  
         case 2:
            phrase = "Reyes o gobernantes no son los que llevan cetro, sino los que saben mandar.";
            author = "- Sócrates";
            break;
        case 3:
            phrase = "Temed el amor de la mujer más que el odio del hombre.";
            author = "- Sócrates";
            break;
        case 4:
            phrase = "No hay ningún dolor como una larga vida.";
            author = "- Sofocles";
            break;
        case 5: 
            phrase = "Quién nace mortal, camina hacia la muerte.";
            author = "- Efeso"; 
            break;
        case 6:
            phrase = "Nadie es feliz durante toda su vida.";
            author = "- Eurípides";
            break;
        case 7:
            phrase = "Es peor cometer una injusticia que padecerla porque quién la comete se convierte en injusto y quién la padece no.";
            author = "- Sócrates";
        case 8:
            phrase = "La ciencia humana consiste más en destruir errores que en descubrir verdades.";
            author = "- Sócrates";
        case 9:
            phrase = "La mejor salsa es el hambre.";
            author = "- Sócrates";
            break
        default:
            break;

    }

    document.getElementById("phrase").innerHTML = phrase 
    document.getElementById("author").innerHTML = author

}