import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { GrLinkNext } from "react-icons/gr";
import'./modal.css'

function MydModalWithGrid({ id,name, ...props }) {
    // Determine the modal content based on the id
    const getModalContent = () => {
      switch (id) {
        case "01":
          return `HTML, CSS, and JavaScript. The Foundation of the Web as we know it today
                 HyperText Markup Language (HTML): HTML is generally considered the backbone of web pages and provides the basic framework for creating a website. Language through which the content is organized into elements like headings, paragraphs, images and links to provide a meaning to the raw data with we interact.
                 CSS (Cascading Style Sheets): If HTML is the skeleton of a website, then CSS is its skin and clothing, determining how the site looks. CSS is a powerful tool which can help you turn the most unpretentious HTML structure into an elegant interface: from setting fonts and colors to intricate animations, layout schemes and outlines adapted for different devices. CSS gives the design and beauty on WEB so that the user can experience any device fluently.
                 JavaScriptWith JavaScript being the dynamic core of the vast majority of modern web applications, it brings static web pages to life. That provides website interactions, allows doing real time updates, form validation and smooth transitions. Simply put, JavaScript makes a website interactive allows users to interact meaningfully with the site leading into it feeling alive and responsive to their inputs.`;
        case "02":
          return `When it comes to web development, backend development mainly focuses on how a website or web application functions behind the scenes. It handles the server, databases, and other application logic, ensuring everything runs smoothly for the user. Regarding Node.js and Express.js, this pair consists of two extremely powerful tools for backend development:
                  Node.js: Node.js enables JavaScript execution on the server, not just within a client browser, expanding its capabilities. It's fast, efficient, and ideal for handling user requests, processing data, or retrieving information from databases. With Node.js, the same language (JavaScript) can be used for both front-end and back-end development, simplifying the process of building full-stack applications.
                  Express.js: Express.js is a minimal and flexible Node.js web application framework that provides robust features for both web and mobile apps. It simplifies backend development by aiding with routing (URLs), request handling (GET, POST, PUT, DELETE), and responding to users. It's lightweight and flexible, making it an efficient tool for developing RESTful APIs and even full-stack applications.`;
        case "03":
          return `Software Quality Assurance (SQA) is the process that verifies whether each stage of the software lifecycle has been met and ensures the software meets required standards. The goal is to maintain the highest quality of the product from development to delivery, resulting in an error-free and user-friendly application.
                  Prevention before Detection: SQA emphasizes preventing defects rather than detecting them after they occur. By applying quality principles from the early stages, like planning, design reviews, and process improvements, errors are minimized early in the software development life cycle (SDLC). This approach includes activities like code reviews, audits, and development standards to ensure consistency and quality from the start.
                  Testing: A core part of SQA is software testing, where the software is run in different conditions. Various types of testing include:
                  Unit testing: Testing individual components.
                  Integration testing: Checking if different parts of the application work well together.
                  System testing: Ensuring the software as a whole meets its requirements.
                  User Acceptance Testing (UAT): Ensuring the software works for end users as expected.
                  Process improvement: SQA focuses not only on product testing but also on refining the development processes. Frameworks such as ISO standards or CMMI (Capability Maturity Model Integration) help organizations establish structured, efficient processes to consistently deliver quality software.`;
        case "04":
          return `User Interface (UI) Design: This focuses on the visual elements of the app, such as buttons, menus, icons, typography, color schemes, and overall layout. The purpose of UI design is to create a visually appealing and consistent interface that aligns with the app's brand while ensuring intuitive use. A good UI makes it easy for users to navigate and interact with different screens seamlessly.
                  User Experience (UX) Design: This is all about how the app functions, focusing on flow and usability. It aims to create a logical, smooth, and enjoyable experience by addressing user needs, behaviors, and goals.
                  Wireframing: Drafting blueprints to highlight key features and user journeys.
                  Prototyping: Building interactive versions to evaluate user interactions.
                  Usability testing: Gathering feedback from real users to fix any usability issues.
                  Consistency: Ensuring consistent button styles, color schemes, fonts, and interaction patterns helps users feel comfortable with the app and reduces cognitive overload, resulting in more intuitive navigation.`;
        default:
          return "This is default content.";
      }
    };
  
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-black">
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="grid-example text-black">
          <Container>
            {getModalContent()}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function App({id, name}) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button className='read-more'  onClick={() => setModalShow(true)}>
        <div className='flex items-center gap-3 '>
        read more <GrLinkNext></GrLinkNext>
        </div>
      </Button>

      <MydModalWithGrid id={id} name={name} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;
