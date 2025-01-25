// Commençons par créer une liste contenant toutes les questions :
let qchant = ['Quelle est la première chose à faire si vous détectez un incendie dans un bâtiment  ?', 'Quel extincteur est le plus adapté pour un feu dorigine électrique ?', 'Que signifie l’acronyme « RIA » en sécurité incendie ?', 'Quel est le numéro d’urgence pour appeler les pompiers en France  ?', " Quelle est la méthode correcte pour utiliser un extincteur ?", " Où ne faut-il jamais stocker un extincteur ?", " Que devez-vous faire si vos vêtements prennent feu ?"]
// Maintenant on créer une deuxième liste regroupant les listes contenant les options de réponses pour chaque question : [[réponses q1], [réponses q2], ...]
let choix_chant = [["Éteindre le feu immédiatement.", " Crier « au feu » et courir.", " Appeler les secours et alerter les occupants. ", " Attendre pour voir si le feu s'éteint tout seul."], [" Extincteur à eau.", "  Extincteur au CO2.", " Extincteur à poudre ABC.", " Extincteur à mousse."], [" Réseau d'Intervention Anti-incendie.", "  Robinet Incendie Armé.", " Régulation Incendie Automatique.", " Réserve d'Intervention Active."], [" 15", "  112", "18", "17"], ["Tirer la goupille, diriger la buse vers le feu, appuyer sur la poignée et balayer la base des flammes.", " Ouvrir l'extincteur, verser son contenu sur le feu.", " Secouer l'extincteur et le lancer sur les flammes.", " Appuyer sur la poignée sans viser précisément."], ["Près d'une sortie.", " Dans un placard fermé à clé. ", " À proximité d'un potentiel départ de feu. ", " Dans un endroit accessible et visible."], ["Courir pour éteindre les flammes.", " Retirer les vêtements immédiatement. ", " S’arrêter, se jeter au sol et rouler pour étouffer les flammes. ", "  Utiliser un extincteur sur vous "]]

// Pareil pour le quiz sur la cuisine
let qcine = ["Que faut-il faire avant de commencer à travailler sur une machine industrielle ?"," Pourquoi est-il important de porter des équipements de protection individuelle (EPI) dans un environnement industriel ?", " Que faire en cas de fuite de produit chimique dans un environnement industriel ?", " Quels sont les risques potentiels d’un mauvais entretien des machines industrielles ?", " Comment prévenir les risques électriques dans un environnement industriel ?", " Que faut-il faire avant d’effectuer une intervention sur un appareil sous tension ?", " Pourquoi est-il essentiel de connaître les fiches de données de sécurité (FDS) des produits chimiques utilisés en industrie ?" ] 
let choix_cine = [["Vérifier que la machine est bien allumée", "Lire le manuel d’utilisation et s’assurer que les protections sont en place", "Commencer immédiatement le travail", "Attendre que l’alarme se déclenche"], [" Pour être à la mode", " Pour prévenir les accidents et protéger la santé", " Parce que c’est obligatoire, sans plus de raisons", " Pour améliorer la productivité uniquement"], ["  Ignorer la fuite et continuer à travailler", " Essayer de nettoyer la fuite soi-même sans équipement adapté", " Alerter immédiatement les responsables et évacuer la zone", " Couvrir la fuite avec un tissu pour la stopper"], [" Aucun risque si la machine est utilisée correctement", " Risque d'accident grave, comme des blessures ou des incendies", " Les machines deviennent plus efficaces", " Le risque est limité aux pannes techniques mineures"], ["  En portant des gants de protection contre les coups de courant", " En veillant à ce que les câbles soient en bon état et en éteignant les appareils après usage", " En n’utilisant que des appareils électriques ne nécessitant pas de prise de terre", " En manipulant les appareils électriques avec des mains sèches uniquement"], [" Isoler l’appareil de la source d’alimentation", " Continuer à travailler tout en portant des gants isolants", "  Vérifier uniquement si l’appareil fonctionne correctement", "  Alerter les collègues pour qu'ils puissent vous observer"], [" Pour savoir où acheter ces produits", "  Pour comprendre les risques associés et prendre des mesures de sécurité appropriées", " Parce que c’est une exigence administrative uniquement", "  Pour pouvoir créer de nouveaux produits chimiques"]]

