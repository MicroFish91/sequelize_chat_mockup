const db = require("../models");
const express = require("express");
const router = express.Router();

// ----- Lessons -----
/*
  @method: GET
  @route: /classes/:classId/lessons
  @desc: Get a list of lessons for a given class
  @priv: paid user
*/

/*
  @method: GET
  @route: /lessons/:lessonId
  @desc: Query a specific lesson
  @priv: paid user
*/

/*
  @method: Post
  @route: /lessons
  @priv: admin
*/

// ----- Questions -----
/*
  @method: GET
  @route: /lessons/:lessonId/questions
  @desc: Get a list of all questions for a lesson
  @priv: paid user
*/

/*
  @method: GET
  @route: /questions/:questionId
  @desc: Query a specific question
  @priv: paid user
*/

// ------ Answers ------
/*
  @method: GET
  @route: /questions/:questionId/answers
  @desc: Get a list of all answers for a lesson
  @priv: paid user
*/

/*
  @method: GET
  @route: /answers/:answerId
  @desc: Query a specific answer
  @priv: paid user
*/

// ------ Reply-to-Answer ------
/*
  @method: GET
  @route: /answers/:answerId/replies
  @desc: Get a list of all answers for a lesson
  @priv: paid user
*/

router.get("/:lessonId/questions", async (req, res) => {
  const { lessonId } = req.params;

  const questionsList = await db.Questions.findAll({
    where: { activity_id: lessonId },
    include: [
      {
        model: db.Question_upvotes,
      },
      {
        model: db.Answers,
        include: [
          {
            model: db.Replies,
          },
          {
            model: db.Answer_upvotes,
          },
        ],
      },
    ],
  });

  res.json(questionsList);
});

module.exports = router;
