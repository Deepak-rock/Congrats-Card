const element = (
  <div className='bg-img-container'>
    <h1 className='heading'>Congratulations</h1>
    <div className='bg-container'>
      <img
          src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
          className='profile'
      />
      <h2 className='profile-name'>Kiran V</h2>
      <p className='para'>
        Vishnu institute of Computer Education and Technology, Bhimavaram</p>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png'
        className='watch'
      />
    </div>
  </div>
)
ReactDOM.render(element, document.getElementById('root'))