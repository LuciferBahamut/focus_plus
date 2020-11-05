<h1>Focus+ Prototype</h1>

<p>Outil d'évaluation en ligne du niveau d'accessibilité des documents administratifs quels que soient leurs formats, proposant l'accompagnement nécessaire pour que l'usager puisse améliorer sa production.</p>

<h2>Détails du projet</h2>

<p>Focus+ sera constituer (pour l'instant) de 3 parties, chacune reliée avec une page d'accueil.

(Pour rappelle l'accessibilité est le fait de rendre quelque chose accessible pour des personnes atteinte d'un handicap)

La Première partie : L'évaluation / Convertion d'un document en document accessible
    C'est la partie coeur du projet, elle consite a récupérer un document puis juger si ce document est accesible ou non, et l'indiquer a l'utilisateur (voir de le modifier si besoin)
    
La Deuxième partie : Vidéo sur l'accesiblité
    C'est une partie un peu similaire a Youtube, ou il y aurai des vidéos sur l'accesiblité ou comment rendre certains documents accessible (des tutos)
    
La Troisième partie : Forum autour de l'accessibilité
    Un petit forum où les utilisateurs pourront partager leur expérience sur l'accessibilité</p>


<h2>Détails Technique du projet</h2>

<p>Ce projet suit la technologie fullstack MERN (MongoDB Express React Node).
Le serveur sera plus tard héberger sur un serveur du ministère il faudra qu'on potentielement changer la partie MongoDB, mais dans le cadre de notre prototype, nous utiliserons cette base de donnée gratuite.

Cette base de donnée est facilement modifiable. (Et est pour l'instant sous un compte de Quentin Treheux).</p>

<p>Extension utilisées :</p>
    <p>Pour le Front</p>
        <li>axios (Requête HTTP)</li>
        <li>bootstrap (Framework de CSS)</li>
        <li>downloadjs (Gère le download)</li>
        <li>node-sass</li>
        <li>react-bootstrap</li>
        <li>react-dropzone (permet d'avoir notre drag and drop facilement)</li>
        <li>react-router-dom (permet de naviguer entre les différente page facilement)</li>
    <p>
    
    Pour le Back</p>
        <li> mongoose (Connection avec la base de donnée MongoDB)</li>
        <li>cors</li>
        <li>multer (Sauvergarde sur le serveur les fichiers uploader)</li>
        <li>express (Partie Middleware)</li>
        <li>child_process (Permet d'éxécuter un script)</li>

<p>Le script.sh ("gmic.sh" dans le dossier backend) s'utilise avec la lib de gmic (installateur (.rpm) dans le dossier Install_Gmic). Le prototype ayant été fait sur fedora il est possible que le .rpm ne soit pas bon pour votre système d'exploitation, voici un lien si besoin : </p>
<a href="https://gmic.eu/download.html">Installer Gmic</a>
<p>Le script.sh "run.sh" permet de lancer le site automatiquement (lance le backend en tache de fond sur le port 5000 puis le frontend sur le port 3000).</p>
<p>Les scripts ne peuvent être utiliser seulement si bash est installé (à vérifier sur les serveurs du ministère, sinon modification éventuelle a prévoir)</p>

<p>Voici un petit schéma explicatif du fonctionnement de la première partie :</p>

![schema_explicatif](schema_explicatif.png)

<p>Dans le cadre de notre prototype nous appliquons seulement un filtre de daltonisme (3 versions) sur l'image puis nous la renvoyont a l'utilisateur</p>

<h2>Actuel problème :</h2>
<p>Ne peut renvoyer qu'un seul fichier (script modifier en conséquence)</p>
<p>Accès a MongoDB (filtre d'adresse IP)</p>

<h2>A faire :</h2>
<p>Fix quelques problèmes (évoquer au dessus).
Faire la page d'accueil.
Rendre le site accessible.
Faire les deux autres parties :</p>
    <li>Partie vidéo (un peu comme youtube)</li>
    <li>Partie forum (un peu comme jeuxvideo.com)</li>
    <li>Renforcer la 1er partie avec du machine learning</li>

<h2>Utilisation</h2>

<p> Pour lancher le script "run.sh" utiliser la commande : "./run.sh" cela lancera le backend en tâche de fond puis le frontend.</p>

<h2>Détails</h2>

<p>Ceci est un propotype de Focus+ (réalisé par deux stagiaires d'Epitech)</p>
<p>Nous avons utilisé les languages suivants : React.js + Express.js + Node.js</p>
<p>Pour la base de données on utilisera : MongoDB (a changer si besoin pour les serveurs du ministère)</p>
<p>Comme nous utilisons ces outils on utilise donc la techno fullstack appeler MERN</p>
<p>La partie REACT.js se trouve dans le dossier "src"</p>
<p>Les parties EXPRESS.js et NODE.js elle se trouve dans le dossier "backend"</p>
<p>Le front utilise le port 3000 et le back le port 5000 (les ports sont bien sûr modifiables).</p>

<p>Pour la partie Vidéo, les vidéos devront être héberger sur le PeerTube du Lab110 Bis</p>

<h2>Points Historiques :</h2>
<p>Nous avons eux quelques problèmatiques durant la conception de ce prototype.</p>
<p>ATTENTION AU RESEAU DU MINISTERE QUI BLOQUE CERTAINE CHOSE CAR CERTAINS PORT OU ADDRESSE SONT BLOQUE PAR UN FIREWALL !!!</p>

- Tout d'abord le choix du langage :
Nous voulions utiliser à la base du REACT + C# sauf que les serveurs du ministère sont sous linux, C# étant plus orienté Windows nous avons finalement décidé d'utiliser le Node.js.
De plus nous utilisons ces langages du fait de leur performances ainsi que leur popularité et leur souplesse.

- Le MERN :
Comme nous ne connaissont pas le JS et donc le REACT / EXPRESS / NODE il est possible que notre code ne soit pas très optimisé ou qu'il y ai des manières plus simple de faire ce qu'on a fait (après rien n'empêche de faire cela différement, après tout un code peut etre fait de plusieurs façons). Mais on essaye d'être le plus clair possible.
Mais nous ne connaissions pas non plus le MERN et donc avons dû appliquer cette techno fullstack car elle nous semblait la plus adapté. (Au départ, on essyait de connecter le front et le back sans y arriver car nous ne connaissions pas le MERN et donc pas de dépendances pour cela).

- Problème pour sauvegarder des fichiers :
Au départ, nous avions des soucis car on faisait mal nos requête HTTP, puis on ne savait pas comment sauvegarder le document récupéré dans le Drag & Drop sur le serveur.
Finalement nous avons trouver la dépendance MULTER qui nous permet de réaliser ceci.

- Problème d'incompatibilité :
Pour le drag & drop nous voulions utiliser la dépendance REACT appelée DropZone malheureusement celle-ci est incompatible avec Axios qui nous permet de réaliser facilement des requêtes HTTP.
Du coup, nous avons nous même fait un Drag & Drop.

- Problème pour récupérer les fichiers :
Nous avons eu aussi un problème pour récupérer les fichiers générés par le script.sh (gmic.sh), lorsque l'on faisait le download, on ne récuperait qu'un .html.
Après plusieurs recherches nous avons découvert que, pour que le REACT trouve les fichiers il faut les placer dans le dossier "public".

- NOUVELLE VERSION :
L'ancienne version est disponible dans le dossier Archive, nous avons décider de faire une toute nouvelle version du prototype car l'ancienne version ne pouvait pas utiliser bootstrap (qui optimise le site) de plus cela nous a permis de faire une interface plus simple et plus ergonomique et avec moins de bug</p>

<h2>Nos idées</h2>

<p>Voici une petite liste de nos idées concernant la suite du projet :</p>
    <li>Utiliser Python pour le machine learning afin de compléter la partie 1</li>

<p>Pour toutes nouvelles idées voir avec l'intraprenneur du projet</p>