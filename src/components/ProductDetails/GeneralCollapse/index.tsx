import { Collapse, IconButton } from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ReactNode, useState } from "react";
import { CardContainer, Description, DescriptionHeader } from "./styles";

interface IGeneralCollapse {
  children: ReactNode;
  title: string;
}
export const GeneralCollapse = ({ children, title }: IGeneralCollapse) => {
  const [open, setOpen] = useState(false);

  return (
    <CardContainer id="description">
      <DescriptionHeader
        title={title}
        onClick={() => setOpen(!open)}
        action={
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label="expand"
            size="small"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        }
      ></DescriptionHeader>
      <Collapse in={open}>
        <Description>{children}</Description>
      </Collapse>
    </CardContainer>
  );
};
