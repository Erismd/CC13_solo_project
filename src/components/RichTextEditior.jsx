import React, { Component, PropTypes, useState } from "react";
import { useDispatch } from "react-redux";
import RichTextEditor from "react-rte";
import "../styles/styles.css";

export default function MyStatefulEditor() {
  const [value, setValue] = useState(RichTextEditor.createEmptyValue());
  const dispatch = useDispatch();

  function onChange(value) {
    setValue(value);
    dispatch({
      type: "ADD_CONTENTS",
      editcontents: value.toString("html"),
    });
    //   if (this.props.onChange) {
    // Send the changes up to the parent component as an HTML string.
    // This is here to demonstrate using `.toString()` but in a real app it
    // would be better to avoid generating a string on each change.
    // this.props.onChange(
    //    );
    //  }
  }

  return (
    <RichTextEditor
      id="texteditor"
      className="editor"
      value={value}
      onChange={onChange}
      name="bodyText"
      type="string"
      multiline
      variant="filled"
     
    />
  );
}
