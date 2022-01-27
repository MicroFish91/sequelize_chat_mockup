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

// One call
// class => sections
// sections => activities

// Two calls
// activities => questions
// questions => answers, replies-to-answer

// Front end

// Fetch user data
// Logging In => jsonwebtoken => user data gets loaded into redux
// including the classes you are enrolled in

// Fetch paths/activities
// paths/sections

// Fetch activityId
// Fetch Questions => answers => replies

// 2 Fetches

// /api/activities/1/questions
// Q/A

// naming convention routes

// Q/A
// QAR
// Q => A => R

// ["createdAt", "ASC"]

// /api/activities/:activityId
router.get("/:lessonId/questions", async (req, res) => {
  const { lessonId } = req.params;

  // const questionsList = await db.Questions.findAll({
  //   where: { activity_id: lessonId },
  //   order: [[Sequelize.count(db.Questions_upvotes), "ASC"]],
  //   include: [
  //     {
  //       model: db.Question_upvotes,
  //     },
  //     {
  //       model: db.Answers,
  //       include: [
  //         {
  //           model: db.Replies,
  //         },
  //         {
  //           model: db.Answer_upvotes,
  //         },
  //       ],
  //     },
  //   ],
  // });

  try {
    const questionsList = await db.sequelize.query(
      `
              SELECT q.id
              ,q.message
              ,q.user_id
              ,q."activity_id"
              ,q."createdAt"
              ,q."updatedAt"
              , COALESCE(qu.total,0) as total_upvotes,  array_agg(quser.user_id)
        FROM "Questions" q
        LEFT JOIN (
                  SELECT question_id, COUNT(1) AS total
                  FROM "Question_upvotes"
                  GROUP BY question_id
                  --order by total
                  ) qu ON q.id = qu.question_id
        LEFT JOIN (
                  SELECT question_id, user_id
                  FROM "Question_upvotes"
                ) quser ON quser.question_id = q.id
        GROUP BY q.id
              ,q.message
              ,q.user_id
              ,q."activity_id"
              ,q."createdAt"
              ,q."updatedAt"
              ,COALESCE(qu.total,0)
        ORDER BY total_upvotes DESC
      `
    );
    res.json(questionsList);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
