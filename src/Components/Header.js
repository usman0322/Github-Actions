import React, { Component } from 'react';



 class Header extends Component {
  render() {
    return (
      <div>

<header className="main-header">
          <div className="logo-holder">
            <a href="/">
              <img src="../assets/images/logo.png" alt="" />
            </a>
          </div>

          <div className="nav-button-wrap color-bg nvminit">
            <div className="nav-button">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="header-search-button">
            <i className="fal fa-search"></i>
            <span>Searchessss...</span>
          </div>

          <div className="add-list_wrap">
            <button
              type="submit"
              className="add-list color-bg"
              id="add_listing"
            >
              {" "}
              Add Listing{" "}
            </button>
          </div>

          <div
            className="header-opt_btn tolt"
            data-microtip-position="bottom"
            data-tooltip="Language / Currency"
          >
            <span>
              <i className="fal fa-globe"></i>
            </span>
          </div>

          <div
            className="cart-btn  tolt show-header-modal"
            data-microtip-position="bottom"
            data-tooltip="Your Wishlist / Compare"
          >
            <i className="fal fa-bell"></i>
            <span className="cart-btn_counter color-bg">5</span>
          </div>

          <div className="show-reg-form modal-open">
            <i className="fas fa-user"></i>
            <span>Sign In</span>
          </div>

          <div className="nav-holder main-menu">
            <nav>
              <ul className="no-list-style">
                <li>
                  <a href="/">
                    Agents<i className="fa fa-caret-down"></i>
                  </a>

                  <ul>
                    <li>
                      <a href="/">Agent List</a>
                    </li>
                    <li>
                    <a href="/">Agent Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                <a href="/">Pricing</a>
                </li>
                <li>
                <a href="/">News</a>
                </li>
                <li>
                <a href="/">About</a>
                </li>
              </ul>
            </nav>
          </div>

          {/* <div className="header-search-wrapper novis_search">
            <div className="header-serach-menu">
              <div className="custom-switcher fl-wrap">
                <div className="fieldset fl-wrap">
                  <input
                    type="radio"
                    name="duration-1"
                    id="buy_sw"
                    className="tariff-toggle"
                    defaultChecked
                  />
                  <label htmlFor="buy_sw">Buy</label>
                  <input
                    type="radio"
                    name="duration-1"
                    className="tariff-toggle"
                    id="rent_sw"
                  />
                  <label htmlFor="rent_sw" className="lss_lb">
                    Rent
                  </label>
                  <span className="switch color-bg"></span>
                </div>
              </div>
            </div>
            <div className="custom-form">
              <form method="post" name="registerform">
                <label>Keywords </label>
                <input
                  type="text"
                  placeholder="Address , Street , City..."
                  defaultValue=""
                />
                <label>Categories</label>
                <select
                  data-placeholder="Categories"
                  className="chosen-select on-radius no-search-select"
                >
                  <option>All Categories</option>
                  <option>Houses</option>
                  <option>Townhomes</option>
                  <option>Condos</option>
                </select>
                <label style={{ marginTop: "10px" }}>Price Range</label>
                <div className="price-rage-item fl-wrap">
                  <input
                    type="text"
                    className="price-range"
                    data-min="100"
                    data-max="100000"
                    name="price-range1"
                    data-step="1"
                    defaultValue="1"
                    data-prefix="$"
                  />
                </div>
                <button type="button" className="btn float-btn color-bg">
                  <i className="fal fa-search"></i> Search
                </button>
               
              </form>
            </div>
          </div>

          <div className="header-modal novis_wishlist tabs-act">
            <ul className="tabs-menu fl-wrap no-list-style">
              <li className="current">
                <a href="#tab-wish">
                  {" "}
                  Wishlist <span>- 3</span>
                </a>
              </li>
              <li>
                <a href="#tab-compare">
                  {" "}
                  Compare <span>- 2</span>
                </a>
              </li>
            </ul>

            <div className="tabs-container">
              <div className="tab">
                <div id="tab-wish" className="tab-content first-tab">
                  <div
                    className="header-modal-container scrollbar-inner fl-wrap"
                    data-simplebar
                  >
                    <div className="widget-posts  fl-wrap">
                      <ul className="no-list-style">
                        <li>
                          <div className="widget-posts-img">
                            <a href="listing-single.html">
                              <img
                                src="../assets/images/all/small/1.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="widget-posts-descr">
                            <h4>
                              <a href="listing-single.html">
                                Affordable Urban Room
                              </a>
                            </h4>
                            <div className="geodir-category-location fl-wrap">
                              <a href="#">
                                <i className="fas fa-map-marker-alt"></i> 40
                                Journal Square , NJ, USA
                              </a>
                            </div>
                            <div className="widget-posts-descr-price">
                              <span>Price: </span> $ 1500 / per month
                            </div>
                            <div className="clear-wishlist">
                              <i className="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="widget-posts-img">
                            <a href="listing-single.html">
                              <img
                                src="..assets/images/all/small/2.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="widget-posts-descr">
                            <h4>
                              <a href="listing-single.html">Family House</a>
                            </h4>
                            <div className="geodir-category-location fl-wrap">
                              <a href="#">
                                <i className="fas fa-map-marker-alt"></i> 34-42
                                Montgomery St , NY, USA
                              </a>
                            </div>
                            <div className="widget-posts-descr-price">
                              <span>Price: </span> $ 50.000
                            </div>
                            <div className="clear-wishlist">
                              <i className="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="widget-posts-img">
                            <a href="listing-single.html">
                              <img
                                src="../assets/images/all/small/3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="widget-posts-descr">
                            <h4>
                              <a href="listing-single.html">
                                Apartment to Rent
                              </a>
                            </h4>
                            <div className="geodir-category-location fl-wrap">
                              <a href="#">
                                <i className="fas fa-map-marker-alt"></i>75
                                Prince St, NY, USA
                              </a>
                            </div>
                            <div className="widget-posts-descr-price">
                              <span>Price: </span> $100 / per night
                            </div>
                            <div className="clear-wishlist">
                              <i className="fal fa-trash-alt"></i>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="header-modal-top fl-wrap">
                    <div className="clear_wishlist color-bg">
                      <i className="fal fa-trash-alt"></i> Clear all
                    </div>
                  </div>
                </div>

                <div className="tab">
                  <div id="tab-compare" className="tab-content">
                    <div
                      className="header-modal-container scrollbar-inner fl-wrap"
                      data-simplebar
                    >
                      <div className="widget-posts  fl-wrap">
                        <ul className="no-list-style">
                          <li>
                            <div className="widget-posts-img">
                              <a href="listing-single.html">
                                <img
                                  src="../assets/images/all/small/4.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="widget-posts-descr">
                              <h4>
                                <a href="listing-single.html">
                                  Gorgeous house For sale
                                </a>
                              </h4>
                              <div className="geodir-category-location fl-wrap">
                                <a href="#">
                                  <i className="fas fa-map-marker-alt"></i> 70
                                  Bright St New York, USA{" "}
                                </a>
                              </div>
                              <div className="widget-posts-descr-price">
                                <span>Price: </span> $ 52.100
                              </div>
                              <div className="clear-wishlist">
                                <i className="fal fa-trash-alt"></i>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="widget-posts-img">
                              <a href="listing-single.html">
                                <img
                                  src="../assets/images/all/small/5.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="widget-posts-descr">
                              <h4>
                                <a href="listing-single.html">
                                  Family Apartments
                                </a>
                              </h4>
                              <div className="geodir-category-location fl-wrap">
                                <a href="#">
                                  <i className="fas fa-map-marker-alt"></i> W
                                  85th St, New York, USA{" "}
                                </a>
                              </div>
                              <div className="widget-posts-descr-price">
                                <span>Price: </span> $ 72.400
                              </div>
                              <div className="clear-wishlist">
                                <i className="fal fa-trash-alt"></i>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="header-modal-top fl-wrap">
                      <a
                        className="clear_wishlist color-bg"
                        href="compare.html"
                      >
                        <i className="fal fa-random"></i> Compare
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-opt-modal novis_header-mod">
            <div className="header-opt-modal-container hopmc_init">
              <div className="header-opt-modal-item lang-item fl-wrap">
                <h4>
                  Language: <span>EN</span>
                </h4>
                <div className="header-opt-modal-list fl-wrap">
                  <ul>
                    <li>
                      <a href="#" className="current-lan" data-lantext="EN">
                        English
                      </a>
                    </li>
                    <li>
                      <a href="#" data-lantext="FR">
                        Franais
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="header-opt-modal-item currency-item fl-wrap">
                <h4>
                  Currency: <span>CAD</span>
                </h4>
                <div className="header-opt-modal-list fl-wrap">
                  <ul>
                    <li>
                      <a href="#" className="current-lan" data-lantext="CAD">
                        CAD
                      </a>
                    </li>
                    <li>
                      <a href="#" data-lantext="USD">
                        USD
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}
        </header>



      </div>
    )
  }
}

export default Header