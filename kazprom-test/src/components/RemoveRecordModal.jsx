import React, { useState } from 'react'
import { Portal } from 'react-portal'
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { removeItem } from '../store/types'
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit'

export default function RemoveRecordModal ({ record }) {
  console.log('record', record)
  const dispatch = useDispatch()
  const [optSmModal, setOptSmModal] = useState(false)

  const toggleShow = () => setOptSmModal(!optSmModal)

  return (
    <>
      <div>
        <Button className='m-2' size='sm' color='danger' onClick={toggleShow}>
          Delete
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
                className='p-3 mb-2 bg-danger bg-gradient text-white rounded-5'
                bg='danger'
              >
                <MDBModalHeader>
                  <MDBModalTitle>Are you sure?</MDBModalTitle>
                  <Button
                    className='btn-close'
                    variant='none'
                    onClick={toggleShow}
                  ></Button>
                </MDBModalHeader>
                <MDBModalBody>
                  <p> It will be impossible to restore the data...</p>

                  <div className='d-flex justify-content-between'>
                    <Button
                      className='btn'
                      variant='warning'
                      onClick={toggleShow}
                    >
                      No
                    </Button>
                    <Button
                      className='btn'
                      variant='dark'
                      onClick={() => dispatch(removeItem(record))}
                    >
                      Yes
                    </Button>
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
