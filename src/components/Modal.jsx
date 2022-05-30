import { useRef } from 'react'
import styles from './modal.module.scss'

const Modal = ({ children, title, root }) => {
    const ref = useRef(null)

    const callback = () => {
        root.unmount();
        document.querySelector('#modal').remove();
        ref.current.removeEventListener('animationend', callback)
    }

    const handleCloseModal = () => {
        ref.current.classList.add(styles.fadeOut)
        ref.current.addEventListener('animationend', callback, { once: true })
    }

    return (
        <div ref={ref} className={styles.modalContainer}>
            <div className={styles.modalView}>
                <div className={styles.modalHeader}>
                    <div>{title}</div>
                    <div>
                        <button
                            onClick={handleCloseModal}
                            className={styles.closeButton}>
                            X
                        </button>
                    </div>
                </div>
                <div className={styles.modalContent}>{children}</div>
            </div>
        </div>
    )
}

export default Modal
