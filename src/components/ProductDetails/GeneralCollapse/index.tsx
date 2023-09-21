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
        <Description>
          {children}
          {/* {Object.entries(creators).map((item) => {
            return (
              <Image
                key={item[0] + item[1].id}
                src={formatUrlImage(
                  item[1].thumbnail.extension,
                  item[1].thumbnail.path
                )}
                alt={item[1].firstName}
                width={103.45}
                height={150}
              />
            );
          })} */}
        </Description>
      </Collapse>
    </CardContainer>
  );
};
