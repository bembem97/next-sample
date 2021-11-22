import data from "./data.json"
import fs from "fs"

export const newData = (value) => {
  return new Promise((resolve, reject) => {
    data.push(value)

    fs.writeFile("pages/api/client/data.json", JSON.stringify(data), (err) => {
      if (err) reject(err)
      resolve((data) => console.log(data))
    })
  })
}

export default function handler(req, res) {
  try {
    newData({ id: req.body.id, name: req.body.name }).then((result) => result)
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ msg: "500" })
  }
}
