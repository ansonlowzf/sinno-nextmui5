import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

export const FaqAccordion = ({ id, question, answer }) => {
  return (
    <Accordion key={id}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`${id}-content`}
        id={`${id}-header`}
      >
        <Typography component="p" variant="h6">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};
