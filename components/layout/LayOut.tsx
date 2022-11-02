/* eslint-disable react/jsx-key */
// import NavBar from '../layout/nav_bar/NavBar'
// import Footer from '../layout/footer/Footer'
import NavBar from './nav_bar/NavBar'

type ChildrenProps = {
    children : React.ReactNode
}

export default function Layout( { children }: ChildrenProps ) {


  return(
    <>
      <NavBar />
        <div style={{minHeight: '90vh'}} >
          {children}
        </div>
      {/* <Footer /> */}
    </>
  )
}