import React from "react";


class Modal extends React.Component {

    render() {
        return (
            <div onClick={this.props.onDismiss} style={{visibility:`${this.props.showModal}`}} className="back-drop">
                <div onClick={(e) => e.stopPropagation()} className="modal-wrapper">
                    <div className="modal-header">{this.props.header}</div>
                    <div className="modal-content">
                        {this.props.content}
                    </div>
                    <div className="modal-actions">
                        {this.props.actions}
                    </div>
                </div>
            </div>
        );
    }

}

export default Modal;
