import { Card } from "react-bootstrap";

const Footer = () => {
    return(
        <Card style={{marginTop: "10px"}}>
            <Card.Body>
                <div style={{display: "flex", justifyContent: "center"}}>
                <span style={{margin: "auto"}}>LinkedIn</span>
                <span style={{margin: "auto"}}>Facebook</span>
                <span style={{margin: "auto"}}>Instagram</span>
                </div>
                <div>
                    <span>Thanks for using Todo List</span>
                </div>
            </Card.Body>
        </Card>
    )
}

export default Footer;