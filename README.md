# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale en utilisant ligne de commande :

1. **Clonez le repository :**

   ```bash
   git clone https://github.com/semthillo/surveyApp.git
   ```

2. **Accédez au dossier du projet :**

   ```bash
   cd surveyApp
   ```

3. **Installez les dépendances :**

   ```bash
   npm install
   ```

4. **Configurez la base de données :**

   - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
   - Mettez les paramètres de connexion dans `config/db.js`.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
node ./src/index.js
```

## Documentation détaillée pour chaque fonction des modules

### SurveyModule :

#### surveyModule.save(survey)

1. Description :
   Ajoute une nouvelle enquête , retoune l'insertion.

2. Paramètres :
   structure de survey :
   {surveyId (int),
   name (string),
   description(string),
   createAt(date),
   createBy(object)
   {employeeNane(string) employeeRole(string)}
   } (Object): Un objet contenant les détails de l'enquête à ajouter.

#### surveyModule.listSurvey

1. Description :
   Récupère et affiche la liste de toutes les enquêtes, retourne un tableau contenant tous les objets d'enquête.

2. Paramètres :
   Cette fonction ne prend aucun paramètre.

#### surveyModule.destroy(surveyId)

1. Description :
   Cette fonction supprime une enquête spécifique, retourne null si l'id n'existe pas

2. Paramètres :
   surveyId (int)

#### surveyModule.edit(surveyId, newDonnee)

1. Description :
   Permet de modifier une enquête spécifique, retourne null si l'id n'existe pas

2. Paramètres :
   surveyId (int)
   structure de newDonnee(Object) :
   {surveyId (int),
   name (string),
   description(string),
   createAt(date),
   createBy(object)
   {employeeNane(string) employeeRole(string)}
   }

### questionModule :

#### questionsModule.save(question)

1. Description :
   permet d'ajouter une nouvelle question, retourne l'insertion.

2. Paramètres :
   Structure de question (Object): {
   questionId(int),
   surveyId(id),
   title(string),
   type(string),
   option(object){minValue(int), maxValue(int), step(int)}
   }

#### questionsModule.listquestion()

1. Description :
   Récupère et affiche la liste de toutes les question, retourne un tableau contenant tous les objets de question.

2. Paramètres :
   Cette fonction ne prend aucun paramètre.

#### questionsModule.destroy(questionId)

1. Description :
   Supprime une question spécifique, retourne null si l'id n'existe pas

2. Paramètres :
   questionId (int)

### answerModule :

#### answersModule.save(answer)

1. Description :
   Permet d'ajouter une nouvelle réponse, retourne l'insertion

2. Paramètres :

   Structure de answer(Object):{
   answerId(int),
   title(string)
   }

#### answersModule.listanswer

1. Description :
   Récupère et affiche la liste de toutes les réponses, Retourne un tableau contenant tous les objets de réponse.

2. Paramètres :
   Cette fonction ne prend aucun paramètre.

#### answersModule.destroy(answerId)

1. Description :
   Supprime une réponse spécifique, retourne null si l'id nexiste pas
2. Paramètres :
   answerId (int)

#### answersModule.edit(answerId, answer)

1. Description :
   Permet de modifier une réponse spécifique, retourne null si l'id n'existe pas

2. Paramètres :

   answerId (int) : L'identifiant unique de la réponse à modifier.
   Structure de answer:{
   answerId(int),
   title(string)
   }: (Object) : Un objet contenant les nouvelles données à mettre à jour pour la réponse.

## Authors

Seme Thiilo
