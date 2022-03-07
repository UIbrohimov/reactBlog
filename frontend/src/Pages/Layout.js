import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        {/* bu navbar barcha sahifalar uchun */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-5">
                <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* bu yerda boshqa sahifalarga o'ta olishi uchun imkoniyat yaratamiz */}
                        <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item"><Link to="/blogs" className="nav-link">Blogs</Link></li>
                        <li className="nav-item"><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                        <li className="nav-item"><Link to="/pricing" className="nav-link">Pricing</Link></li>
                        <li className="nav-item"><Link to="/faq" className="nav-link">FAQ</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link">Contanct</Link></li>                        
                    </ul>
                </div>
            </div>
        </nav>
  
        {/* outlet bu block contentga o'xshagan narsa djangodagi */}
        <Outlet />

        {/* outletning tepasi va pastidagi contentlar har bir sahifa uchun bir xil */}

        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Your Website 2021</div></div>
                    <div className="col-auto">
                        <a className="link-light small" href="#!">Privacy</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Terms</a>
                        <span className="text-white mx-1">&middot;</span>
                        <a className="link-light small" href="#!">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
      </>
    )
};
  
export default Layout;