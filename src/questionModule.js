const { con } = require("./config/db");

async function save(question) {
  try {
    const db = await con();

    const existingquestion = await db
      .collection("questions")
      .findOne({ questionId: question.questionId });

    if (existingquestion) {
      console.log(`une question avec l'ID ${question.questionId} existe déjà.`);
      throw new Error(`erreur`);
    }

    const result = await db.collection("questions").insertOne(question);

    console.log("question ajoutée avec succès!");
    return result;
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'question");
  }
}


async function listquestion() {
  try {
    const db = await con();

    const questions = await db.collection("questions").find({}).toArray();

    console.log("Liste des question :");
    questions.forEach((question) => console.log(question));

    return questions;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des questions:",
      error.message
    );
    throw error;
  }
}



async function destroy(questionId) {
  try {
    const db = await con();

    const existingquestion = await db.collection("questions").findOne({ questionId });

    if (!existingquestion) {
      console.log(`Aucune question trouvée avec l'Id ${questionId}.`);
      return null;
    }

    const result = await db.collection("questions").deleteOne({ questionId });
    console.log(`question supprimé" avec succès`);
    

    return result;
  } catch (error) {
    console.error("Erreur lors de la suppression de la question:", error.message);
    throw error;
  }
}


async function edit(questionId, newDonnee) {
  try {
    const db = await con();

    
    const existingquestion = await db.collection("questions").findOne({ questionId });

    if (!existingquestion) {
      console.log(`Aucune question trouvée avec l'Id' ${questionId}.`);
      return null;
    }

    const result = await db
      .collection("questions")
      .updateOne({ questionId }, { $set: newDonnee });

    console.log(
      `La question avec l'ID' ${questionId} a été modifiée avec succès.`
    );

    return result;
  } catch (error) {
    console.error(
      "Erreur lors de la modification de la question:",
      error.message
    );
    throw error;
  }
}


module.exports = {
  save,
  listquestion,
  destroy,
  edit,
};
