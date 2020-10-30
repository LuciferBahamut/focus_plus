<h1>Focus+ Prototype<h1>

<h3>MERN (Mongodb Express React Node)</h3>

<p>Extension utiliser :</p>
    <li>axios</li>
    <li> mongoose (A installer si besoin)</li>
    <li>cors</li>
    <li>multer</li>
    <li>express</li>
    <li>fs</li>
    <li>child_process</li>

<p>Le script.sh (dans le dossier backend) s'utilise avec la lib de gmic (installateur (.rpm) dans le dossier install_gmic).</p>
<p>Le script.sh "run.sh" permet de lancer le site automatiquement (lance le backend en tache de fond puis le frontend).</p>
<p>Les scripts ne peuvent être utiliser seulement si bash est installer (à vérifier sur les serveurs du ministère, sinon modification éventuelle a prévoir)</p>

<h3>Actuel problème :</h3>
<p>Fix quels détails.</p>

<h3>A faire :</h3>
<p>Fixer quelque problème surtout celui évoquer au dessus.
Faire la page d'accueil.
Faire les deux autres parties :</p>
    <li>Partie vidéo (un peu comme youtube)</li>
    <li>Partie forum (un peu comme jeuxvideo.com)</li>
    <li>Renforcer la 1er partie avec du machine learning</li>

<h2>Détails</h2>

<p>Ceci est un propotype de Focus+ (réaliser par deux stagiaires d'Epitech)</p>
<p>Nous avons utilisé les languages suivant : React.js + Express.js + Node.js</p>
<p>Pour la base de donnée on utilisera : MongoDB (a changer si besoin pour les serveurs du ministère)</p>
<p>Comme nous utilisons ces outils on utilise donc la techno fullstack appeler MERN</p>
<p>La partie REACT.js se trouve dans le dossier "src"</p>
<p>La partie EXPRESS.js et NODE.js elle se trouve dans le dossier "backend"</p>
<p>Le front utilise le port 3000 et le back le port 5000 (les ports sont bien sur modifiable).</p>

<p>Problèmes notables :</p>
<p>Nous avons eux quelque problèmatiques durant la conception de ce prototype.</p>
<p>ATTENTION AU RESEAU DU MINISTERE QUI BLOQUE CERTAINE CHOSE CAR CERTAINS PORT OU ADDRESSE SONT BLOQUE PAR UN FIREWALL !!!</p>

- Tout d'abord le choix du langage :
Nous voulions utiliser a la base du REACT + C# sauf que les serveurs du ministère sont sous linux, C# étant plus orienté Windows nous nous sommes décider de finalement utilisé le Node.js.
De plus nous utilisons ces langages du fait de leur performances ainsi que leur popularité et leur souplesse.

- Le MERN :
Comme nous ne connaisont pas le JS et donc le REACT / EXPRESS / NODE il est possible que notre code ne soit pas très optimisé ou qu'il y est des manières plus simple de faire ce qu'on a fait (après rien n'empêche de faire cela différement, après tout un code peut etre fait de plusieurs façon). Mais on essaie d'être le plus clair possible.
Mais nous ne connaisions pas non plus le MERN et donc avons du appliqué cette techno fullstack car elle nous semblait la plus adapté. (Au départ, on essyait de connecter le front et le back sans y arriver car nous ne connaisions pas le MERN et donc peu de dépendence pour cela).

- Problème pour sauvegarder des fichiers:
Au départ, nous avions des soucis car on faisait mal nos requete HTTP, puis on ne savait pas comment sauvegarder le document récupérer dans le Drag & Drop sur le serveur
Finalement nous avons trouver la dépendence MULTER qui nous permet de réaliser ceci.

- Problème d'incompatibilité:
Pour le drag & drop nous voulions utilisé la dépendence REACT appeler DropZone malheureusement celle-ci est incompatible avec Axios qui nous permet de réalisé facilement des requêtes HTTP.
Du coup, nous avons nous même fait un drag and drop.

- Problème pour récupérer les fichiers :
Nous avons eu aussi un problème pour récupérer les fichiers générer par le script.sh, lorsque l'on faisait le download, on ne récuperait qu'un .html
Après plusieurs recherche nous avons découvert que pour que le REACT trouve les fichier ils faut les placé dans le dossier "public".
</p>