import { Container } from "@mui/material"
import Header from "../mainsection/Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container component="main" sx={{ pt: 3 }}>
        {children}
      </Container>
    </>
  )
}
