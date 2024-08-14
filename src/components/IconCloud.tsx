import { Typography } from "@mui/material";
import IconCloud from "./magicui/icon-cloud";
import React from "react";

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

export function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <Typography variant="h2" sx={{ margin:"auto", textAlign:"center" }}>Skills</Typography>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
