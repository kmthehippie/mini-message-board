const db = require("../db/queries");

const GetMessages = async (req, res, next) => {
  try {
    const messages = await db.getAllMessages();
    res.render("index", { title: "Mini Message Board", messages: messages });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const GetCreateMessages = async (req, res, next) => {
  try {
    res.render("new", { title: "Mini Message board" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const PostCreateMessages = async (req, res, next) => {
  try {
    const { username, message } = req.body;
    const date = new Date();
    await db.insertMessage(username, message, date);
    console.log("Success inserting message");
    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
};
module.exports = {
  GetMessages,
  GetCreateMessages,
  PostCreateMessages,
};
