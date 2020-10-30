<h1>Focus+ Prototype</h1>

<p>Outil d'évaluation en ligne du niveau d'accessibilité des documents administratifs quels que soient leurs formats, proposant l'accompagnement nécessaire pour que l'usager puisse améliorer sa production.</p>

<h3>MERN (Mongodb Express React Node)</h3>

<p>Extension utilisées :</p>
    <li>axios</li>
    <li> mongoose (A installer si besoin)</li>
    <li>cors</li>
    <li>multer</li>
    <li>express</li>
    <li>fs</li>
    <li>child_process</li>

<p>Le script.sh ("gmic.sh" dans le dossier backend) s'utilise avec la lib de gmic (installateur (.rpm) dans le dossier install_gmic).</p>
<p>Le script.sh "run.sh" permet de lancer le site automatiquement (lance le backend en tache de fond puis le frontend).</p>
<p>Les scripts ne peuvent être utiliser seulement si bash est installé (à vérifier sur les serveurs du ministère, sinon modification éventuelle a prévoir)</p>

<h3>Actuel problème :</h3>
<p>Fix quelques détails.</p>

<h3>A faire :</h3>
<p>Fix quelques problèmes (évoquer au dessus).
Faire la page d'accueil.
Rendre le site accessible.
Faire les deux autres parties :</p>
    <li>Partie vidéo (un peu comme youtube)</li>
    <li>Partie forum (un peu comme jeuxvideo.com)</li>
    <li>Renforcer la 1er partie avec du machine learning</li>

<h2>Utilisation</h2>

<p> Pour lancher le script "run.sh" utiliser la commande : "./run.sh"
cela lancera le backend en tâche de fond puis le frontend.</p>

<h2>Détails</h2>

<p>Ceci est un propotype de Focus+ (réalisé par deux stagiaires d'Epitech)</p>
<p>Nous avons utilisé les languages suivants : React.js + Express.js + Node.js</p>
<p>Pour la base de données on utilisera : MongoDB (a changer si besoin pour les serveurs du ministère)</p>
<p>Comme nous utilisons ces outils on utilise donc la techno fullstack appeler MERN</p>
<p>La partie REACT.js se trouve dans le dossier "src"</p>
<p>Les parties EXPRESS.js et NODE.js elle se trouve dans le dossier "backend"</p>
<p>Le front utilise le port 3000 et le back le port 5000 (les ports sont bien sûr modifiables).</p>

<p>Pour la partie Vidéo, les vidéos devront être héberger sur le PeerTube du Lab110 Bis</p>

<p>Problèmes notables :</p>
<p>Nous avons eux quelques problèmatiques durant la conception de ce prototype.</p>
<p>ATTENTION AU RESEAU DU MINISTERE QUI BLOQUE CERTAINE CHOSE CAR CERTAINS PORT OU ADDRESSE SONT BLOQUE PAR UN FIREWALL !!!</p>

- Tout d'abord le choix du langage :
Nous voulions utiliser à la base du REACT + C# sauf que les serveurs du ministère sont sous linux, C# étant plus orienté Windows nous avons finalement décidé d'utiliser le Node.js.
De plus nous utilisons ces langages du fait de leur performances ainsi que leur popularité et leur souplesse.

- Le MERN :
Comme nous ne connaissont pas le JS et donc le REACT / EXPRESS / NODE il est possible que notre code ne soit pas très optimisé ou qu'il y ai des manières plus simple de faire ce qu'on a fait (après rien n'empêche de faire cela différement, après tout un code peut etre fait de plusieurs façons). Mais on essaye d'être le plus clair possible.
Mais nous ne connaissions pas non plus le MERN et donc avons dû appliquer cette techno fullstack car elle nous semblait la plus adapté. (Au départ, on essyait de connecter le front et le back sans y arriver car nous ne connaissions pas le MERN et donc pas de dépendances pour cela).

- Problème pour sauvegarder des fichiers:
Au départ, nous avions des soucis car on faisait mal nos requête HTTP, puis on ne savait pas comment sauvegarder le document récupéré dans le Drag & Drop sur le serveur.
Finalement nous avons trouver la dépendance MULTER qui nous permet de réaliser ceci.

- Problème d'incompatibilité:
Pour le drag & drop nous voulions utiliser la dépendance REACT appelée DropZone malheureusement celle-ci est incompatible avec Axios qui nous permet de réaliser facilement des requêtes HTTP.
Du coup, nous avons nous même fait un Drag & Drop.

- Problème pour récupérer les fichiers :
Nous avons eu aussi un problème pour récupérer les fichiers générés par le script.sh (gmic.sh), lorsque l'on faisait le download, on ne récuperait qu'un .html.
Après plusieurs recherches nous avons découvert que, pour que le REACT trouve les fichiers il faut les placer dans le dossier "public".</p>

<h2>Nos idées</h2>

<p>Voici une petite liste de nos idées concernant la suite du projet :</p>
    <li>Utiliser Python pour le machine learning</li>