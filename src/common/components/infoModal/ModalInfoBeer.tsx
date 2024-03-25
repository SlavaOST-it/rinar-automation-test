import React, {FC} from 'react';
import {Modal} from "antd";


type InfoModalProps = {
    isOpen: boolean,
    setIsOpenModal: (isOpen: boolean) => void,
    children: React.ReactNode
};

export const ModalInfoBeer: FC<InfoModalProps> = ({isOpen, setIsOpenModal, children}) => {

    const handleCancel = () => {
        setIsOpenModal(false)
    };

    return (
        <Modal
            title="Пивной уголок: Информация о пиве"
            open={isOpen}
            footer={null}
            width={600}
            onCancel={handleCancel}
        >
            {children}
        </Modal>
    )
};
