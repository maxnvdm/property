//commponent to be opened when notification bell is clicked

import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class Viewbell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
          <div className="dashboard container">
            <section>
                <strong><h2>Notifications</h2></strong>
                <input type="button" value="Click to view notifications" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="500" height="500" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <h3>Best new offers near you</h3>
                        <p>Here are some of the properties that match you</p>
                        <Card>
                          <CardImg top width="40%" src="/img/villa.jpg" alt="Card image cap" />
                          <CardBody>
                            <CardTitle>R5 350 000, Llandudno</CardTitle>
                            <CardSubtitle>Beach house available to rent or buy</CardSubtitle>
                            <CardText>Surrounded by nature, this beach house is in one of the most breath taking locations on the water’s edge in the exclusive seaside neighbourhood of Llandudno...</CardText>
                          </CardBody>
                        </Card>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
            </div>
        );
    }
}

