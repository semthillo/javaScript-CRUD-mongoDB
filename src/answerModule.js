const { con } = require("./config/db");

async function save(answer) {
  try {
    const db = await con();

    const existinganswer = await db
      .collection("answers")
      .findOne({ answerId: answer.answerId });

    if (existinganswer) {
      console.log(`une reponse avec l'ID ${answer.answerId} existe déjà.`);
      throw new Error(`erreur`);
    }

    const result = await db.collection("answers").insertOne(answer);

    console.log("reponse ajoutée avec succès!");
    return result;
  } catch (error) {
    console.error("Erreur lors de l'ajout de la reponse");
  }
}



async function listanswer() {
  try {
    const db = await con();

    const answers = await db.collection("answers").find({}).toArray();

    console.log("Liste des reponses :");
    answers.forEach((answer) => console.log(answer));
    
    

    return answers;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des reponses:",
      error.message
    );
    throw error;
  }
}



async function destroy(answerId) {
  try {
    const db = await con();

    const existinganswer = await db.collection("answers").findOne({ answerId });

    if (!existinganswer) {
      console.log(`Aucune reponse trouvée avec l'Id ${answerId}.`);
      return null;
    }

    const result = await db.collection("answers").deleteOne({ answerId });
    console.log(`reponse supprimé" avec succès`);
    

    return result;
  } catch (error) {
    console.error("Erreur lors de la suppression de la reponse:", error.message);
    throw error;
  }
}


async function edit(answerId, newDonnee) {
  try {
    const db = await con();

    
    const existinganswer = await db.collection("answers").findOne({ answerId });

    if (!existinganswer) {
      console.log(`Aucune reponse trouvée avec l'Id' ${answerId}.`);
      return null;
    }

    const result = await db
      .collection("answers")
      .updateOne({ answerId }, { $set: newDonnee });

    console.log(
      `La reponse avec l'ID' ${answerId} a été modifiée avec succès.`
    );

    return result;
  } catch (error) {
    console.error(
      "Erreur lors de la modification de la reponse:",
      error.message
    );
    throw error;
  }
}


module.exports = {
  save,
  listanswer,
  destroy,
  edit,
};
