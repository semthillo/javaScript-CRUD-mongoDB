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
npm start
```

## Documentation détaillée pour chaque fonction des modules

   #### surveyModule.save
    Description :
    Cette fonction asynchrone permet d'ajouter une nouvelle enquête à la collection surveys dans MongoDB. Elle vérifie d'abord si une enquête avec le même surveyId existe déjà. Si c'est le cas, la fonction lève une erreur pour éviter les doublons.

    Signature :
    async function save(survey)

    Paramètres :

    survey (Object) : Un objet contenant les détails de l'enquête à ajouter. L'objet doit obligatoirement inclure un champ surveyId unique.

    Retourne :

    (Promise) : Retourne une promesse qui se résout avec le résultat de l'insertion si l'enquête est ajoutée avec succès. Si une enquête avec le même surveyId existe déjà, une erreur est levée

    Cas d'utilisation :

        Utilisez cette fonction lorsque vous souhaitez ajouter de nouvelles enquêtes à votre base de données tout en garantissant que chaque enquête a un surveyId unique.

    

#### surveyModule.listSurvey
1. Description :
    Cette fonction asynchrone récupère et affiche la liste de toutes les enquêtes stockées dans la collection surveys de MongoDB. Elle retourne un tableau contenant tous les objets d'enquête.

2. Signature :
    async function listSurvey(survey)

3. Paramètres :

    Cette fonction ne prend aucun paramètre.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec un tableau d'objets représentant les enquêtes récupérées. En cas d'erreur, une exception est levée.

6. Cas d'utilisation :

       Utilisez cette fonction lorsque vous souhaitez récupérer et examiner toutes les enquêtes présentes dans la base de données.


  #### surveyModule.save
1. Description :
    Cette fonction asynchrone permet d'ajouter une nouvelle enquête à la collection surveys dans MongoDB. Elle vérifie d'abord si une enquête avec le même surveyId existe déjà. Si c'est le cas, la fonction lève une erreur pour éviter les doublons.

2. Signature :
    async function save(survey)

3. Paramètres :

    survey (Object) : Un objet contenant les détails de l'enquête à ajouter. L'objet doit obligatoirement inclure un champ surveyId unique.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de l'insertion si l'enquête est ajoutée avec succès. Si une enquête avec le même surveyId existe déjà, une erreur est levée

 6. Cas d'utilisation :

        Utilisez cette fonction lorsque vous souhaitez ajouter de nouvelles enquêtes à votre base de données tout en garantissant que chaque enquête a un surveyId unique.

    

#### surveyModule.destroy
1. Description :
    Cette fonction asynchrone supprime une enquête spécifique de la collection surveys dans MongoDB en fonction de son surveyId. Si l'enquête n'existe pas, elle retourne null et affiche un message.

2. Signature :
    async function destroy(surveyId)

3. Paramètres :

    surveyId (int) : L'identifiant unique de l'enquête à supprimer.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de la suppression si l'enquête est trouvée et supprimée avec succès. Si l'enquête n'existe pas, la fonction retourne null.

6. Cas d'utilisation :

      Utilisez cette fonction lorsque vous avez besoin de supprimer une enquête spécifique de votre base de données en fournissant son surveyId.


#### surveyModule.edit
1. Description :
    Cette fonction asynchrone permet de modifier une enquête spécifique dans la collection surveys de MongoDB en fonction de son surveyId. Si l'enquête n'existe pas, elle retourne null et affiche un message.

2. Signature :
    async function edit(surveyId, newDonnee)

3. Paramètres :

    surveyId (int) : L'identifiant unique de l'enquête à modifier.
newDonnee (Object) : Un objet contenant les nouvelles données à mettre à jour pour l'enquête.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de la mise à jour si l'enquête est trouvée et modifiée avec succès. Si l'enquête n'existe pas, la fonction retourne null.


6. Cas d'utilisation :

     Utilisez cette fonction pour modifier les détails d'une enquête existante dans la base de données en fournissant son surveyId et les nouvelles données.


#### questionsModule.save
1. Description :
    Cette fonction asynchrone permet d'ajouter une nouvelle question à la collection questions dans MongoDB. Elle vérifie d'abord si une question avec le même questionId existe déjà. Si c'est le cas, la fonction lève une erreur pour éviter les doublons.

2. Signature :
    async function save(question)

3. Paramètres :

    question (Object) : Un objet contenant les détails de la question à ajouter. L'objet doit obligatoirement inclure un champ questionId unique.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de l'insertion si la question est ajoutée avec succès. Si une question avec le même questionId existe déjà, une erreur est levée.

6. Cas d'utilisation :
Utilisez cette fonction lorsque vous souhaitez ajouter de nouvelles questions à votre base de données tout en garantissant que chaque question a un questionId unique.


#### questionsModule.listquestion
1. Description :
    Cette fonction asynchrone récupère et affiche la liste de toutes les questions stockées dans la collection questions de MongoDB. Elle retourne un tableau contenant tous les objets de question.

2. Signature :
    async function listquestion()

3. Paramètres :

    Cette fonction ne prend aucun paramètre.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec un tableau d'objets représentant les questions récupérées. En cas d'erreur, une exception est levée.

6. Cas d'utilisation :

     Utilisez cette fonction lorsque vous souhaitez récupérer et examiner toutes les question présentes dans la base de données.

    

#### questionsModule.destroy
1. Description :
    Cette fonction asynchrone supprime une question spécifique de la collection questions dans MongoDB en fonction de son questionId. Si la question n'existe pas, elle retourne null et affiche un message.

2. Signature :
    async function destroy(questionId)

3. Paramètres :

    questionId (int) : L'identifiant unique de la question à supprimer.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de la suppression si la question est trouvée et supprimée avec succès. Si la question n'existe pas, la fonction retourne null.

6. Cas d'utilisation :

      Utilisez cette fonction lorsque vous avez besoin de supprimer une question spécifique de votre base de données en fournissant son surveyId.


#### answersModule.save
1. Description :
   Cette fonction asynchrone permet d'ajouter une nouvelle réponse à la collection answers dans MongoDB. Elle vérifie d'abord si une réponse avec le même answerId existe déjà. Si c'est le cas, la fonction lève une erreur pour éviter les doublons.

2. Signature :
   async function save(answer)

3. Paramètres :

   answer (Object) : Un objet contenant les détails de la réponse à ajouter. L'objet doit obligatoirement inclure un champ answerId unique.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de l'insertion si la réponse est ajoutée avec succès. Si une réponse avec le même answerId existe déjà, une erreur est levée.

6. Cas d'utilisation :
Utilisez cette fonction lorsque vous souhaitez ajouter de nouvelles réponses à votre base de données tout en garantissant que chaque réponse a un answerId unique.

#### answersModule.listanswer
1. Description :
   Cette fonction asynchrone récupère et affiche la liste de toutes les réponses stockées dans la collection answers de MongoDB. Elle retourne un tableau contenant tous les objets de réponse.

2. Signature :
  async function listanswer()


3. Paramètres :

   Cette fonction ne prend aucun paramètre.
    Retourne :

4. (Promise) : Retourne une promesse qui se résout avec un tableau d'objets représentant les réponses récupérées. En cas d'erreur, une exception est levée.

5. Cas d'utilisation :
Utilisez cette fonction pour obtenir une vue d'ensemble de toutes les réponses stockées dans la base de données.



#### answersModule.destroy
1. Description :
   Cette fonction asynchrone supprime une réponse spécifique de la collection answers dans MongoDB en fonction de son answerId. Si la réponse n'existe pas, elle retourne null et affiche un message.

2. Signature :
  async function destroy(answerId)


3. Paramètres :

   answerId (int) : L'identifiant unique de la réponse à supprimer.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de la suppression si la réponse est trouvée et supprimée avec succès. Si la réponse n'existe pas, la fonction retourne null.

6. Cas d'utilisation :
Utilisez cette fonction lorsque vous avez besoin de supprimer une réponse spécifique de votre base de données en fournissant son answerId.


#### answersModule.edit
1. Description :
   Cette fonction asynchrone permet de modifier une réponse spécifique dans la collection answers de MongoDB en fonction de son answerId. Si la réponse n'existe pas, elle retourne null et affiche un message.

2. Signature :

  async function edit(answerId, newDonnee)

3. Paramètres :

   answerId (int) : L'identifiant unique de la réponse à modifier.
newDonnee (Object) : Un objet contenant les nouvelles données à mettre à jour pour la réponse.

4. Retourne :

5. (Promise) : Retourne une promesse qui se résout avec le résultat de la mise à jour si la réponse est trouvée et modifiée avec succès. Si la réponse n'existe pas, la fonction retourne null.

6. Cas d'utilisation :
Utilisez cette fonction pour modifier les détails d'une réponse existante dans la base de données en fournissant son answerId et les nouvelles données.






## Authors

Seme Thiilo


