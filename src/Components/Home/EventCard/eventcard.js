import React from 'react';
import classes from "./eventcard.scss";

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import Slide from 'react-reveal/Slide';

const EventCard = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
    
        
        <div className={`${classes.card} card`}>
            <img src={`assets/${props.imgPath}`} alt="Initiative" className={`${classes.card_image} card_image`}/>
                <div className={`${classes.card_info} card_info`}>
                    <div className={`${classes.event} event`}>Events</div>
                <div className={`${classes.event_heading} event_heading`}>{props.eventName}</div>
                    <span style={{fontSize:"0.725rem"}}>{props.eventInfo}</span>
                <div className={`${classes.view_more} view_more`} onClick={onOpen}>View More</div>
                <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" animation isCentered>
        <ModalOverlay />
        <ModalContent>
                        <ModalHeader><span className={`${classes.modalTitle} modalTitle`}>{props.eventName}</span></ModalHeader>
          <ModalCloseButton />
                        <ModalBody>
                            <span className={`${classes.modalInfo} modalInfo`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat condimentum tempor. Fusce porttitor nisl et eros blandit, at pulvinar tortor tempor. Quisque id magna diam. Quisque consequat volutpat ex vel euismod. Quisque pulvinar luctus augue, et porttitor tellus hendrerit vitae. Donec porttitor mollis justo, eget tincidunt metus. Vivamus hendrerit nunc id fermentum sodales. Phasellus nec bibendum enim. Vivamus tincidunt placerat tellus vitae euismod. In hac habitasse platea dictumst. Suspendisse non dolor vel tellus dapibus elementum a sit amet risus.

            Donec mollis id orci at mattis. Fusce tincidunt et dolor eu dignissim. Pellentesque tempor sed dolor sed elementum. </span>
          </ModalBody>

          <ModalFooter>
            <div className={`${classes.button} button`} onClick={onClose}>Close</div>
          </ModalFooter>
        </ModalContent>
      </Modal>
                </div>
            </div>
            
        
    );
}

export default EventCard;