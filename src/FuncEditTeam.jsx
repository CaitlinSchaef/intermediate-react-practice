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
            // name: '', should I make this value nameText?
            // playerNumber: ,
            // health: 0,
            // attack: 0,
            // speed: 0
        // }
    ]
}
// state will be: state.players 


// this will change the player number?
const teamReducer =  (state, action) => {
    switch(action.type) {
        // This is how we add a player, and set it so as not to exceed 4
      case 'addPlayer':
          console.log('addPlayer:', action)
          if (state.players.length < 4) {
              return {players:[...state.players, {playerNumber: state.players.length + 1, name: action.name, health: 3, attack: 3, speed: 3}] }
            }
            else if(state.players.length >= 4) {
                return state
            } 

        // attached to increase health button to add 1
        case 'increaseHealthByOne':
            return {players: state.players.map(el => {
                if (el.playerNumber === action.who) {
                    el.health = el.health + 1
                }
                return (el)

            })}
        // attached to decrease health button to subtract 1
          case 'decreaseHealthByOne':
            console.log('decreaseByOne:', action)
            return {players: state.players.map(el => {
                console.log('the Array Map Number', el.playerNumber, ' vs ', 'the magic number of the click button dispatch',action.who)
                if (el.playerNumber === action.who) {
                    el.health = el.health - 1 
                }
                return (el)

            })}

            // attached to increase attack button to add 1
            case 'increaseAttackByOne':
            return {players: state.players.map(el => {
                if (el.playerNumber === action.who) {
                    el.attack = el.attack + 1
                }
                return (el)

            })}
            // attached to decrease attack button to subtract 1
          case 'decreaseAttackByOne':
            console.log('decreaseByOne:', action)
            return {players: state.players.map(el => {
                console.log('the Array Map Number', el.playerNumber, ' vs ', 'the magic number of the click button dispatch',action.who)
                if (el.playerNumber === action.who) {
                    el.attack = el.attack - 1 
                }
                return (el)

            })}

             // attached to increase speed button to add 1
             case 'increaseSpeedByOne':
                return {players: state.players.map(el => {
                    if (el.playerNumber === action.who) {
                        el.speed = el.speed + 1
                    }
                    return (el)
    
                })}
                // attached to decrease speed button to subtract 1
              case 'decreaseSpeedByOne':
                console.log('decreaseByOne:', action)
                return {players: state.players.map(el => {
                    console.log('the Array Map Number', el.playerNumber, ' vs ', 'the magic number of the click button dispatch',action.who)
                    if (el.playerNumber === action.who) {
                        el.speed = el.speed - 1 
                    }
                    return (el)
    
                })}
       
            default:
                throw new Error('Oh No!!!')
    }
}


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
                        <Col xs={6} md={4} className="justify-content-center mb-3 text-center">
                            <h3>Input Name: </h3>
                            <input
                                value={nameText}
                                onChange={event => setNameText(event.target.value)}
                                /> 
                            <button onClick={() => dispatch({type: 'addPlayer', name: nameText})}>Submit</button>
                            <br></br>
                            <br>
                            </br>
                            
                            {state.players.map(player => (
                                <div key={player.playerNumber}>
                                    <div>
                                        {player.name} {player.playerNumber}
                                    </div>
                                    <button onClick={() => dispatch({type: 'decreaseHealthByOne', who: player.playerNumber})}>Subtract</button>
                                    Health: {player.health}
                                    <button onClick={() => dispatch({type: 'increaseHealthByOne', who: player.playerNumber})}>Add</button>

                                    <button onClick={() => dispatch({type: 'decreaseAttackByOne', who: player.playerNumber})}>Subtract</button>
                                    Attack: {player.attack}
                                    <button onClick={() => dispatch({type: 'increaseAttackByOne', who: player.playerNumber})}>Add</button>

                                    <button onClick={() => dispatch({type: 'decreaseSpeedByOne', who: player.playerNumber})}>Subtract</button>
                                    Speed: {player.speed}
                                    <button onClick={() => dispatch({type: 'increaseSpeedByOne', who: player.playerNumber})}>Add</button>
                                </div>
                            ))}
                          
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
