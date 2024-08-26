import { Paper, Typography } from '@mui/material'
import React from 'react'
import Image from '../components/images/image.png'


const About = () => {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <Typography variant="h2" sx={{ margin:"auto", textAlign:"center" }}>Welcome</Typography>
      <img src={Image} alt='headshot' style={{ height: "500px", display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "10%", padding: "20px"}}/>
      <Paper elevation={12} sx={{backgroundColor: "#30302f", color: "#b399d4"}}>
      <Typography variant="h4" sx={{ margin:"auto", textAlign:"center" }}>About Me</Typography>
      <Typography variant="body1"  sx={{ margin:"auto", whiteSpace: "pre-line", color: "#b399d4", padding: "20px"}}>I am a recent Computer Engineering Graduate from UMASS Amherst. I am greatly interested in working on projects 
        that will improve the world and people's lives. My main expertise is in the Embedded Systems field, but I enjoy learning and working with any technology field. 
        My greatest accomplishment as a developer thus far has been being the Lead Embedded Systems Developer for the Remote Water Quality Monitor which could one day potentially lead 
        to improvements in health surrounding water quality.  
        <br></br>
        <br></br>
        After graduating I have been developing web development skills to learn new skills to become a more well-rounded developer. I have been mainly experimenting with different backend 
        frameworks, mainly Flask, Node.js, and Axum to see which one I prefer. Currently, I am going through training with Revature to further improve my skills and gain experience with
        full stack development, particularly with Spring and React as the main tools for the Backend and Frontend respectively.</Typography>
      </Paper>
    </div>
  )
}

export default About