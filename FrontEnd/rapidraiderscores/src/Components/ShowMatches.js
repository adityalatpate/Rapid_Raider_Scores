import React, { useEffect, useState } from 'react';
import { fetchMatchData } from '../Services/fetchMatchData';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Components/ShowMatches.css";

const ShowMatches = () => {
    const [matches, setMatches] = useState([]);
    const [isFullTimeVisible, setIsFullTimeVisible] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
          setIsFullTimeVisible(prev => !prev);
      }, 1000);

      // Clear interval on component unmount
      return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Fetch match data when the component mounts
        fetchMatchData()
            .then(matchData => {
                // Set the fetched match data in state
                setMatches(matchData);
            })
            .catch(error => {
                console.error('Error fetching match data:', error);
            });
    }, []);

    return (

      <Container>
        <h2 style={{"font-size": "2rem", "font-weight": "bold", "text-align": "center", "align-items": "center", "display": "flex", "justify-content": "center", "padding-top": "1.5rem", "padding-bottom": "1.5rem"}}>Matches</h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {matches.map((match) => (
            <Col key={match.matchId}>
              <Card className="match-card border-0">
                <Card.Body>
                  <Card.Title className="text-center mb-3">Match No.: {match.matchId}</Card.Title>
                  <Row>
                    <Col xs={6}>
                      <Card.Text>{match.teamA}</Card.Text>
                    </Col>
                    <Col xs={6}>
                      <span className="score fs-2 text-darkmagenta">{match.teamAScore}</span>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Col xs={6}>
                      <Card.Text>{match.teamB}</Card.Text>
                    </Col>
                    <Col xs={6}>
                      <span className="score fs-2 text-darkmagenta">{match.teamBScore}</span>
                    </Col>
                  </Row>
                  <Card.Text className="text-center mt-3 text-muted">
                    {isFullTimeVisible ? "Full Time" : "Score"}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      // <div style={{textAlign: 'center'}}>
      //   <h2 style={{ textAlign: 'center', padding: '10px' }}>Matches</h2>
      //   <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      //     {matches.map(match => (
      //         <div key={match.matchId} style={{ border: '3px solid black', borderRadius: '5px', padding: '10px', margin: '10px' }}>
      //             <b>
      //               <span>Match Number: {match.matchId}</span><br />
      //               <span>{match.teamA} - <span style={{fontSize:'25px', color:'darkmagenta'}}>{match.teamAScore}</span>  </span> <span style={{ color: 'red' }}>{isFullTimeVisible ? ' Full Time' : 'Score'}</span> <span>  <span style={{fontSize:'25px', color:'darkmagenta'}}>{match.teamBScore}</span> - {match.teamB}</span>
      //             </b>
      //         </div>
      //     ))}
      //   </div>
      // </div>
  
    );
};

export default ShowMatches;
