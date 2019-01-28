import React, { Component } from 'react';
// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNote } from '../../redux/actions/ActionCreator';
// Component
import Header from '../../components/Header/Header';
// SCSS
import './Home.scss';

class Home extends Component {
    render() {
        const notesList = this.props.notes.notesArray.map((note, index) => {
            return <p key={note.id}>
                {note.note}
            </p>
        });

        return (
            <div>
                <Header />
                <div className="notes-container">
                    <div className="notes-header">
                        <p>Notes</p>
                        <button onClick={() => { window.location.href = '#/add-note' }}>Add Note</button>
                    </div>
                    <div className="notes-box">
                        {notesList}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.addNoteReducer
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            addNote
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);