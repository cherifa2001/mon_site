// Commençons par créer une liste contenant toutes les questions :
let qchant = ['Quel artiste est surnommé le "Roi du Rock and Roll" ?', 'Sous quel nom est né Elton John ?', 'Quelle chanson emblématique de Queen commence par les mots "Is this the real life, is this just fantasy" ?', 'De quel pays est originaire le groupe ABBA ?', "Quelle chanson d'Elton John a-t-il interprétée lors des funérailles de la princesse Diana en 1997 ?", "Quel est le titre de la chanson de Bob Marley qui appelle à l'unité et à la paix entre les peuples ?", 'Quelle chanteuse a interprété les chansons "Poker face" et "Born This Way" ?']
// Maintenant on créer une deuxième liste regroupant les listes contenant les options de réponses pour chaque question : [[réponses q1], [réponses q2], ...]
let choix_chant = [["Elton John", "Elvis Presley", "Freddie Mercury", "Jimi Hendrix"], ["Richard Starkey", "Elton John tout simplement", "Reginald kenneth Dwight", "Tom Hanks"], ["Bohemian Rhapsody", "Radio Ga Ga", "Somebody to Love", "Don't Stop Me Now"], ["Royaume-Uni", "Suède", "États-Unis", "Allemagne"], ["Your Song", "Rocket Man", "Candle in the Wind", "Tiny Dancer"], ["One Love/People Get Ready", "No Woman, No Cry", "Redemption Song", "Stir It Up"], ["Taylor Swift", "Ariana Grande", "Madonna", "Lady Gaga"]]

// Pareil pour le quiz sur la cuisine
let qcuisine = ["Quel est l'ingredient principal de la sauce hollandaise ?","Quel est l'ingrédient principal de la sauce béchamel ?", "Quel est le principal ingrédient de la soupe à l'oignon française ?", "A quelle température doit-on cuire le poulet pour qu'il soit considéré comme sur à consommer ?", "Quel est le plat national du Japon", "De quel pays vient la pizza ?", "Qu'appelle-t-on chile ?" ] 
let choix_cuisine = [["Du citron", "Du jaune d'oeuf", "Du beurre", "Du sel"], ["Du beurre", "De la farine", "Du lait", "Du fromage"], ["De la tomate", "Des carotes", "Du poivre", "De l'oignon"], ["1000°C", "180°C", "75°C", "100°C"], ["Les sushis", "Les ramens", "La soupe miso", "Les yakitoris"], ["France", "Canada", "Espagne", "Italie"], ["Les tomates", "Les haricots rouges", "Les piments", "Le maïs"]]

// Pareil pour le cinéma 
let qcine = ["Qui a réalisé le film 'Inception' ?", "Quel acteur a joué le role principal dans 'Forrest Gump' ?","Quel est le premier film de la saga 'Star Wars' (dans l'ordre de sortie des films) ?", "Quelle actrice a rempoté un Oscar pour son role dans 'La La Land' ?", "Quel est le film le plus récompensé aux Oscar de l'histoire ?","Qui a réalisé 'Pulp  Fiction' ?", "Dans quel film la phrase 'May the force be with you' est-elle prononcée pour la première fois ?"]
let choix_cine = [["Christopher Nolan", "Martin Scorsese", "Quentin Tarantino", "Alfred Hitchcock"], ["Tom Holland", "Tom Hanks", "Tom Hardy", "Leonardo DiCaprio"], ["Star Wars: Episode I", "Star Wars: Episode IV", "Star Wars: Episode II", "Star Wars: Episode X"], ["Scarlett Johansson", "Jennifer Lawrence", "Natalie Portman", "Emma stone"], ["Fight Club", "Retour vers le futur", "Le siegneur des anneaux 1", "Titanic"], ["Quentin Tarantino","Christopher Nolan", "Martin Scorsese", "Alfred Hitchcock"], ["Star Wars: Episode II", "Star Wars: Episode I", "Star Wars: Episode IV", "Star Wars: Episode X"]]



let num = 0; //Va servir à afficher la question numéro num
let points = 0; // Compteur de point
let indic = 1; //indicateur numéro question

