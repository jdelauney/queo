# Introduction

Queo est une bibliothèque de composants moderne conçue pour Vue.js et React, offrant une collection riche de composants d'interface utilisateur hautement personnalisables et accessibles. Notre objectif est de fournir aux développeurs les outils nécessaires pour créer rapidement des interfaces utilisateur professionnelles sans compromis sur la qualité ou la flexibilité.

## Pourquoi Queo ?

- **Double Compatibilité Framework** : Utilisez les mêmes composants dans vos projets Vue.js et React
- **Performance Optimisée** : Conçu pour être léger et rapide dès le départ
- **Accessibilité Native** : Tous les composants sont conformes WCAG 2.1
- **Personnalisation Avancée** : Système de thème flexible et API de style puissante

## Installation

```bash
# Pour Vue.js
npm install @queo/vue

# Pour React
npm install @queo/react
```

## Utilisation Rapide

### Vue.js

```vue
<script setup>
import { TxButton } from '@queo/vue';
</script>

<template>
	<TxButton variant="primary"> Mon Premier Bouton </TxButton>
</template>
```

### React

```jsx
import { Button } from '@queo/react';

function App() {
	return <Button variant="primary">Mon Premier Bouton</Button>;
}
```

## Structure des Composants

Les composants queo sont organisés en catégories pour une meilleure navigation :

### Actions

Les composants qui déclenchent des actions ou des événements dans votre interface.

- **Button** : Boutons personnalisables pour diverses actions

### Prochainement

- Composants de mise en page
- Composants de navigation
- Composants de feedback
- Composants de données

## Philosophie de Design

queo suit plusieurs principes clés :

1. **Simplicité** : API intuitive et documentation claire
2. **Flexibilité** : Hautement personnalisable sans sacrifier la facilité d'utilisation
3. **Performance** : Optimisé pour la production avec un impact minimal sur le bundle
4. **Accessibilité** : Conçu pour être utilisable par tous

## Prochaines Étapes

- Consultez notre [Guide de Démarrage](/guide/getting-started) pour commencer
- Explorez nos [Composants](/components/introduction) disponibles
- Rejoignez notre [Communauté](https://github.com/votre-repo/queo/discussions)

## Contribution

Nous accueillons favorablement les contributions de la communauté ! Consultez notre pour commencer.

## Support

- 📖 [Documentation Complète](/guide/getting-started)
- 💬 [Discussions GitHub](https://github.com/votre-repo/queo/discussions)
- 🐛 [Signalement de Bugs](https://github.com/votre-repo/queo/issues)
