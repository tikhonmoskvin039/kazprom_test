import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import RemoveRecordModal from './components/RemoveRecordModal'
import AddRecordModal from './components/AddRecordModal'
import Loader from './components/Loader'
import './App.css'

const App = () => {
  const records = useSelector((state) => state?.records?.records)

  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 2000)

  return (
    <>
      {loading ? (
        <Container
          className="d-flex justify-content-center align-items-center"
          style={{ height: '100vh' }}
        >
          <Loader />
        </Container>
      ) : (
        <Container className="d-flex flex-column justify-content-between align-items-center p-5">
          <h1
            style={{
              textShadow: '2px 2px 4px lightblue',
              marginBottom: '2rem',
            }}
          >
            created by Moskvin Tikhon S.
          </h1>
          <div>
            <AddRecordModal />
          </div>
          {records.length > 0 ? (
            <>
              {' '}
              {records.map((record) => (
                <div
                  className="d-flex justify-content-between align-items-center w-75"
                  style={{
                    border: '1px solid blue',
                    borderRadius: '10px',
                    boxShadow: '1px 1px 2px orangered',
                    padding: '0 10px',
                    marginBottom: '10px',
                  }}
                  key={record}
                >
                  {record}
                  <RemoveRecordModal record={record} />
                </div>
              ))}
            </>
          ) : (
            <h2 style={{ marginTop: '5rem' }}>
              OOOOps...There is no one record yet!
            </h2>
          )}
        </Container>
      )}
    </>
  )
}

export default App
