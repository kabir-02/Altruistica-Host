import React, { useState } from "react"
import Grid from "@material-ui/core/Grid"
import { Button } from "../ButtonElement"
import Axios from "axios"

export default function EditProfile() {
  const [fields, setFields] = useState(null)
  const onChange = e => {
    const { name, value } = e.target

    setFields({ ...fields, [name]: value })
  }
  const validation = () => {
    if (Object.keys(fields).length !== 8) {
      return false
    }
    var validate = true
    Object.values(fields).map(obj => {
      if (obj === "" && validate === true) {
        validate = false
      }
      return ""
    })
    return validate
  }
  const onSubmit = () => {
    if (fields !== null) {
      if (validation()) {
        console.log("update values", fields)
        updateUserProfile(fields)
      } else {
        alert("Please fill the form")
      }
    }
  }
  const updateUserProfile = body => {
    Axios.post("http://localhost:8082/update_user_profile", body)
      .then(res => {
        console.log("udpate_user_profile api", res)
        if (res.status === 200) {
          alert("user updated successfully")
        }
      })
      .catch(err => console.log("error update_user_profile api", err))
  }

  return (
    <div className='info-section' id='blog'>
      <h2 className='title-section donh'>Let's Update your Details!</h2>
      <div className='form'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className='form-group'>
              <label className='label-sign' htmlFor='name'>
                Name
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='name'
                placeholder='Name'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='email'>
                Email
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='email'
                name='email'
                placeholder='Email'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='password'>
                Password
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='password'
                name='password'
                placeholder='Password'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='confirm-password'>
                Confirm Password
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='password'
                name='confirm_password'
                placeholder='Password'
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='form-group'>
              <label className='label-sign' htmlFor='country'>
                Phone
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='phone'
                placeholder='Phone'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='city'>
                City
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='city'
                placeholder='City'
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='State'>
                State
              </label>
              <input
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='state'
                placeholder='State'
                required
              />
            </div>
            <div className='form-group'>
              <label className='label-sign' htmlFor='country'>
                Country
              </label>
              <input
                required
                onChange={onChange}
                className='signup-input upsi'
                type='text'
                name='country'
                placeholder='Country'
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <Button onClick={() => onSubmit()}>Update Profile</Button>
    </div>
  )
}
