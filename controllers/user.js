import { db } from "../database/db.js";

export const postUser = (req, res) => {
  const { name, address, email, password } = req.body;

  const q =
    "insert into users(`name`, `address`, `email`, `password`) values (?,?,?,?)";

  db.query(q, [name, address, email, password], (error, result) => {
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

result.length === 0;

export const login = (req, res) => {};
