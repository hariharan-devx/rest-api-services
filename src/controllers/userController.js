import { user } from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const rows = await user.fin();
    return res.status(200).json({
      status: true,
      data: rows,
    });
  } catch (err) {
    return res.status(500).json({
      status: false,
      message: err.message,
    });
  }
};
