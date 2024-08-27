import { Button, Card, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const Contact = () => {
  return (
    <div id='Contact'>
        <Typography  variant="h2" sx={{ margin:"auto", textAlign:"center" }}>Contact</Typography>
        <Paper elevation={12} sx={{backgroundColor: "#30302f", color: "#b399d4", width: "25%", margin: "auto"}}>
            <Stack spacing={2} margin="auto" textAlign="center" maxWidth="75%" paddingBottom={1} paddingTop={1}>
                <a href='mailto:patrickdenert@gmail.com' target='_black' style={{ color: "inherit", textDecoration: "none"}}>
                    <EmailIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>patrickdenert@gmail.com</Typography>
                </a>
                <a href='https://www.linkedin.com/in/patrick-denert-4327bb1bb/' target='_black' style={{ color: "inherit", textDecoration: "none"}}>
                    <LinkedInIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>LinkedIn</Typography>
                </a>
                <a href='https://github.com/PatrickDenert' target='_black' style={{ color: "inherit", textDecoration: "none"}}>
                    <GitHubIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>Github</Typography>
                </a>
                <a href='https://drive.google.com/file/d/1LWHDGd68ZDdQcrzxEvMcnJIjZp7eX4jB/view' target='_black' style={{ color: "inherit", textDecoration: "none"}}>
                    <DescriptionIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>Resume</Typography>
                </a>
            </Stack>

        </Paper>

    </div>
  )
}

export default Contact