import * as React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    Button
} from "react-bootstrap";
// import { store } from "../redux/store";
// import { modal } from "../redux/reducers/loginModal";
import { loginModalActions } from "../redux/actions/loginModal";
import { connect } from "react-redux";
// import { store } from "../redux/store";


class NavBar extends React.Component<{
    onclick: () => {}
}> {
    render() {
        return (
            <Navbar
                staticTop={true}
                style={{ marginBottom: '0px' }}
            >
                <Navbar.Header >
                    <Navbar.Brand>
                        Knowsy
                    </Navbar.Brand>
                </Navbar.Header>

                <Nav pullRight={true}>
                    <Navbar.Form>
                        <NavItem>
                            <Button onClick={this.props.onclick}>
                                Login / Register
                            </Button>
                        </NavItem>
                    </Navbar.Form>
                </Nav>
            </Navbar>
        )
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        onclick: () => {
            dispatch(loginModalActions.openLoginModal());
        }
    }
}

export default connect(null, mapDispatchToProps)(NavBar);