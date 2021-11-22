import data from "./data.json"
//import fs from "fs"

export const getData = () => data

const newData = (address) => {
  // return new Promise((resolve, reject) => {
  //   data.push(address)
  //   fs.writeFile(
  //     "pages/api/register/data.json",
  //     JSON.stringify(data),
  //     (err) => {
  //       if (err) reject(err)
  //       resolve((data) => console.log(`Data saved => ${data}`))
  //     }
  //   )
  // })
}

export default async function handler(req, res) {
  try {
    //const postData = { id: req.body.id, name: req.body.name }
    //newData(postData).then((result) => result)

    res.status(200).json({ message: "Okay"})
  } catch (err) {
    res.status(500).json({ message: "Failed to load data." })
  }
}
