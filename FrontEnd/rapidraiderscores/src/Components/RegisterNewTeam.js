// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
// import { useState } from 'react';
// import { sendTeamData } from '../Services/sendTeamData';

// function RegisterNewTeam(props) {
//     const [teamName, setTeamName] = useState('');

//     const closeAddTeamModal = () => {
//         setTeamName('');
//         props.onHide();
//     }
//     const addTeam=async () => {
//         console.log("Team Name: ", teamName);
    
//         // Check if teamName is not empty
//         if (!teamName.trim()) {
//             console.error("Team name cannot be empty.");
//             return;
//         }

//         // Call sendTeamData function to send team data
//         try {
//             const data = await sendTeamData({ teamName });
//             console.log("Team data sent successfully:", data);
//             // Clear teamName after successful submission
//             setTeamName('');
//             props.onHide();
//             props.onAddTeam();
//         } catch (error) {
//             console.error("Error sending team data:", error);
//             window.alert("Some Error Occurred. Please Try again later. After Some time!!");
//             // Clear teamName on error as well
//             setTeamName('');
//         }    
//     }
//         return (
//             <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//             >
//             <Modal.Header>
//                 <Modal.Title id="contained-modal-title-vcenter">
//                 Register New Team Here.
//                 </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <Form>
//                     <Form.Group controlId="formTeamName">
//                     <Form.Label>Team Name:</Form.Label>
//                     <Form.Control 
//                         type="text" 
//                         value={teamName} 
//                         onChange={(e) => setTeamName(e.target.value)} 
//                         placeholder="Enter team name" 
//                     />
//                     </Form.Group>
//                 </Form>
//                 <br />
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button onClick={addTeam}>Add</Button>
//                 <Button onClick={closeAddTeamModal}>Close</Button>
//             </Modal.Footer>
//             </Modal>
//         );
// }
// export default RegisterNewTeam;