const surveyModule = require("./surveyModule");
const questionModule = require("./questionModule");
const answerModule = require("./answerModule");

const srv = {
  surveyId: 6,
  name: "Enquête de Satisfaction 002",
  description:
    "Enquête visant à évaluer la satisfaction des clients concernant nos ventes de produits.",
  createdAt: new Date(),
  createdBy: {
    employeeName: "Jane Smith",
    employeeRole: "Responsable du service client",
  },
};

surveyModule.save(srv);
surveyModule.listSurvey();
surveyModule.destroy(2);

const donne = {
  name: "Enquête de Satisfaction ",
  description: "Enquête visant à évaluer votre satisfaction .",
  createdAt: new Date(),
  createdBy: {
    employeeName: " Smith",
    employeeRole: "Responsable",
  },
};
surveyModule.edit(3, donne);

const qsts = {
  questionId: 7,
  surveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
  options: { minValue: 1, maxValue: 5, step: 1 },
};
questionModule.save(qsts);

questionModule.listquestion();

questionModule.destroy(6);

const qst = {
  surveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
  options: { minValue: 1, maxValue: 5, step: 1 },
};

questionModule.edit(5, qst);

const rpns = {
  questionId: 8,
  title: "Meilleure reponse",
};
answerModule.save(rpns);

answerModule.listanswer();

answerModule.destroy(8);

const rps = {
  questionId: 8,
  title: "Meilleure reponse",
};
answerModule.edit(11, rps);
