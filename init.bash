# sequelize model:generate --name users \
# --attributes email:string,password:string,firstName:string,lastName:string

# sequelize model:generate --name activities \
# --attributes title:string,description:string

# sequelize model:generate --name questions \
# --attributes message:string,user_id:integer,activity_id:integer

# sequelize model:generate --name answers \
# --attributes message:string,user_id:integer,question_id:integer

# sequelize model:generate --name replies \
# --attributes message:string,user_id:integer,answer_id:integer

# sequelize model:generate --name question_upvotes \
# --attributes user_id:integer,question_id:integer

# sequelize model:generate --name answer_upvotes \
# --attributes user_id:integer,answer_id:integer