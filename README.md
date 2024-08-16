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

#### save(survey)

Ajoute une nouvelle enquête , retoune l'insertion.
structure de survey :
{surveyId (int),

name (string),
description(string),
createAt(date),
createBy(object)
{employeeNane(string) employeeRole(string)}
}

#### listSurvey()

Récupère et affiche la liste de toutes les enquêtes, retourne un tableau contenant tous les objets d'enquête.
Cette fonction ne prend aucun paramètre.

#### destroy(surveyId)

Cette fonction supprime une enquête spécifique, retourne null si l'id n'existe pas
surveyId (int)

#### edit(surveyId, newDonnee)

Permet de modifier une enquête spécifique, retourne null si l'id n'existe pas

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

#### save(question)

permet d'ajouter une nouvelle question, retourne l'insertion.

Structure de question (Object): {
questionId(int),
surveyId(id),
title(string),
type(string),
option(object){minValue(int), maxValue(int), step(int)}
}

#### listquestion()

Récupère et affiche la liste de toutes les question, retourne un tableau contenant tous les objets de question.

Cette fonction ne prend aucun paramètre.

#### destroy(questionId)

Supprime une question spécifique, retourne null si l'id n'existe pas
questionId (int)

### answerModule :

#### save(answer)

Permet d'ajouter une nouvelle réponse, retourne l'insertion
Structure de answer(Object):{
answerId(int),
title(string)
}

#### listanswer

Récupère et affiche la liste de toutes les réponses, Retourne un tableau contenant tous les objets de réponse.
Cette fonction ne prend aucun paramètre.

#### destroy(answerId)

Supprime une réponse spécifique, retourne null si l'id nexiste pas
answerId (int)

#### edit(answerId, answer)

Permet de modifier une réponse spécifique, retourne null si l'id n'existe pas

answerId (int) 

Structure de answer:{
answerId(int),
title(string)
}: (Object) : Un objet contenant les nouvelles données à mettre à jour pour la réponse.

## Authors

Seme Thiilo
