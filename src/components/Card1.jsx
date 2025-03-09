import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function Card1() {
    return (
      <Card className="mt-6 w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Payment Solution App
          </Typography>
          <Typography className="text-xl">
          A mockup payments solution that demonstrates a full-stack approach to secure transactions. Built with <b className="text-xl 	font-weight: 700;">Node.js, Express.js, and React,</b> the app offers end-to-end functionality—from user signup to fund transfers—featuring <b className="text-xl 	font-weight: 700;">JWT authentication</b> and custom middleware for secure access.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button><a href="https://github.com/sanchit-560/Payment-Application-Mockup">Project Repository</a></Button>
        </CardFooter>
      </Card>
    );
  }