let message = document.getElementById("message") // Récupère le div de la page HTML contenant le message de bonne ou mauvaise réponse
let temps = document.getElementById("temps") // Récupère le div contenant le timer.
// Affichons les questions et les choix de réponse
function quiz(q, choix) {
    document.getElementById("go").style.display = 'none';   // Cache le bouton go après avoir appué dessus
    document.getElementById("quiz").style.border = 'solid blue'; // Met une bordure autour du quiz

    if((num < q.length)) {

        document.getElementById("question").innerHTML = 'Question ' + indic + '/' + q.length + ': ' + q[num];   //Trouve le div avec l'id "question" dans la page HTML et modifie son contenue pour afficher la question
        for(i = 0 ; i <= 3; i++) {
            document.getElementsByClassName("options")[i].style.display = 'block';  // Rend les div contenant les options de réponse visibles à l'utilisateur
            document.getElementsByClassName("options")[i].innerHTML = '<input type="radio" name="rep">' + choix[num][i];  // Modifie ces mêmes div pour y afficher un input de type "radio" et avec le nom "rep" + une option de réponse correspondant à la question (un dans chaque div). Le fait que tous les input de type radio ait le même nom permet d'autoriser un seul choix de réponse.
            document.getElementsByName("rep")[i].value = choix[num][i]; // Assigne à chaque div la valeur de son otpion de réponse
        } // Tant qu'il reste des questions dans la liste, il les affiche et affiche aussi les options de réponse.

        let t = 15; // 15 secondes pour répondre
        let timer = setInterval(() => {
            temps.style.display = 'block'; // Rend le timer visible
            temps.innerHTML = t + ' seconde(s) avant la question suivante.'; // Affiche le timer
            if (message.style.display == 'block') {
                clearInterval(timer);
                temps.style.display = 'none';
            } // Si le message est visible (donc si l'utilisateur a validé sa réponse), le timmer s'arrête et devient invisible.
            else if (t == 0) { 
                if(document.getElementById("chant")) {
                    clearInterval(timer);
                    reponse_chant();
                } // Détècte un élément propre à la page contenant le quiz sur le chant, stoppe le timer et lance la fonction reponse_chant
                else if (document.getElementById("cuisine")) {
                    clearInterval(timer);
                    reponse_cuisine();
                } // Idem mais avec la page Cuisine
                else if (document.getElementById("cine")) {
                    clearInterval(timer);
                    reponse_cine();
                } // Idem mais avec la page Cinéma
            } // Si le timer arrive à 0, Stop le timer et affiche la réponse correpondant au quiz
            t--;}, 1000) // La fonction au dessus s'effectue toutes les secondes. 

        message.style.display = 'none'; // Rend le message de bonne ou mauvaise réponse invisible
        document.getElementById("validation").style.display = 'block'; // Rend le bouton pour valider sa réponse visible
        document.getElementById("next").style.display = 'none'; // Rend le bouton pour passer à la question suivante invisible
    } 

    else {
        document.getElementById("quiz").style.display = 'none'; // Cache le quiz
        document.getElementById("score").innerHTML = "Vous avez un score total de " + points + " point(s)."; // Affiche le score
        document.getElementById("back").style.display = 'block';
    } // S'il n'y a plus d'autre questions, affiche le score du joueur.
}

// Transition entre chaque question (compte les points et ittère l'indicateur de question et le numéro de la question)
function reponse_chant() {
    let reponse_q1 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 1
    let reponse_q2 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 2
    let reponse_q3 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 3
    let reponse_q4 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 4
    let reponse_q5 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 5
    let reponse_q6 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 6
    let reponse_q7 = document.getElementsByName("rep")[3].checked; // Récupère la bonne réponse de la question 7
    

    let reponse = [[reponse_q1, 1], [reponse_q2, 2], [reponse_q3, 0], [reponse_q4, 1], [reponse_q5, 2], [reponse_q6, 0], [reponse_q7, 3]] // Liste contenant toutes les bonnes réponses et leur positions (1, 2, 3 ou 4) dans les options de réponse
    
    if(reponse[num][0] == true) { // Regarde si la bonne réponse a été coché.
        message.textContent = "Bravo !"; // Affiche "Bravo !" si la réponse correspond 
        points ++; // ajoute 1 point au score
    } // Si bonne réponse

    else {
        document.getElementById("message").textContent = "Et non! La bonne réponse était " + document.getElementsByName("rep")[reponse[num][1]].value + '.'; // Affiche Et non! La bonne réponse était Elvis Presley. si la réponse est mauvaise.
        // remarque document.getElementById("message").innerHTML = "Et non! La bonne réponse était " + reponse[num][1] + '.'; marcherait aussi si on écrivait directement la bonne réponse dans reponse[num][1].
    } // Si mauvaise réponse

    for(i = 0 ; i <= 3; i++) {
        document.getElementsByClassName("options")[i].style.display = 'none';
    } // Cache les options de réponses

    message.style.display = 'block'; // Affiche le message de bonne ou mauvaise réponse
    temps.style.display = 'none'; // Cache le timer

    document.getElementById("validation").style.display = "none"; // Cache le bouton de Validation
    document.getElementById("next").style.display = 'block'; // Affiche le bouton pour passer à la question suivante

    num ++; // Ajoute 1 au compteur num.
    indic ++; // Ajoute 1 à l'indicateur affiché
} 

