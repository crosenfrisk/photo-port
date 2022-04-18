import React, { useEffect } from "react";

function Modal( { currentPhoto }) {
    // Destructure props into currentPhoto in the Modal parameter. 
    // Then destructure currentPhoto properties into constants 
    // to assign their values into the modal:

    const { name, category, description, index } = currentPhoto;

    // We've created a basic modal with a backdrop and container. 
    // The modal also contains a title, a description, the selected image, and a button to close the modal. 
    // The photo name and description are currently hardcoded but will eventually need to contain the property values of the photo selected. 

    return (
        <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
          <p>{description}</p>
          <button type="button">
            Close this modal
          </button>
        </div>
      </div>
    );
  }
  
  export default Modal;