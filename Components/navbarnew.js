function navbarnew(){
    return `
    <header id="main-header">
    <div class="main-header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
              <a href="#" class="navbar-toggler c-toggler" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <div class="navbar-toggler-icon" data-toggle="collapse">
                  <span class="navbar-menu-icon navbar-menu-icon--top"></span>
                  <span class="navbar-menu-icon navbar-menu-icon--middle"></span>
                  <span class="navbar-menu-icon navbar-menu-icon--bottom"></span>
                </div>
              </a>
              <a href="index.html" class="navbar-brand">
                <img src="images/logo.png" class="img-fluid logo" alt="" />
              </a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="menu-main-menu-container">
                  <ul id="top-menu" class="navbar-nav ml-auto">
                    <li class="menu-item"><a href="/Netflix_Home_Page_Static_Main/NetFlix_HomePage_Main.html">Home</a></li>
                    <li class="menu-item"><a href="/Pages/Netflix_Home_Page.html">Trending</a></li>
                    <li class="menu-item"><a href="/Pages/Movie.html">Movies</a></li>
                    <li class="menu-item"><a href="/Pages/Tv_Shows.html">Tv Shows</a></li>
                    <li class="menu-item"><a href="/Pages/My_List.html">My Liked</a></li>
                    <li class="menu-item"><a href="/Pages/MyLikedMovie.html">My List</a></li>
                    <li class="menu-item"><a href="/Pages/by_language.html">language & Genres</a></li>
                    <!-- <li class="menu-item">
                      <a href="#">Contact Us</a>
                      <ul class="sub-menu">
                        <li class="menu-item"><a href="#">About Us</a></li>
                        <li class="menu-item"><a href="#">Contact</a></li>
                        <li class="menu-item"><a href="#">FAQ</a></li>
                        <li class="menu-item">
                          <a href="#">Privacy-Policy</a>
                        </li>
                        <li class="menu-item">
                          <a href="#">Pricing</a>
                          <ul class="sub-menu">
                            <li class="menu-item">
                              <a href="#">Gold Membership</a>
                            </li>
                            <li class="menu-item">
                              <a href="#">Silver Membership</a>
                            </li>
                            <li class="menu-item">
                              <a href="#">Bronze Membership</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li> -->
                  </ul>
                </div>
              </div>
              <div class="mobile-more-menu">
                <a href="javascript:void(0);" class="more-toggle" id="dropdownMenuButton" data-toggle="more-toggle"
                  aria-haspopup="true" aria-expanded="false">
                  <i class="fa fa-ellipsis-h"></i>
                </a>
                <div class="more-menu" aria-labelledby="dropdownMenuButton">
                  <div class="navbar-right position-relative">
                    <ul class="d-flex align-items-center justify-content-end list-inline m-0">
                      <li>
                        <a href="#" class="search-toggle">
                          <i class="fa fa-search"></i>
                        </a>
                        <div class="search-box iq-search-bar">
                          <form action="" class="searchbox">
                            <div class="form-group position-relative">
                              <input  i search-input font-size-12"
                                placeholder="type here to search..." />
                              <i class="search-link fa fa-search"></i>
                            </div>
                          </form>
                        </div>
                      </li>
                      <li class="nav-item nav-icon">
                        <a href="#" class="search-toggle position-relative">
                          <i class="fa fa-bell"></i>
                          <span class="bg-danger dots"></span>
                        </a>
                        <div class="iq-sub-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body">
                              <a href="#" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img src="images/notify/thumb-1.jpg" alt="" class="img-fluid mr-3" />
                                  <div class="media-body">
                                    <h6 class="mb-0">Captain Marvel</h6>
                                    <small class="font-size-12">just now</small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img src="images/notify/thumb-2.jpg" alt="" class="img-fluid mr-3" />
                                  <div class="media-body">
                                    <h6 class="mb-0">
                                      Dora and The Lost City of Gold
                                    </h6>
                                    <small class="font-size-12">25 mins ago</small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" class="iq-sub-card">
                                <div class="media align-items-center">
                                  <img src="images/notify/thumb-3.jpg" alt="" class="img-fluid mr-3" />
                                  <div class="media-body">
                                    <h6 class="mb-0">Mulan</h6>
                                    <small class="font-size-12">1h 30 mins ago</small>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="#" class="iq-user-dropdown search-toggle d-flex align-items-center">
                   <img src="images/user/user.png" class="img-fluid user-m rounded-circle" alt="" />
                        </a>
                        <div class="iq-sub-dropdown iq-user-dropdown">
                          <div class="iq-card shadow-none m-0">
                            <div class="iq-card-body p-0 pl-3 pr-3">
                              <a href="/Pages/Manage_profilesection.html" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="fa fa-user text-primary"></i>
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Manage Profile</h6>
                                  </div>
                                </div>
                              </a>
                              <a href="/Pages/addUserProfle_page.html" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="fa fa-cog text-primary"></i>
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Settings</h6>
                                  </div>
                                </div>
                              </a>
                              <a href="#" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="fa fa-inr text-primary"></i>
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Pricing Plan</h6>
                                  </div>
                                </div>
                              </a>
                              <a href="#" class="iq-sub-card setting-dropdown">
                                <div class="media align-items-center">
                                  <div class="right-icon">
                                    <i class="fa fa-sign-out text-primary"></i>
                                  </div>
                                  <div class="media-body ml-3">
                                    <h6 class="mb-0">Logout</h6>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="navbar-right menu-right">
                <ul class="d-flex align-items-center list-inline m-0">
                  <li class="nav-item nav-icon">
                    <a href="#" class="search-toggle device-search">
                      <i class="fa fa-search"></i>
                    </a>
                    
         

                    <div class="search-box iq-search-bar d-search">
                    <form action="#" class="searchbox">
                      <div class="form-group position-relative">
                      <span id="span">
                      <input id="input" oninput="debounceMovies()"  type="text" class="text search-input font-size-12"
                          placeholder="type here to search..." />
                          <button id = "micBtn"  type="button"><i class="fas fa-microphone"></i></button>
                          <p class="info"></p>
                        <i class="search-link fa fa-search"></i>
                      </span>
                        
                      </div>
                    </form>
                  </div>






                  </li>
                  <li class="nav-item nav-icon">
                    <a href="#" class="search-toggle" data-toggle="search-toggle">
                      <i class="fa fa-bell"></i>
                      <span class="bg-danger dots"></span>
                    </a>
                    <div class="iq-sub-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body">
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img src="images/notify/thumb-1.jpg" alt="" class="img-fluid mr-3" />
                              <div class="media-body">
                                <h6 class="mb-0">Captain Marvel</h6>
                                <small class="font-size-12">just now</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img src="images/notify/thumb-2.jpg" alt="" class="img-fluid mr-3" />
                              <div class="media-body">
                                <h6 class="mb-0">
                                  Dora and The Lost City of Gold
                                </h6>
                                <small class="font-size-12">25 mins ago</small>
                              </div>
                            </div>
                          </a>
                          <a href="#" class="iq-sub-card">
                            <div class="media align-items-center">
                              <img src="images/notify/thumb-3.jpg" alt="" class="img-fluid mr-3" />
                              <div class="media-body">
                                <h6 class="mb-0">Mulan</h6>
                                <small class="font-size-12">1h 30 mins ago</small>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="nav-item nav-icon">
                    <a  class="iq-user-dropdown search-toggle d-flex align-items-center p-0">
                    <span> ${localStorage.getItem('UserWatching')} <img src="images/user/user.png" class="img-fluid user-m rounded-circle" alt="" /></span>
                    </a>
                    <div class="iq-sub-dropdown iq-user-dropdown">
                      <div class="iq-card shadow-none m-0">
                        <div class="iq-card-body p-0 pl-3 pr-3">
                          <a href="/Pages/Manage_profilesection.html" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-user text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Manage Profile</h6>
                              </div>
                            </div>
                          </a>
                          <a href="/Pages/addUserProfle_page.html" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-cog text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Settings</h6>
                              </div>
                            </div>
                          </a>
                          <a href="" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-inr text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Pricing Plan</h6>
                              </div>
                            </div>
                          </a>
                          <a  onclick="logout()" href="/index.html" class="iq-sub-card setting-dropdown">
                            <div class="media align-items-center">
                              <div class="right-icon">
                                <i class="fa fa-sign-out text-primary"></i>
                              </div>
                              <div class="media-body ml-3">
                                <h6 class="mb-0">Logout</h6>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div class="nav-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
    `
}

export default navbarnew();