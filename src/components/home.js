import logo from '../assets/logo.jpg'
import eye from '../assets/vision.png'

const Home = () => {
  return (
    <>
      <Navbar />
      <List />
      <Footer />
    </>
  )
}

const Navbar = () => {
  return (
    <div className='brand'>
      <div className='item' id='item-1'>
        <img src={logo} className='logo' alt='' />
      </div>
      <div className='item' id='item-2'>
        <span className='brandname'>THE OPTOMETRY CONSULTANCY</span>
      </div>
      <div className='item' id='item-3'>
        <img id='logo2' src={eye} alt='' />
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='about item'>
          <h2 style={{ color: 'white' }}>ABOUT US</h2>
          <p>
            The Radiant Star Group was founded in 2013, in the business
            metropolis of the United Arab Emirates – Dubai. Since its
            establishment, Radiant Star has grown exponentially and has
            established a strong presence in the Middle East, Africa and the Far
            East
          </p>
        </div>
        <div className='space'></div>
        <div className='address item'>
          <h2 style={{ color: 'white' }}>CONTACT US</h2>
          <p
            style={{
              color: 'white',
              lineHeight: '25px',
              letterSpacing: '2px',
            }}
          >
            THE OPTOMETRY CONSULTANCY
            <br />
            NAME: VIKRAM NERLAKANTI(OPTOMETRIST)
            <br /> PHNO : 7207886032
            <br />
            ADDRRESS: 1-1-255/3/4, Street No 3 Chikkadpally Hyderabad -20
            <br />
            EMAIL : theoptometryconsultancy95@gmail.com
          </p>
        </div>
      </div>
      <p style={{ color: 'white', textAlign: 'center' }}>
        Optometryconsultancy&copy;AllCopyrightsReserved
      </p>
    </>
  )
}

const List = () => {
  return (
    <div className='content'>
      <h1>OUR Services</h1>
      <ul>
        <li>
          <a href='#'>Placements for optometrist></a>
        </li>
        <li id='dp-1'>
          <a href='#'>optometrits</a>
        </li>
        <ul id='idp-1'>
          <li>D.option</li>
          <li>B.option</li>
          <li>M.option</li>
        </ul>
        <li id='dp-2'>
          <a href='#'>clinical training </a>
        </li>
        <ul id='idp-2'>
          <li>lens & dispensing ></li>
          <ul>
            <li>public relations</li>
            <li>product knowledge</li>
            <li>up selling</li>
            <li>cross selling</li>
            <li>product materials</li>
            <li>upgrading customer</li>
          </ul>
          <li>slit lamp examination</li>
          <li>refraction</li>
          <li>contact lens fitting</li>
          <li>technical skills</li>
          <li>auto refracto meter</li>
          <li>retinoscopy</li>
          <li>lensometry</li>
        </ul>
        <li id='dp-3'>
          <a href='#'>eye camps (paid)</a>
        </li>
        <ul id='idp-3'>
          <li>school screening</li>
        </ul>
        <li>
          <a href='#'>freelancer (temporary optometrist)</a>
        </li>
      </ul>
    </div>
  )
}

export default Home
