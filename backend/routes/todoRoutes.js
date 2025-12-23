const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// CREATE todo
 router.post("/", async (req, res) => {
   try {
       const todo = new Todo({
             title: req.body.title,
                 });

                     await todo.save();
                         res.json(todo);
                           } catch (error) {
                               console.error(error);
                                   res.status(500).json({ error: "Failed to create todo" });
                                    }
                                     });

                                     // GET all todos
                                     router.get("/", async (req, res) => {
                                       try {
                                           const todos = await Todo.find();
                                               res.json(todos);
                                                 } catch (error) {
                                                     res.status(500).json({ error: "Failed to fetch todos" });
                                                       }
                                                       });

                                                       // DELETE todo
                                                       router.delete("/:id", async (req, res) => {
                                                         try {
                                                             await Todo.findByIdAndDelete(req.params.id);
                                                                 res.json({ message: "Todo deleted" });
                                                                   } catch (error) {
                                                                       res.status(500).json({ error: "Failed to delete todo" });
                                                                        }
                                                                        });

                                                                         module.exports = router;

