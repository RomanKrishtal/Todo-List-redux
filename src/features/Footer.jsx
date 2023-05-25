import { Card } from "react-bootstrap";

const Footer = () => {
    return(
        <Card style={{marginTop: "10px"}}>
            <Card.Body>
                <div style={{display: "flex", justifyContent: "center"}}>
                <span style={{margin: "auto"}}>
                    <a href="https://github.com/RomanKrishtal">
                    <img src="src/assets/icons8-github.svg"></img>
                    </a>
                </span>
                <span style={{margin: "auto"}}>
                    <a href="https://www.linkedin.com/in/roman-krishtal-52a5ab20b/">
                    <img src="src/assets/icons8-linkedin.svg"></img>
                    </a>
                </span>
                </div>
                <div>
                    <span>Thanks for using Todo List</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Footer;