function reponse_cuisine() {
    let reponse_q1 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 1
    let reponse_q2 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 2
    let reponse_q3 = document.getElementsByName("rep")[3].checked; // Récupère la bonne réponse de la question 3
    let reponse_q4 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 4
    let reponse_q5 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 5
    let reponse_q6 = document.getElementsByName("rep")[3].checked; // Récupère la bonne réponse de la question 6
    let reponse_q7 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 7
    

    let reponse = [[reponse_q1, 2], [reponse_q2, 0], [reponse_q3, 3], [reponse_q4, 2], [reponse_q5, 0], [reponse_q6, 3], [reponse_q7, 3]] // Liste contenant toutes les bonnes réponses et leur positions (1, 2, 3 ou 4) dans les options de réponse
    
    if(reponse[num][0] == true) { // Regarde si la bonne réponse a été coché.
        message.textContent = "Bravo !"; // Affiche "Bravo !" si la réponse correspond 
        points ++; // ajoute 1 point au score
    } // Si bonne réponse

    else {
        document.getElementById("message").textContent = "Et non! La bonne réponse était " + document.getElementsByName("rep")[reponse[num][1]].value + '.'; // Affiche Et non! La bonne réponse était Elvis Presley. si la réponse est mauvaise.
        // remarque document.getElementById("message").innerHTML = "Et non! La bonne réponse était " + reponse[num][1] + '.'; marcherait aussi si on écrivait directement la bonne réponse dans reponse[num][1].
    } // Si mauvaise réponse

    for(i = 0 ; i <= 3; i++) {
        document.getElementsByClassName("options")[i].style.display = 'none';
    } // Cache les options de réponses

    message.style.display = 'block'; // Affiche le message de bonne ou mauvaise réponse
    temps.style.display = 'none'; // Cache le timer

    document.getElementById("validation").style.display = "none"; // Cache le bouton de Validation
    document.getElementById("next").style.display = 'block'; // Affiche le bouton pour passer à la question suivante

    num ++; // Ajoute 1 au compteur num.
    indic ++; // Ajoute 1 à l'indicateur affiché
}

function reponse_cine() {
    let reponse_q1 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 1
    let reponse_q2 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 2
    let reponse_q3 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 3
    let reponse_q4 = document.getElementsByName("rep")[3].checked; // Récupère la bonne réponse de la question 4
    let reponse_q5 = document.getElementsByName("rep")[3].checked; // Récupère la bonne réponse de la question 5
    let reponse_q6 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 6
    let reponse_q7 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 7
    

    let reponse = [[reponse_q1, 0], [reponse_q2, 1], [reponse_q3, 1], [reponse_q4, 3], [reponse_q5, 3], [reponse_q6, 0], [reponse_q7, 2]] // Liste contenant toutes les bonnes réponses et leur positions (1, 2, 3 ou 4) dans les options de réponse
    
    if(reponse[num][0] == true) { // Regarde si la bonne réponse a été coché.
        message.textContent = "Bravo !"; // Affiche "Bravo !" si la réponse correspond 
        points ++; // ajoute 1 point au score
    } // Si bonne réponse

    else {
        document.getElementById("message").textContent = "Et non! La bonne réponse était " + document.getElementsByName("rep")[reponse[num][1]].value + '.'; // Affiche Et non! La bonne réponse était Elvis Presley. si la réponse est mauvaise.
        // remarque document.getElementById("message").innerHTML = "Et non! La bonne réponse était " + reponse[num][1] + '.'; marcherait aussi si on écrivait directement la bonne réponse dans reponse[num][1].
    } // Si mauvaise réponse

    for(i = 0 ; i <= 3; i++) {
        document.getElementsByClassName("options")[i].style.display = 'none';
    } // Cache les options de réponses

    message.style.display = 'block'; // Affiche le message de bonne ou mauvaise réponse
    temps.style.display = 'none'; // Cache le timer

    document.getElementById("validation").style.display = "none"; // Cache le bouton de Validation
    document.getElementById("next").style.display = 'block'; // Affiche le bouton pour passer à la question suivante

    num ++; // Ajoute 1 au compteur num.
    indic ++; // Ajoute 1 à l'indicateur affiché
}