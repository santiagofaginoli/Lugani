/** @format */
import { dbConect } from "utils/mongoose";
import Resena from "/models/Resena";

dbConect();

export default async (req, res) => {
  const {
    method,
    query: { id },
    body,
  } = req;

  switch (method) {
    case "GET":
      try {
        const resena = await Resena.findById(id);
        if (!resena) return res.status(404).json({ msg: "resena not found" });
        return res.status(200).json(resena);
      } catch (error) {
        return res.status(200).json({"error": error.message});
      }
    case "PUT":
      try {
        const resena = await Resena.findByIdAndUpdate(id, body, {
            new: true
        })
        if (!body)return res.status(404).json({ msg: "resena not found" });
        return res.status(200).json(resena);
      } catch (error) {
        return res.status(500).json({"error": error.message});
        
      }

    case "DELETE":
      try {
        const deleteResena = await Resena.findByIdAndDelete(id)
        if (!deleteResena) return res.status(404).json({ msg: "resena not found" })
        return res.status(204).json()
      } catch (error) {
        return res.status(400).json({"error": error.message});
      }

    default:
      return res.status(400).json({ msg: "this method in not supported" });
  }

  return res.status(200).json("received");
};
