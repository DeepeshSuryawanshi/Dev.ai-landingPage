import React from 'react'
import "./css/navbar.css"

export default function Navbar() {
  return (
      <nav class="navbar position-sticky navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid px-5">
              <a class="navbar-brand" href="#">Dev.ai</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <ul class="navbar-nav">
                      <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#about">About</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#work">Work</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#footer">Content</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
}
