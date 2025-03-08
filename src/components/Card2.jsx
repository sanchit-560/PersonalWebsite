import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Card2() {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          UTS Website Enhancement
          </Typography>
          <Typography>
          As a Junior Software Engineer at UTS, I enhanced the university’s website by resolving critical bugs and refining responsive UI components with React, TypeScript, and Tailwind CSS. This project ensured pixel-perfect alignment with Figma designs, boosting both student engagement and overall site performance.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
        <Button><a href="https://uts.edu.au/">Live Site link</a></Button>
        </CardFooter>
      </Card>
    );
  }