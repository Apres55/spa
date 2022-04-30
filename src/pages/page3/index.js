import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import './grid-flex.css'


const InstaPage = () => {
    return(
        <body>
            <div class="container-fluid nav-cont">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand col-lg-4" href="_blank">
                            <image src="images/insta.svg" alt="instagram-logo" width="100" height="30" class="d-inline-block align-text-top" />
                        </a>
                        <form class="d-flex col-lg-4">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <div class="navbar-collapse col-lg-4" id="navbarTogglerDemo02">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="_blank">
                                        <image src="images/home.svg" alt="nav-home-icon" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="_blank">
                                        <div class="tg">
                                            <image src="images/tg/Vector.svg" alt="nav-home-icon" />
                                            <div class="redEllipse">5</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="_blank">
                                        <image src="images/navig.svg" alt="nav-home-icon" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="_blank">
                                        <image src="images/like.svg" alt="nav-home-icon" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="_blank">
                                        <div class="ellipse account-icon">
                                            <image class="mini-ellipse" src="images/igphotos/UA8DEgjO.jpg" alt="avatar" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    <hr />
                    </div>
                </nav>
            </div>
            <div class="container page">
                <header>
                    <div class="head row">
                        <div class="avatar col-lg-4">
                            <image class="ellipse" src="images/igphotos/UA8DEgjO.jpg" alt="avatar" />
                        </div>
                        <div class="content-box col-lg-8">
                            <div class="name-buttons form-inline">
                                <h2>name</h2>
                                <button class="btn btn-primary" type="submit">Follow</button>
                                <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <li>
                                        <a class="dropdown-item" href="_blank">Dropdown link</a>
                                    </li>
                                    <li><a class="dropdown-item" href="_blank">Dropdown link</a></li>
                                </ul>
                                <span class="dots"><image src="images/more.svg" alt="" /></span>
                            </div>
                            <div class="followers-row row-grid">
                                <span><span class="bold">79</span> posts</span>
                                <span><span class="bold">379</span> followers</span>
                                <span><span class="bold">179</span> following</span>
                            </div>
                            <div class="textbox">
                                <h4>Name</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                                <p><a href="_blank">bit.ly/35Ce3mX</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="ellipse-bar row row-grid">
                        <div class="ellipse-bar-item">
                            <image src="images/igphotos/photo.png" class="ellipse" alt="Lakerslogo" />
                            <p class="bold">name</p>
                        </div>
                        <div class="ellipse-bar-item">
                            <image src="images/igphotos/photo.png" class="ellipse" alt="sneakers" />
                            <p class="bold">name</p>
                        </div>
                        <div class="ellipse-bar-item">
                            <image src="images/igphotos/photo.png" class="ellipse" alt="KobeLogo" />
                            <p class="bold">name</p>
                        </div>
                    </div>
                    <hr />
                </header>
                <main>
                    <div class="two-btns">
                        <button class="noBord frstBtn">
                            <image src="images/setka.svg" alt="frsBtn-icon" />
                            <b>POSTS</b>
                        </button>
                        <button disabled class="noBord">
                            <image src="images/manbtn.svg" alt="scndBtn-icon" />
                            <b>TAGGED</b>
                        </button>
                    </div>
                    <div class="main-body row">
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card h-100">
                                <image src="images/igphotos/photo.png" class="card-img-top" alt="photo" />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </body>
    )
}

export default InstaPage