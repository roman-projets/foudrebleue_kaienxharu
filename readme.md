# Entre l'ombre et l'aube

Site narratif Boys Love original consacré à Kaien et Haru. La page présente leurs personnalités, leur rencontre et trois scènes interactives dans une direction artistique nocturne et cinématographique.

## Technologies

- HTML5 sémantique
- CSS responsive avec animations et préférences de mouvement réduit
- JavaScript natif pour les points de vue, chapitres et interactions
- Déploiement statique sur Netlify

## Lancer localement

Ouvrez `index.html` directement dans un navigateur, ou servez le dossier avec un serveur statique local.

```bash
npx serve .
```

Le site ne nécessite ni compilation, ni variable d'environnement.


## Scènes vidéo

La section « Scènes animées » intègre les quatre fichiers MP4 dans `assets/`.
Les vidéos utilisent les contrôles natifs du navigateur, `playsinline` pour les mobiles et des affiches JPG pour l'aperçu. Lorsqu'une vidéo démarre, les autres se mettent en pause automatiquement. Pour publier le site, conserver les vidéos et les affiches dans le dossier `assets/`.
