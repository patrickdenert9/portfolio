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
    "Java",
    "Linux/UNIX",
    "Wireshark",
]


const SkillGrid = () => {
  return (
    <Grid container spacing={2}>
        <Grid xs={12} md={6}>
          <Paper elevation={12} sx={{height: 250, backgroundColor: "#30302f"}}>
            <Typography variant="h5" sx={{ margin:"auto", textAlign:"center", color: "#b399d4"}}>
              Web Development
            </Typography>
            <Grid container md={6} margin={"auto"} marginTop={1}>
                {webDev.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1, backgroundColor: "#b399d4"}}/>
                ))}
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
        <Paper elevation={12} sx={{height: 250, backgroundColor: "#30302f"}}>
        <Typography variant="h5" sx={{ margin:"auto", textAlign:"center", color: "#d4c399"}}>
              DevOps
            </Typography>
            <Stack marginTop={1}>
                {devOps.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1, backgroundColor: "#d4c399"}}/>
                ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
        <Paper elevation={12} sx={{height: 250, backgroundColor: "#30302f"}}>
        <Typography variant="h5" sx={{ margin:"auto", textAlign:"center", color: "#bad499"}}>
              Embedded Systems
            </Typography>
            <Stack marginTop={1}>
                {embedded.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1, backgroundColor: "#bad499"}}/>
                ))}
            </Stack>
          </Paper>
        </Grid>
        <Grid xs={12} md={6}>
        <Paper elevation={12} sx={{height: 250, backgroundColor: "#30302f"}}>
        <Typography variant="h5" sx={{ margin:"auto", textAlign:"center", color: "#d499ba"}}>
              Other
            </Typography>
            <Stack marginTop={1}>
                {other.map((skill) => (
                    <Chip key={skill} label={skill} sx={{margin: "auto", width:"150px", marginBottom: 1, backgroundColor: "#d499ba"}}/>
                ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>
  )
}

export default SkillGrid