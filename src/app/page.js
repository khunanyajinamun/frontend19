import Image from "next/image";
import styles from 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
   <div classname="container-fluid">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
            <a class="nav-link" href="#">Logo</a>
            <div class ="collapse navbar-collapse flex-row-reverse" id="navbarText">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">contact</a>
                </li>

                <button className="btn btn-outline-success" type="submit">singup</button>
                <button className="btn btn-outline-success" type="submit" >singin</button>
              </ul>
            </div>
        </nav>
        <div>
      </div>

      </div>
    <div className="container-fluid">
      <div className="row text-center">
        <div className="col-md-12 bs-secondary-bg p-5">
         CAROUSEL
        </div>
        <div className="row text-center">
          <div className="col-md-4 bg-warning p-5">
            CARD 
          </div>
          <div className="col-md-4 bg-danger p-5">
            CARD 
          </div>
          <div className="col-md-4 bg-primary p-5">
            CARD 
          </div>
        </div>
        <div className="col-md-12 bg-success p-5">
         FOOTER
        </div>
      </div>
    </div>
    </>
  );
}