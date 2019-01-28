import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
import { addNote } from '../../redux/actions/ActionCreator';
// Components
import Header from '../../components/Header/Header';
// SCSS
import './AddNote.scss';
class AddNote extends Component {

    constructor(props) {
        super(props)

        // State loaded for addNote input field
        this.state = {
            noteDescription: ''
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="add-note-container">

                    {/* -------- Textarea -------- */}
                    <textarea
                        rows="5" type="text" placeholder="Note Description"
                        value={this.state.noteDescription}
                        onChange={this.onChangeNoteText.bind(this)} />

                    {/* -------- Submit Button -------- */}
                    <button type="button" onClick={this.onSubmitNote.bind(this)}>Submit Note</button>

                    {/* -------- Back to Home Link -------- */}
                    <a onClick={() => { window.location.href = '#/home' }}>Go back to home</a>
                </div>
            </div>
        )
    }

    // On change event triggered for every change in input field
    // Setting current state of input field to noteDescription state
    onChangeNoteText(e) {
        this.setState({
            noteDescription: e.target.value
        })
    }

    // Submit function to triggered onClick button
    onSubmitNote() {
        // When onClick action is triggered,
        // state (noteDescription) is passed to addNote function in actionCreator.js.
        this.props.addNote(this.state.noteDescription);

        // Clear text field after submitting
        this.setState({ noteDescription: '' });
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote: (noteContent) => {
            dispatch(addNote(noteContent));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNote);
