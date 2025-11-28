import React,{useState} from 'react'

const UserForm = () => {
  const [user,setUser] = useState({
    name:"admin",
    email:"example@gmail.com",
    mobile:"788xxx",
    password:"1235"
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container p-3 my-3'>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            
            <label className='form-label'>FullName</label>
            <input 
              type="text"
              placeholder='enter your name'
              className='form-control'
              name='name'
              value={user.name}
              onChange={handleChange}
            />

            <label className='form-label'>Email</label>
            <input 
              type="email"
              placeholder='enter your email'
              className='form-control'
              name='email'
              value={user.email}
              onChange={handleChange}
            />

            <label className='form-label'>Mobile</label>
            <input 
              type="tel"
              placeholder='enter your mobile'
              className='form-control'
              name='mobile'
              value={user.mobile}
              onChange={handleChange}
            />

            <label className='form-label'>Password</label>
            <input 
              type="password"
              placeholder='enter your password'
              className='form-control'
              name='password'
              value={user.password}
              onChange={handleChange}
            />

            <button className='btn btn-outline-success mt-3' type='submit'>
              Submit
            </button>
          </form>
        </div>

        <div className="col-md-6">
          <h4>Details</h4>
          <div className="p-4">
            <p><span className='fw-bold p-1 bg-warning rounded me-2'>FullName:</span>{user.name}</p>
            <p><span className='fw-bold p-1 bg-warning rounded me-2'>Email:</span>{user.email}</p>
            <p><span className='fw-bold p-1 bg-warning rounded me-2'>Mobile:</span>{user.mobile}</p>
            <p><span className='fw-bold p-1 bg-warning rounded me-2'>Password:</span>{user.password}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserForm
