import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';

function FormSwitch() {
    let dark = useSelector(state => state.mode.darkTheme)
    return (
    <Form>
        <Form.Check 
        type="switch"
        id="custom-switch"
        label={dark ? "Light" : "Dark"}
        style={{color: dark ? "" : "black"}}
        />
    </Form>
    );
}

export default FormSwitch;