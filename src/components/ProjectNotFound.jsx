import React from "react";
import { H2 } from "./text/Headers";
import Paragraph from "./text/Paragraph";

export function ProjectNotFound() {
  return (
    <div className="mt-10 pt-4 text-center w-2/3">
      <H2>Project not Found</H2>
      <Paragraph >This Project id does not exist, please check the url and try again.</Paragraph>
    </div>
  );
}