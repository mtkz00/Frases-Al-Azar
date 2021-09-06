
let frases = [ 
    {frase:"Considero más valiente al que conquista sus deseos, que al que conquista a sus enemigos, ya que la victoria más dura es la victoria sobre uno mismo. <br> -Aristóteles"}, 
    {frase:"Antes de convencer al intelecto, es imprescindible tocar y predisponer el corazón.<br> -B. Pascal"}, 
    {frase:"No se puede desatar un nudo sin saber cómo está hecho.<br> -Aristóteles"}, 
    {frase:"¿Me preguntas por qué compro arroz y flores? Compro arroz para vivir y flores para tener algo por lo que vivir. <br> -Confucio"},
    {frase:"Lo más difícil de aprender en la vida es qué puente hay que cruzar y qué puente hay que quemar. <br>-B. Russell"},
    {frase:"Podemos imaginarlo todo, predecirlo todo, salvo hasta dónde podemos hundirnos. <br> -E. Cioran"},
    {frase:"Las nuevas opiniones siempre son sospechosas, y normalmente se rechazan, sin más razón que el hecho de no ser comunes.<br> -J. Locke"}, 
    {frase:"La educación genera confianza. La confianza genera esperanza. La esperanza genera paz.<br> -Confucio."}, 
    {frase:"Aprender a dejar ir debe aprenderse antes de aprender a lograr. La vida debe ser tocada, no estrangulada. Hay que relajarse, dejar que suceda, lo demás se desplaza con ella. <br> -Ray Bradbury"}, 
    {frase:"El maestro es la síntesis justa de disposición natural y ejercicio constante.<br> -Protágoras"}, 
    {frase:"Se obtienen buenos resultados poniéndose siempre en el lugar del otro y pensando en lo que uno haría si hubiese sido el otro. <br> -A. C. Doyle"}, 
    {frase:"No es lo que te pasa lo que determina lo lejos que llegarás en la vida; es la forma de manejar lo que te pasa. <br> -Zig Ziglar"}, 
    {frase:"El primer paso de la sabiduría es echar la culpa a todo; el último reconciliarse con todo.<br> -G. C. Lichtenberg"}, 
    {frase:"Pero el sentido oculto de la vida es que la vida no tiene ningún sentido oculto. <br> -F. Pessoa"}, 
    {frase:"Los hombres olvidan siempre que la felicidad humana es una disposición de la mente y no una condición de las circunstancias. <br> -J. Locke"}, 
    {frase:"Es propio de las censuras acreditar las opiniones que atacan. <br> -Voltaire"}, 
    {frase:"La seriedad de un adversario se desarma con la risa y la risa con la seriedad. <br> -Gorgias"}, 
    {frase:"El gran talento procede, más que de los elementos intelectuales y de un refinamiento social superior al de los demás, de la facultad de transmitirlos, de invertirlos. <br> -M. Proust"},
    {frase:"Lo poco que he aprendido carece de valor, comparado con lo que ignoro y no desespero en aprender. <br> -Descartes"}, 
    {frase:"La misma dificultad de vivir puede convertirse en lo único que mantiene vivos a algunos individuos. <br> -A. Polgar"}, 
    {frase:"Es sencillo hacer que las cosas sean complicadas, pero difícil hacer que sean sencillas. <br> -Nietzsche"}, 
    {frase:"Somos como los camaleones, tomamos nuestro tono y el color de nuestro carácter moral de aquellos que están a nuestro alrededor. <br> -J. Locke"}, 
    {frase:"Cualquiera puede enfadarse, eso es algo muy sencillo. Pero enfadarse con la persona adecuada, en el grado exacto, en el momento oportuno, con el propósito justo y del modo correcto, eso, ciertamente, no resulta tan sencillo. <br> -Aristóteles"}, 
    {frase:"Nadie nos salva sino nosotros mismos. Nadie puede y nadie debe. Nosotros mismos debemos recorrer el camino.<br> -Buda"}, 
    {frase:"Para cambiar la vida: comienza inmediatamente. Hazlo ostentosamente. <br> -W. James"}
];

console.log(frases);

function fraseAzar() {
    let azar = Math.floor(Math.random() * frases.length);
    
    return(frases[azar ]);
}

function imprimirFrase(){

    let fraseActual = fraseAzar();

    let hatml = ''

    let fraseDiv = document.getElementById('caja-frase')

    hatml += '<p class="frase">' + fraseActual.frase

    if ('tags' in fraseActual){

        hatml += ' ' + fraseActual.tags.join(', ')
    }

    hatml += '</p>'
    
    fraseDiv.innerHTML = hatml

   backgroundAleatorio()
} 

    function backgroundAleatorio(){

        let numero = Math.floor(Math.random() * 6)

        if (numero == 0) {
            document.body.style.background = 'rgba(22, 22, 22, 0.856)';
        }else if (numero == 1){
            document.body.style.background = '#219E55';
        }else if (numero == 2){
            document.body.style.background = 'rgb(34, 34, 248)'
        }else if (numero == 3){
            document.body.style.background = 'rgb(250, 46, 46)'
        }else if (numero == 4){
            document.body.style.background = 'grey'
        }else if (numero == 5){
            document.body.style.background = 'rgba(161, 26, 161, 0.877)'
        }
    }


document.getElementById('cargar-frase').addEventListener("click", imprimirFrase, false);
