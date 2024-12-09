import { query } from "../database/db.js";

// Ammar Alfaysyah
export async function createNote(req, res) {
  const { title, note, datetime } = req.body;

  if (!title || !note || !datetime) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const command = "INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)";
  const values = [title, datetime, note];

  try {
    await query(command, values);
    return res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error creating note", error });
  }
}

// Farkhan Roihan
export const updateNote = async (req, res) => {
  const { noteID } = req.params;
  const { title, datetime, note } = req.body;

  try {
    const queryUpdate =
      "UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?";

    const result = await query(queryUpdate, [title, datetime, note, noteID]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    return res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    console.error("Error updating note:", error);
    return res.status(500).json({ error: "Failed to update note" });
  }
};

// Saryal
export async function getAllNotes(req, res) {
  const command = "SELECT * FROM notes";
  try {
    const rows = await query(command);
    return res.status(200).json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching notes", error });
  }
}

// Farkhan
export const getOneNote = async (req, res) => {
  const { id } = req.params;

  try {
    const getNote = "SELECT * FROM notes WHERE id = ?";

    const result = await query(getNote, [id]);

    res.json(result);
  } catch (error) {
    console.error("notes gagal diambil", error);
    return res.status(500).json({ error: "gagal mengambil notes" });
  }
};

//fakhriyyah deletenote//
export async function deleteNote(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Missing note ID" });
  }

  const command = "DELETE FROM notes WHERE id = ?";
  const values = [id];

  try {
    const result = await query(command, values);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error deleting note", error });
  }
}
