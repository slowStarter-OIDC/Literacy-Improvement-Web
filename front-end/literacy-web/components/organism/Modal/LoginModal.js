import React from 'react'
import { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import KakaoLoginBtn from '../../atom/kakaoButton/kakaoLoginBtn';
import styles from './LoginModal.module.css';

const LoginModal = ({ show, maskClosable, onClose, }) => {
    const [isBrowser, setIsBrowser] = useState(false);
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = show ? (
        <div className={styles.container} visible={String(show)} onClick={maskClosable ? onMaskClick : null}>
            <div className={styles.modal}>
                <h2 className={styles.title}>바른말 배움터</h2>
                <h2 className={styles.login}>로그인</h2>
                <div className={styles.btn_container}>
                    <KakaoLoginBtn></KakaoLoginBtn>
                </div>
            </div>
        </div>
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


export default LoginModal;