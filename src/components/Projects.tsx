import { Button, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import pond from './images/pond.jpeg'
import recipez from './images/recipez.png'

const projects = [
    {
        name: "Remote Water Quality Monitor",
        role: "Embedded Systems Lead",
        description: "The RWQM is a buoy designed to sit in a river/lake to take in water quality measurements and upload the data to a server for remote monitoring.",
        link: "https://github.com/PatrickDenert/RWQM",
        image: pond
    },
    {
        name: "RecipEZ",
        role: "Fullstack Developer",
        description: "RecipEZ is a website for users to share and view recipes of other users without any unnecessary information. Note: The recipes page may take up to 1 minute to fully load on the 1st render.",
        link: "https://recipez-v63x.onrender.com",
        image: recipez
    }
];

const Projects = () => {
  return (
    <div id='Projects'>
        <Typography variant="h2" sx={{ margin:"auto", textAlign:"center" }}>Projects</Typography>
        {projects.map((project) => (
            <div style={{padding:"10px"}}>
                <Link href={project.link} underline='none' target="_blank" sx={{ color: "inherit"}}>
                    <Paper elevation={12} sx={{backgroundColor: "#30302f", color: "#b399d4", width: "75%", margin: "auto"}}>
                        <Typography variant="h4" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>{project.name}</Typography>
                        <img src={project.image} alt={project.name} style={{ width:"97.5%" ,maxWidth: "90%", height: "500px", display: "block", marginLeft: "auto", marginRight: "auto", padding: "20px"}}/>
                        <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingBottom: "10px" }}>{project.description}</Typography>
                    </Paper>
                </Link>
            </div>
           
        ))}
    </div>
  )
}

export default Projects