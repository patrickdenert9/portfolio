import { Paper, Typography } from "@mui/material";
import IconCloud from "./magicui/icon-cloud";
import React from "react";
import SparklesText from "./magicui/sparkles-text";
import Grid from '@mui/material/Unstable_Grid2';
import SkillGrid from "./SkillGrid";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "amazonaws",
  "postgresql",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "spring",
  "c",
  "python",
  "arduino",
  "wireshark",
  "linux",
  "postman"
];

export function Skills() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <Typography variant="h2" sx={{ margin:"auto", textAlign:"center" }}>Skills</Typography>
      <IconCloud iconSlugs={slugs} />
      <SkillGrid/>
    </div>
  );
}
