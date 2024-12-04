import { query } from "../database/db.js";

export async function createNote(req, res) {
    const { title, note, datetime } = req.body;

    if (!title || !note || !datetime) {
        return res.status(400).json({ message: "Missing fields" });
    }

    const command = "INSERT INTO notes (title, note, datetime) VALUES (?, ?, ?)";
    const values = [title, note, datetime];

    try {
        await query(command, values);
        return res.status(201).json({ message: "Note created successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Error creating note", error });
    }
}

export async function getAllNotes(req, res) {
  const command = "SELECT * FROM notes";
    try {
        const [rows] = await query(command);
        return res.status(200).json(rows);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching notes", error });
    }
}
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