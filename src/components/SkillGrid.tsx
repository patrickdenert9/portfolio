import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Chip, ListItem, Paper, Stack, Typography } from "@mui/material";
import { List } from 'lucide-react';

const webDev = [
    "Spring (Java)",
    "HTML",
    "CSS",
    "Material UI",
    "JavaScript",
    "TypeScript",
    "React",
    "SQL (PostgreSQL)",
    "Postman",
]

const devOps = [
    "AWS EC2",
    "AWS S3",
    "AWS RDS",
    "Docker",
]

const embedded = [
    "Embedded C",
    "Arduino",
    "PuTTY",
    "Analog Sensors",
    "Digital Sensors"
]

const other = [
    "Python",
    "C",
    "Linux/UNIX",
    "Cadence",
    "Wireshark",
]


const SkillGrid = () => {
  return (
    <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Paper elevation={12} sx={{height: 400}}>
            <Typography variant="h5" sx={{ margin:"auto", textAlign:"center" }}>
              Web Development
            </Typography>
            <Stack>
                {webDev.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1}}/>
                ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
          <Paper elevation={12} sx={{height: 400}}>
            <Typography variant="h5" sx={{ margin:"auto", textAlign:"center" }}>
              DevOps
            </Typography>
            <Stack>
                {devOps.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1}}/>
                ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
          <Paper elevation={12} sx={{height: 400}}>
            <Typography variant="h5" sx={{ margin:"auto", textAlign:"center" }}>
              Embedded Systems
            </Typography>
            <Stack>
                {embedded.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1}}/>
                ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
          <Paper elevation={12} sx={{height: 400}}>
            <Typography variant="h5" sx={{ margin:"auto", textAlign:"center" }}>
              Other
            </Typography>
            <Stack>
                {other.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1}}/>
                ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
  )
}

export default SkillGrid