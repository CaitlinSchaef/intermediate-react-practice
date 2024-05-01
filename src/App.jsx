import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TeamContext } from "./main"
import { useContext } from "react"

const Title = () => {
  return (
    <h1>
      Current Team Display:
    </h1>
  )
}

const Body = () => {
  const {state} = useContext(TeamContext)
  console.log('main page:', state)
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs']}
      minBreakpoint="xs"
    >
      <Container className="mt-3 mb-3 ms-3 me-3">
        <Row className="justify-content-md-center">
          {/* Putting the class name for CSS on the column is what allows for customization of the text background
          had to make xs=12 so that it was full width on the smallest screen */}
          <Col xs={6} md={4} className="justify-content-center mb-3 text-center">
            {state.players.map(player => (
                                <div key={player.playerNumber}>
                                    <div>
                                     Player {player.playerNumber}  Name: {player.name} Health: {player.health} Attack: {player.attack} Speed: {player.speed}
                                    </div>
                                </div>
                            ))}
          </Col>
        </Row>
      </Container>
    </ThemeProvider>
  )
}

function App() {
  return (
    <div className="p-5">
      <Link to='/EditTeam'> 
      <button> Edit Team Here  </button>
      </Link>
      <br></br>
      <br></br>
      <Title />
      <Body />
    </div>
  )
}


export default App
