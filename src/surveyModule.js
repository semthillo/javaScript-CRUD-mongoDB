const { con } = require("./config/db");

async function save(survey) {
  try {
    const db = await con();

    const existingSurvey = await db
      .collection("surveys")
      .findOne({ surveyId: survey.surveyId });

    if (existingSurvey) {
      console.log(`une enquete avec l'ID ${survey.surveyId} existe déjà.`);
      throw new Error(`erreur`);
    }

    const result = await db.collection("surveys").insertOne(survey);

    console.log("Enquête ajoutée avec succès!");
    return result;
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'enquête");
  }
}

async function listSurvey() {
  try {
    const db = await con();

    const surveys = await db.collection("surveys").find({}).toArray();

    console.log("Liste des enquêtes :");
    surveys.forEach((survey) => console.log(survey));

    return surveys;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des enquêtes:",
      error.message
    );
    throw error;
  }
}

async function destroy(surveyId) {
  try {
    const db = await con();

    const existingSurvey = await db.collection("surveys").findOne({ surveyId });

    if (!existingSurvey) {
      console.log(`Aucune enquête trouvée avec l'Id ${surveyId}.`);
      return null;
    }

    const result = await db.collection("surveys").deleteOne({ surveyId });
    console.log(`enquete supprimé avec succès`);
    

    return result;
  } catch (error) {
    console.error("Erreur lors de la suppression de l'enquête:", error.message);
    throw error;
  }
}

async function edit(surveyId, newDonnee) {
  try {
    const db = await con();

    
    const existingSurvey = await db.collection("surveys").findOne({ surveyId });

    if (!existingSurvey) {
      console.log(`Aucune enquête trouvée avec l'Id' ${surveyId}.`);
      return null;
    }

    const result = await db
      .collection("surveys")
      .updateOne({ surveyId }, { $set: newDonnee });

    console.log(
      `L'enquête avec le surveyId ${surveyId} a été modifiée avec succès.`
    );

    return result;
  } catch (error) {
    console.error(
      "Erreur lors de la modification de l'enquête:",
      error.message
    );
    throw error;
  }
}

module.exports = {
  save,
  listSurvey,
  destroy,
  edit,
};
