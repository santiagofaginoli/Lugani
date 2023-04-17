/** @format */

import { dbConect } from "utils/mongoose";
import Task from "models/Task";
dbConect();

export default async function handler(req, res) {
  const { body, method } = req;

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
      } catch (error) {}

    case "POST":
      try {
        const newTask = new Task(body);
        const savedTask = await newTask.save();
        return res.status(201).json(savedTask);
      } catch (error) {
        return res.status(500).json({ "error": error.message });
      }

    default:
      return res.status(400).json({ msg: "this method in not supported" });
  }
}
