import React from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const Dialog = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 300,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
});

const DialogContainer = styled(Dialog)`
    position: fixed;
    background: ${props => props.theme.buttonColor};
    border-radius: 0.5rem;
    height: 28rem;
    width: 27rem;
    bottom: 2rem;
    right: -4rem;
    margin: 7rem;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 42px solid transparent;
        border-top-color: ${props => props.theme.buttonColor};
        border-bottom: 0;
        border-right: 0;
        margin-left: -21px;
        margin-bottom: -42px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
    height: 40vh;
    justify-content: space-between;
`;

const FormContainer = styled.div`
    display: flex;
`;

const ListContainer = styled.div`
    background-color: ${props => props.theme.modalContainerColor};
    padding: 1rem;
    border-radius: 0.5rem;
`;

const InputField = styled.input`
    border: none;
    height: 2.5rem;
    width: 17rem;
    margin: 0.5rem 0;
    border-radius: 2rem;
    padding: 0 1rem;
    outline: none;
`;

const AddButton = styled.button`
    margin: 0 10px;
    border: none;
    width: 3.7rem;
    border-radius: 2rem;
    color: white;
    background-color: ${props => props.theme.confirmButtonColor};
`;

class NoteDialog extends React.Component {
    state = {
        showDialog: false
    };

    componentDidMount() {
        setTimeout(this.showDialog, 300);
    }

    showDialog = () =>
        this.setState(prevState => ({ showDialog: !prevState.showDialog }));

    render() {
        const { showDialog } = this.state;
        return (
            <PoseGroup>
                {showDialog && [
                    <DialogContainer key="dialog">
                        <Container>
                            <ListContainer>Test</ListContainer>
                            <FormContainer>
                                <InputField
                                    type="text"
                                    placeholder="e.g. Remember to like the repo!"
                                />
                                <AddButton type="button">Add</AddButton>
                            </FormContainer>
                        </Container>
                    </DialogContainer>
                ]}
            </PoseGroup>
        );
    }
}

export default NoteDialog;
