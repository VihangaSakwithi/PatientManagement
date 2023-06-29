import React from 'react'

export default function AddPatient({handleAddSubmit, handleCancelBtn}) {
  return (
    <>
    <h3 style={{ marginTop: '30px' }}>Add Patient</h3>
  <form class="form-group" onSubmit={handleAddSubmit}>
    <input class="form-control" type='text' name='first_name' placeholder='First Name' style={{ marginBottom: '10px' }} />
    <input class="form-control" type='text' name='last_name' placeholder='Last Name' style={{ marginBottom: '10px' }} />
    <input class="form-control" type='text' name='blood' placeholder='Blood Group' style={{ marginBottom: '10px' }} />

    <button class="btn btn-primary btn-sm" type='submit' style={{ marginLeft: '10px' }}>Submit</button>
    <button class="btn btn-secondary btn-sm" onClick={handleCancelBtn}>Cancel</button>
  </form>

    </>
  )
}
