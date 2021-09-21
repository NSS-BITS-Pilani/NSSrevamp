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

    function getWordStr(str) {
        if (str.split(" ").length <= 11) return str;
        return str.split(/\s+/).slice(0, 11).join(" ") + "...";
    }

    return (
    
        
        <div className={`${classes.card} card`}>
            <img src={props.imgPath} alt="Initiative" className={`${classes.card_image} card_image`}/>
                <div className={`${classes.card_info} card_info`}>
                <div className={`${classes.event} event`}>{props.eventType}</div>
                <div className={`${classes.event_heading} event_heading`}>{props.eventName}</div>
                    <span style={{fontSize:"0.725rem"}}>{getWordStr(props.eventInfo)}</span>
                <div className={`${classes.view_more} view_more`} onClick={onOpen}>View More</div>
                <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale" animation isCentered>
        <ModalOverlay />
        <ModalContent>
                        <ModalHeader><span className={`${classes.modalTitle} modalTitle`}>{props.eventName}</span></ModalHeader>
          <ModalCloseButton />
                        <ModalBody>
                            <span className={`${classes.modalInfo} modalInfo`}>
                                <img style={{borderRadius:"10px", margin:"0 auto 10px", width:"75%"}} src={props.imgPath} alt="Initiative" className={`${classes.card_image} card_image`}/>
                                {props.eventInfo}
                            </span>
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