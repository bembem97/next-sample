import { AppBar, Toolbar, Container } from "@mui/material"
import Link from "next/link"

export default function Header() {
  const toolbar = { justifyContent: "flex-end" }

  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar sx={toolbar}>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href={{ pathname: "/pagetwo", query: { name: "test" } }}>
            <a>Page 2</a>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
