import * as React from 'react';
import {
    Modal,
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock
} from 'react-bootstrap';
import { HTML_IDS } from '../App';

export class LoginModal extends React.Component {
    props: {
        show: boolean;
        // onHide: () => void;
        // login: () => void;
        // register: () => void;
    };
    state: {
        registrationMode: boolean;
        retypeValidation: boolean;
    };

    constructor(props: { registrationMode: boolean }) {
        super(props);
        this.state = {
            registrationMode: false,
            retypeValidation: false
        };
    }

    toggleRegistrationMode = () => {
        this.setState({
            registrationMode: !this.state.registrationMode
        });
        this.focusRetypePW();

    }
    validate = () => {
        this.setState({
            retypeValidation:
                (document.getElementById(HTML_IDS.login_password) as HTMLInputElement).value ===
                (document.getElementById(HTML_IDS.login_retype_password) as HTMLInputElement).value
        }
        );
    }

    focusUsername = () => {
        (document.getElementById(HTML_IDS.login_username) as HTMLElement).focus();
    }
    focusRetypePW = () => {
        (document.getElementById(HTML_IDS.login_retype_password) as HTMLElement).focus();
    }

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={() => { }}
                onShow={this.focusUsername}
            >
                <Modal.Header>
                    <h2>Log in <small>( <a href="#" onClick={this.toggleRegistrationMode}>Register</a> )</small></h2>
                </Modal.Header>

                <Modal.Body>
                    <FormGroup>
                        <ControlLabel >Username:</ControlLabel>
                        <FormControl
                            id={HTML_IDS.login_username}
                            type="text"
                        />
                        <ControlLabel >Password:</ControlLabel>
                        <FormControl
                            id={HTML_IDS.login_password}
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup
                        validationState={
                            this.state.registrationMode ?
                                (this.state.retypeValidation ?
                                    'success' :
                                    'warning'
                                )
                                :
                                undefined
                        }
                        hidden={!this.state.registrationMode}
                    >
                        <ControlLabel >Re-type Password:</ControlLabel>
                        <FormControl
                            onChange={this.validate}
                            id={HTML_IDS.login_retype_password}
                            type="password"
                        />
                        <HelpBlock>
                            Password fields must match.
                        </HelpBlock>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="btn btn-primary"
                        onClick={
                            // this.state.registrationMode ?
                            //     this.props.register :
                            //     this.props.login
                            () => { }
                        }
                        disabled={
                            this.state.registrationMode ?
                                !this.state.retypeValidation :
                                false
                        }
                    >
                        {this.state.registrationMode ? 'Register' : 'Log In'}
                    </button>
                </Modal.Footer>
            </Modal >
        );
    }
}