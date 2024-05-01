import { Link } from "react-router-dom"
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FuncEditTeam from "./FuncEditTeam"





function EditTeam() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Home'}</Link>
      <h1>Edit Team Page</h1>
      <FuncEditTeam />
    </div>
  )
}


export default EditTeam
