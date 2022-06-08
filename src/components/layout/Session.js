import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactModal from 'react-modal'
import axios from 'axios'

ReactModal.setAppElement('#root')

const Session = (props) => {

    const [sname, setSName] = useState()
    const [sdesc, setSDesc] = useState()
    const [fees, setFees] = useState()
    const [okOpened, setOkOpened] = useState(false)
    const [payOpened, setPayOpened] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const openModal = (modalType) => {
        if (modalType == 'pay') {
            setPayOpened(true)
            setOkOpened(false)
        } else if (modalType == 'ok') {
            setPayOpened(false)
            setOkOpened(true)
        }
    };

    const closeModal = modalType => () => {
        if (modalType == 'pay') {
            setPayOpened(false)
        } else if (modalType == 'ok') {
            setOkOpened(false)
        }
    };

    const toggleClass = () => {
        setIsActive(!isActive)
    }

    const handleChange = (_account) => {
        props.change(_account)
    }
    
        let navigate = useNavigate();

        return (
        <div className='Session'>
            <div className='Logo' />
            <div className='Text' />
            <div className='SName' />
            <div className='SDesc' />
            <div className='Fee' />
            <div className='Icon' />
            <div className='Min' />
                <input type='text' id='name' onChange={(e) => {
                    setSName(e.target.value)
                }} required />
                <input type='text' id='desc' onChange={(e) => {
                    setSDesc(e.target.value)
                }} />
            <input type='number' step={0.0001} id='fee' onChange={(e) => {
                setFees(e.target.value)                
                }} required/>
                <div className='CreateBtn' onClick={() => {
                    setOkOpened(true)
                }
                    
                    
                    
            } />
                <div className='UnderText' />
                <ReactModal
                    isOpen={okOpened}
                    onAfterOpen={
                        async () => {
                            if (window.ethereum) {
                                // Do something 
                                window.ethereum.request({ method: 'eth_requestAccounts' })
                                    .then(res => {
                                        // Return the address of the wallet
                                        handleChange(res[0]);
                                        axios.post("https://10.10.11.51:5000/put",
                                            { address: res[0] },
                                        ).then(res => {
                                            console.log(res)
                                        }).catch(err => {
                                            console.log(err)
                                        });
                                        toggleClass()
                                        setTimeout(() => {
                                            setOkOpened(false)
                                            navigate('/broadcast')
                                        }, 1000);
                                    })
                            } else {
                                alert("install metamask extension!!")
                            }
                        }
                    }
                    onRequestClose={closeModal('ok')}
                    contentLabel="My dialog1"
                    className="OkModal"
                    overlayClassName="Overlay"
                >
                    <div className={isActive? 'Text1' : 'Text'}></div>
                    <div className={isActive? 'LoadingIcon1' : 'LoadingIcon'}></div>
                    <div className='Under'></div>
                </ReactModal>
        </div>
    )
}

export default Session