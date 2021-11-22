import {
  Container,
  TextField,
  Button,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material"
import React, { useState } from "react"
import { v4 as uuid } from "uuid"

//import { getData } from "./api/register"

export default function Home({ users }) {
  const [text, setText] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const registerUser = async (event) => {
    event.preventDefault()

    const requests = {
      id: uuid(),
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    }

    const data = await fetch("http://localhost:80/api/model/insert.php", {
      method: "POST",
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
    })

    const result = await data.json()
    const parsed = JSON.parse(result.message)
    console.log(parsed.name)

    setText("")
    setEmail("")
    setPhone("")
    setSubject("")
    setMessage("")
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ pt: 1 }}>
      <Typography>
        {process.env.title} - {process.env.PORT}
      </Typography>

      <Stack
        component="form"
        onSubmit={registerUser}
        mx="auto"
        direction="column"
        spacing={1}
      >
        <TextField
          name="name"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <TextField
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <TextField
          name="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
        />

        <TextField
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
          value={subject}
        />

        <TextField
          multiline
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <Button type="submit" variant="contained" name="submit">
          Register
        </Button>
      </Stack>

      {/* <List>
        {users.map((data) => (
          <ListItem key={uuid()}>{data.email}</ListItem>
        ))}
      </List> */}
    </Container>
  )
}

// export const getStaticProps = async () => {
//   const users = await fetch("http://localhost:80/api/model/read.php").then(
//     (result) => result.json()
//   )

//   console.log("DATA: ", users)
//   return { props: { users }, revalidate: 1 }
// }
