/** @format */

import { dbConect } from "utils/mongoose";
import Resena from "/models/Resena";
dbConect();

export default async function handler(req, res) {
  const { body, method } = req;

  switch (method) {
    case "GET":
      try {
        const resenas = await Resena.find();
        res.status(200).json(resenas);
      } catch (error) {}

    case "POST":
      try {
        const newResena = new Resena(body);
        const savedResena = await newResena.save();
        return res.status(201).json(savedResena);
      } catch (error) {
        return res.status(500).json({ "error": error.message });
      }

    default:
      return res.status(400).json({ msg: "this method in not supported" });
  }
}
