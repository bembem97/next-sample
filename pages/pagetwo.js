import useSWR, { useSWRConfig } from "swr"
import React from "react"
import { v4 as uuid } from "uuid"
import {
  Typography,
  List,
  ListItem,
  Stack,
  TextField,
  Button,
} from "@mui/material"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function PageTwo() {
  const { data, error } = useSWR("./api/client", fetcher, {
    revalidateOnFocus: true,
  })
  const { mutate } = useSWRConfig()

  if (error) return <Typography color="error.main">Failed to load</Typography>

  if (!data) return <Typography color="info.main">Loading...</Typography>

  const submitData = async () => {
    await fetch("./api/client", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        id: uuid(),
        name: "Name 100",
      }),
    })
    mutate("./api/client")
    console.log("Mutation")
  }

  return (
    <>
      <Button type="submit" onClick={submitData}>
        Send
      </Button>

      <List>
        {data.map((data, index) => (
          <React.Fragment key={index}>
            <ListItem>{data.name}</ListItem>
          </React.Fragment>
        ))}
      </List>
    </>
  )
}
