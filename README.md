# hangnow-front

# Install ⚙

### Back-end
[Repository back-end](https://github.com/HangNowApp/hangnow-back) 

### Front-end

Installer :
```bash
npm install
# or
yarn install
```

Lancer le front :

```bash
npm run dev
# or
yarn dev
```
⚠ Lancer le back-end également.


# Choix techniques 🔧

### Back-end :
[Repository back-end](https://github.com/HangNowApp/hangnow-back) 


### Font-end :
Choix de React car un projet de groupe avait déjà été réalisé avec cette techno et qu'elle permettait l'utilisation de MaterialUI


# Répartition 👥
Les tâches ont été répartie de sorte à ce que l'avancement du projet se fasse aussi bien côté back que front.


### Melvyn
- Back -> Grande majorité (sécurité, models, controllers, dto)
- Front -> Quelques interventions (set up, composants, intégrations)

### Alex
- Back -> Quelques interventions (controllers)
- Front -> Interventions (composants, intégrations, pages)
### Ana
- Back -> Quelques interventions (model, légers fix)
- Front -> Principalement sur le front (composants, intégrations, pages)


# Project 👋
Application de rencontre instantanée dans laquelle un user peut créer un ou plusieurs évenèments qu'il va host et auxquels d'autres user pourront se joindre, ces évènements vont contenir des tags permettant d'identifier leur type

Un utilisateur de base est limité à 2 évènements à la fois et il peut upgrade pour être premium et pouvoir créer plus de 2 events

Les fonctions de base de l'application sont : création de compte, connexion, création/suppression d'évènements, modification du profil utilisateur, passage à un compte premium, création de tags, voir le profil d'un autre user.
