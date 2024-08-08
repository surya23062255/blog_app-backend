import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";

// get all questions
export async function getQuestions(req, res) {
  try {
    const q = await Questions.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

// post all question
export async function insertQuestions(req, res) {
  try {
    await Questions.insertMany({ questions, answers });
    res.json({ msg: "Data Saved Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete all questions
export async function deleteQuestions(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully.....!" });
  } catch (error) {
    res.json({ error });
  }
}

// Get all result
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

// Post all result
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;

    // Validate required fields
    if (!username || !result) {
      throw new Error("Username and result are required.");
    }

    // Create a new result document
    const newResult = new Results({
      username,
      result,
      attempts,
      points,
      achieved,
    });

    // Save the result document
    await newResult.save();

    // Respond with success message
    res.json({ msg: "Result Saved Successfully.....!" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
}

// Delete all result
export async function deleteResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully.....!" });
  } catch (error) {
    res.json({ error });
  }
}
