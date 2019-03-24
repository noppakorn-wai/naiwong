import React from 'react'
import { css } from '@emotion/core'
import { Container, Navbar } from 'react-bootstrap'

const Header = () => (
  <Navbar
    bg="light"
    expand="lg"
    css={css`
      background-color: white !important;
      border-bottom: 2px solid #0067ff;
      height: 66px;
    `}
  >
    <Container>
      <Navbar.Brand href="#home">
        <span
          css={css`
            color: #0067ff;
          `}
        >
          Nai
        </span>
        <span
          css={css`
            color: #ff8800;
          `}
        >
          wong
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
)

export default Header