// Pareil pour le cinéma 
let qcuisine = ["Que devez-vous faire avant de démarrer un véhicule ?", " Pourquoi est-il important de respecter les limitations de vitesse ?"," Que faire si vous êtes témoind'un accident sur la route", " Pourquoi faut-il toujours laisser une distance de sécurité avec le véhicule qui vous précède ?", " Comment prévenir les risques d’accident liés à l’utilisation d’un téléphone au volant ?"," Que devez-vous faire si un piéton traverse en dehors d’un passage clouté ?", "Quels éléments devez-vous vérifier avant de faire un long trajet en voiture ?"]
let choix_cuisine = [["Allumer le moteur sans vérifier quoi que ce soit", " Vérifier les rétroviseurs, attacher votre ceinture de sécurité et vérifier l'état du véhicule", "Attendre que les passagers s’installent sans rien vérifier", " Vérifier uniquement que le réservoir de carburant est plein"], [" Pour éviter d’être flashé par les radars", " Parce que cela permet de mieux gérer les risques et de réduire les accidents", " Parce que c’est une règle, mais cela n’a pas d’impact sur la sécurité", " Pour économiser du carburant uniquement"], ["Passer sans s’arrêter pour ne pas gêner la circulation", " S’arrêter dans un endroit sûr, alerter les secours, et sécuriser la zone si possible", " S’approcher directement de l’accident pour voir ce qui se passe", "  Filmer l’accident pour montrer la vidéo aux secours"], ["Pour permettre aux autres véhicules de s’insérer facilement", "Pour réduire les risques de collision en cas de freinage brusque", " Parce que c’est obligatoire mais inutile en réalité", " Pour rouler plus lentement et éviter les radars"], [" En utilisant un kit mains-libres ou en arrêtant le véhicule pour téléphoner", " En ne regardant l’écran que pendant les embouteillages", " En posant le téléphone sur vos genoux pour l’avoir à portée de main", " En envoyant des messages uniquement aux feux rouges"], [" Continuer à rouler car il n’a pas respecté la règle"," Ralentir et lui céder le passage pour éviter un accident", "Klaxonner pour lui signaler qu’il gêne la circulation", " Ignorer sa présence si vous êtes pressé"], [" La pression des pneus, les niveaux d’huile et de liquide de refroidissement, et l’éclairage", "La propreté de la voiture uniquement", " Le fonctionnement des essuie-glaces seulement", "Rien, car la voiture est prête par défaut"]]



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
                else if (document.getElementById("cine")) {
                    clearInterval(timer);
                    reponse_cuisine();
                } // Idem mais avec la page Cuisine
                else if (document.getElementById("cuisine")) {
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
    let reponse_q1 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 1
    let reponse_q2 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 2
    let reponse_q3 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 3
    let reponse_q4 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 4
    let reponse_q5 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 5
    let reponse_q6 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 6
    let reponse_q7 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 7
    

    let reponse = [[reponse_q1, 2], [reponse_q2, 1], [reponse_q3, 1], [reponse_q4, 2], [reponse_q5, 0], [reponse_q6, 1], [reponse_q7, ]] // Liste contenant toutes les bonnes réponses et leur positions (1, 2, 3 ou 4) dans les options de réponse
    
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
    let reponse_q1 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 1
    let reponse_q2 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 2
    let reponse_q3 = document.getElementsByName("rep")[2].checked; // Récupère la bonne réponse de la question 3
    let reponse_q4 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 4
    let reponse_q5 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 5
    let reponse_q6 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 6
    let reponse_q7 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 7
    

    let reponse = [[reponse_q1, 1], [reponse_q2, 1], [reponse_q3, 2], [reponse_q4, 1], [reponse_q5, 1], [reponse_q6, 0], [reponse_q7, 1]] // Liste contenant toutes les bonnes réponses et leur positions (1, 2, 3 ou 4) dans les options de réponse
    
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
    let reponse_q1 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 1
    let reponse_q2 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 2
    let reponse_q3 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 3
    let reponse_q4 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 4
    let reponse_q5 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 5
    let reponse_q6 = document.getElementsByName("rep")[1].checked; // Récupère la bonne réponse de la question 6
    let reponse_q7 = document.getElementsByName("rep")[0].checked; // Récupère la bonne réponse de la question 7
    

    let reponse = [[reponse_q1, 1], [reponse_q2, 1], [reponse_q3, 1], [reponse_q4, 1], [reponse_q5, 0], [reponse_q6, 1], [reponse_q7, 0]] // Liste contenant toutes les bonnes réponses et leur positions (1, 2, 3 ou 4) dans les options de réponse
    
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