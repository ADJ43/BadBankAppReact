const Navbar = ReactBootstrap.Navbar;
const Nav = ReactBootstrap.Nav;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const withRouter = Reactrouter.withRouter;
const ReactDOM = ReactDOM.ReactDOM;
const Location = ReactRouterDOM.location;




function NavBar(){
 

  return(
    <>
    <Navbar bg="info" text="light" >
      <Nav>
      <Nav.Link className="navbar-brand active" href="#/">BadBank</Nav.Link>
        <Nav.Link href="#/">Home</Nav.Link>
        <Nav.Link href="#/CreateAccount/">Create Account</Nav.Link>
        <Nav.Link href="#/deposit/" >Deposit</Nav.Link>
        <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
        <Nav.Link href="#/alldata/">AllData</Nav.Link>
      </Nav>
    </Navbar>
    </>
  );
}
