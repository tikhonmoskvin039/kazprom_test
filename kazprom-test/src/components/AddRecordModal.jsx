import React, { useState } from 'react'
import { Portal } from 'react-portal'
import { useDispatch } from 'react-redux'
import { Button, Form } from 'react-bootstrap'
import { addItem } from '../store/types'
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody,
  MDBModalHeader,
  MDBModalTitle
} from 'mdb-react-ui-kit'

export default function AddRecordModal () {
  const dispatch = useDispatch()
  const [optSmModal, setOptSmModal] = useState(false)
  const [inputValue, setInputValue] = useState('')

  const toggleShow = () => setOptSmModal(!optSmModal)

  const handleModalOkClick = e => {
    e.preventDefault()
    dispatch(addItem(inputValue))
    setInputValue('')
  }

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <div>
        <Button
          className='m-2'
          size='sm'
          variant='success'
          onClick={toggleShow}
        >
          Add
        </Button>
      </div>
      {optSmModal && (
        <Portal node={document.getElementById('modal-root')}>
          <MDBModal
            staticBackdrop
            show={optSmModal}
            tabIndex='-1'
            setShow={setOptSmModal}
          >
            <MDBModalDialog centered size='sm'>
              <MDBModalContent
                className='p-3 mb-2 bg-light bg-gradient text-white rounded-5'
                bg='danger'
              >
                <MDBModalHeader>
                  <MDBModalTitle style={{color: "black"}}>Type something!</MDBModalTitle>
                  <Button
                    className='btn-close'
                    variant='none'
                    onClick={toggleShow}
                  ></Button>
                </MDBModalHeader>
                <MDBModalBody>
                  <div>
                    <Form className='d-flex' onSubmit={handleModalOkClick}>
                      <Form.Control
                        type='text'
                        placeholder='....'
                        value={inputValue}
                        onChange={handleInputChange}
                        required
                      />
                      <Button type='submit' variant='warning' className='m-1'>
                        OK
                      </Button>
                      <Button
                        className='m-1'
                        variant='danger'
                        onClick={() => setOptSmModal(false)}
                      >
                        Close
                      </Button>
                    </Form>
                  </div>
                </MDBModalBody>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </Portal>
      )}
    </>
  )
}
