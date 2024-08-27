import { Card, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';

const Contact = () => {
  return (
    <div id='Contact'>
        <Typography  variant="h2" sx={{ margin:"auto", textAlign:"center" }}>Contact</Typography>
        <Paper elevation={12} sx={{backgroundColor: "#30302f", color: "#b399d4", width: "75%", margin: "auto"}}>
            <Typography variant="h4" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>Contact Information</Typography>
            <Stack direction="row" spacing={24} paddingLeft={15} textAlign="center">
                <div>
                    <EmailIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>patrickdenert@gmail.com</Typography>
                </div>
                <div>
                    <LinkedInIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>LinkedIn</Typography>
                </div>
                <div>
                    <GitHubIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>Github</Typography>
                </div>
                <div>
                    <DescriptionIcon />
                    <Typography variant="body1" sx={{ margin:"auto", textAlign:"center", paddingTop: "10px" }}>Resume</Typography>
                </div>
            </Stack>

        </Paper>

    </div>
  )
}

export default Contact