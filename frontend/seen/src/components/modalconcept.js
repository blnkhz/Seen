import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import PostForm from "./notstolencode.js";

class Modalka extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="modalelocsalogato">
          Trigger Modal
        </button>
        <h1>ay dios mio </h1>
        <Modal
          isOpen={this.state.showModal}
        //   contentLabel="Minimal Modal Example"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
        >
          <PostForm />
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </Modal>
      </div>
    );
  }
}

//   const props = {};

//   ReactDOM.render(<Modalka {...props} />, document.getElementById('main'))

export default Modalka;
