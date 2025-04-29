import { db } from "../database/db.js";
import bcrypt from "bcryptjs";

export const postUser = (req, res) => {
  const { name, address, email, password } = req.body;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // console.log(hashedPassword);

  const q =
    "insert into users(`name`, `address`, `email`, `password`) values (?,?,?,?)";

  db.query(q, [name, address, email, hashedPassword], (error, result) => {
    if (error) return res.send(error);
    return res.send({ message: "User has been created", result });
  });
};

// axios.get("http://localhost:5055/api/get-user-by-id/${id}")
export const getUserById = (req, res) => {
  const id = req.params.pid;
  const q = "select * from users where id = ?";
  db.query(q, [id], (error, result) => {
    if (error) return res.status(500).send(error);
    return res.status(200).send(result[0]);
  });
};

export const getUser = (req, res) => {
  const q = "select * from users";
  db.query(q, (error, result) => {
    if (error) return res.status(500).send("Error while executing query");
    return res.status(200).send(result);
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const q = "delete from users where id = ?";
  db.query(q, [id], (error, result) => {
    if (error) return res.status(500).send(error);
    return res.status(200).send("User has been deleted");
  });
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, address, email, password } = req.body;
  const q =
    "update users set `name` = ?, `address` = ?, `email` = ?, `password` = ? where id = ?";
  db.query(q, [name, address, email, password, id], (error, result) => {
    if (error) return res.status(500).send(error);
    return res.status(200).send("User has been updated");
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  const q = "select * from users where email = ?";
  db.query(q, [email], (error, result) => {
    // [{name: }]
    if (error) return res.status(500).send(error);
    if (result.length === 0) return res.status(404).send("User not found");

    const isPasswordCorrect = bcrypt.compareSync(password, result[0].password);

    if (isPasswordCorrect) {
      const { password, ...other } = result[0];
      return res.status(200).send(other);
    }
    return res.status(400).send("Wrong password or username");
  });
};
