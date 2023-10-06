import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "../../assets/css/home.css"
import { DrawerHeader } from "../layout/LayoutUtils";

export default function HomePage() {
  return (
    <Box component="main" className="layout-main">
      <DrawerHeader/>
      <Box className="layout-main-body">
        <Box component="div" className="home-main-contianer">
          <Stack direction="column">
            <span className="home-start-welcome">Welcome!</span>
            <Box className="about-me-box">
              <Typography variant="h4"> About Me</Typography>
              <Box className="about-me-info-box">
                <Typography variant="body1" textAlign="center" className="about-me-info-text" >
                  I'm Shane Tomasello, originally from New Jersey, and my journey has been one of adaptability and continuous learning. I achieved the rank of Eagle Scout in 2014, demonstrating my commitment to my home towns community and hard work. My higher educational path began in community college, where I pursued an associate's degree in Mechanical Engineering. However, my passion led me to switch gears, and I embarked on a Bachelor's degree in Computer Science at Rowan University.
                </Typography>
                <Typography variant="body1" textAlign="center" className="about-me-info-text">
                  Throughout my academic journey, I showcased my adaptability by quickly mastering coding and graduating with a commendable 3.4 GPA in just three years. I started my career as an intern at Dado, a startup, and continued to prove myself in the tech world. Subsequently, I became a Full Stack Engineer at Kenvue, where I honed my skills in technologies like LLMs, Kubernetes, TypeScript, React, Node.js, Python, and C#. I even had the opportunity to work closely with the OpenAI API and contribute to innovative projects that earned me my first patent pending for review.
                </Typography>
                <Typography variant="body1" textAlign="center" className="about-me-info-text">
                  Beyond my professional life, I have a passion for building things and embarking on adventures. I've constructed my own drone and enjoy working on personal coding projects in my spare time. Nature walks and planning out-of-state escapades provide the balance I need to stay motivated and inspired. In a nutshell, my journey from a mechanical engineering aspirant to a successful computer scientist has been a testament to my adaptability and passion for technology and innovation.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}