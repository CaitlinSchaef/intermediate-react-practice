import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useReducer } from "react";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import { useState } from "react";


//has to be a key value pair since it's an object, added players: 
const initialState = {
    players:  [
        // {
            // playerNumber: 0,
            // name: '',
            // health: 0,
            // attack: 0,
            // speed: 0
        // }
    ]
}
// state will be: state.players 

// const playerName = (state, action) => {
//     if(state.name === ''){
//         return false
//     } else if (state.name === " " ) {
//         return true 
//     }
// }



// this will change the player number?
const teamReducer =  (state, action) => {
    switch(action.type) {
      case 'addPlayer':
          console.log('addPlayer:', action)
          if (state.players.length < 4) {
              return {players:[...state.players, {name: action.name}] }
            }
            else if(state.players.length >= 4) {
                return state
            } 
        // case 'changeName':
        //     return { input: state.name = ''}
            //   case 'reset':
            //     return initialState
            default:
                throw new Error('Oh No!!!')
    }
}

// const playerDisplay = 
//                                 <Card style={{ width: '18rem' }}>
//                                     <Card.Body>
//                                         <Card.Title>{Player#}</Card.Title>
//                                         <Card.Text>
//                                         {Player Name}
//                                         {Health: }
//                                         {Attack: }
//                                         {Speed: }
//                                         </Card.Text>
//                                         <Button variant="primary">Go somewhere</Button>
//                                     </Card.Body>
//                                 </Card>

//nameText will be provided by whatever is typed in the input
const Body = () => {
    const [state, dispatch] = useReducer(teamReducer, initialState)
    console.log('state:', state)
    const [nameText, setNameText] = useState('')

    return (
        <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
        >
            <div>
                <Container className="mt-3 mb-3 ms-3 me-3">
                    <Row className="justify-content-md-center">
                    {/* Putting the class name for CSS on the column is what allows for customization of the text background
                    had to make xs=12 so that it was full width on the smallest screen */}
                        <Col xs={6} md={4} className="justify-content-center mb-3 text-center">
                            <input
                                value={nameText}
                                onChange={event => setNameText(event.target.value)}
                            /> 
                            <button onClick={() => dispatch({type: 'addPlayer', name: nameText})}>Submit</button>
                        </Col>
                        <Col xs={6} md={4} className="justify-content-center mb-3 text-center">
                            {state.players.map(player => (
                                <div>{player.name}</div>
                            ))}
                            {/* <div>
                                <h3><Players: /></h3>
                                <CardWrapper:
                            </div> */}

                        </Col>
                    </Row>
                </Container>
            </div>
        </ThemeProvider>
    )
}


function FuncEditTeam() {
    return (
        
        <Body />
        
    )
}


export default FuncEditTeam

// const Buttons = () => {
//     return (
//         <ButtonGroup aria-label="Stat Adjuster"> 
//                 <button variant="secondary"
//                     style={{ margin: 10 }}
//                     onClick={() => dispatch({ type: 'increaseByOne' })}
//                     >
//                     Increase 
//                     </button>

//                     <button variant="secondary"
//                     style={{ margin: 10 }}
//                     onClick={() => dispatch({ type: 'reset' })}
//                     >
//                     Reset Value 
//                     </button>

//                 <button variant="secondary"
//                     style={{ margin: 10 }}
//                     onClick={() => dispatch({ type: 'decreaseByOne' })}
//                     >
//                     Decrease 
//                     </button>
//                 </ButtonGroup>
//     )
// }