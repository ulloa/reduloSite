import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const Syllabus = (props) => {

  if (props.currentStep !== 8) {
    return null
  }

  return(
    <div className="form-group">
      <label htmlFor="syllabus">Syllabus of your class</label>
      <Editor
        editorState={props.editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={(editorState) => props.handleChange({target: {name: 'editorState', value: editorState}})}
      />
    </div>
  );
}

export default Syllabus;
