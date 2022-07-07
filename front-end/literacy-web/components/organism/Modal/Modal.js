import React from 'react';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import ModalBox from '../../atom/ModalBox/ModalBox';
import ModalTable from '../../molecule/table/ModalTable';

const Modal = ({ show, maskClosable, onClose, children, title, data }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    // const handleCloseClick = (e) => {
    //     e.preventDefault();
    //     onClose();
    // };

    const modalContent = show ? (
        <StyledModalOverlay visible={show} onClick={maskClosable ? onMaskClick : null}>
            <StyledModal>
                <StyledModalHeader>
                    <a href="#" onClick={() => onClose()}>
                        x
                    </a>
                </StyledModalHeader>
                {title && <StyledModalTitle>오픈사전에 등록하기</StyledModalTitle>}
                <StyledModalBody>{children}
                    <ModalBox>{title}</ModalBox>
                    <ModalTable title={title} data={data} handleCloseClick={onClose}></ModalTable>
                </StyledModalBody>
            </StyledModal>
        </StyledModalOverlay>
    ) : null;

    if (isBrowser) {
        return ReactDOM.createPortal(
            modalContent,
            document.getElementById("modal-root")
        );
    } else {
        return null;
    }
};

const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: ${(props) => (props.visible ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: default;
  `;

const StyledModal = styled.div`
    background: white;
    width: 500px;
    height: 600px;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  `;

const StyledModalHeader = styled.div`
display: flex;
justify-content: flex-end;
font-size: 25px;
`;

const StyledModalBody = styled.div`
    padding-top: 10px;
    display: block;
  `;


const StyledModalTitle = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    display: block;
    justify-content: flex-end;
    font-size: 25px;
    text-align: center;
    font-weight: bold;
  `;


export default Modal;