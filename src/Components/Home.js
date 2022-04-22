import React, { Component } from "react";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div>

          <Header />
      
        <div id="wrapper">
          <div className="content">
            <div className="categoties-column">
              <div className="categoties-column_container cat-list">
                <ul>
                  <li>
                    <a href="/" className="act-category">
                      <i className="fal fa-home"></i>
                      <span>House</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fal fa-hotel"></i>
                      <span>Townhomes</span>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fal fa-city"></i>
                      <span>Condos</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="progress-indicator">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -1 34 34">
                  <circle
                    cx="16"
                    cy="16"
                    r="15.9155"
                    className="progress-bar__background"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="15.9155"
                    className="progress-bar__progress
                                    js-progress-bar"
                  />
                </svg>
              </div>
            </div>

            <div className="map-container column-map   hid-mob-map">
              <div id="map-main"></div>
              <ul className="mapnavigation no-list-style">
                <li>
                  <a href="/" className="prevmap-nav mapnavbtn">
                    <span>
                      <i className="fas fa-caret-left"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="/" className="nextmap-nav mapnavbtn">
                    <span>
                      <i className="fas fa-caret-right"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div
                className="scrollContorl mapnavbtn tolt"
                data-microtip-position="top-left"
                data-tooltip="Enable Scrolling"
              >
                <span>
                  <i className="fal fa-unlock"></i>
                </span>
              </div>
              <div
                className="location-btn geoLocation tolt"
                data-microtip-position="top-left"
                data-tooltip="Your location"
              >
                <span>
                  <i className="fal fa-location"></i>
                </span>
              </div>
              <div className="map-close">
                <i className="fas fa-times"></i>
              </div>
            </div>

            <div className="top-search-content">
              <div className="top-search-dec color-bg">
                <i className="far fa-sliders-h"></i>
              </div>
              <div className="top-search-content-title">Search:</div>
              <div className="close_sb-filter">
                <i className="fal fa-times"></i>
              </div>
              <div className="custom-form fl-wrap">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="listsearch-input-item">
                      <input
                        type="text"
                        id="searchAddress"
                        placeholder="Address , Street , City..."
                        defaultValue=""
                      />
                      {/* <input type="text" id="searchAddress" onClick="this.select()" placeholder="Address , Street , City..." defaultValue=""/> */}
                    </div>
                  </div>

                  <div className="col-sm-2">
                    <div className="listsearch-input-item">
                      <select
                        data-placeholder="Categories"
                        className="chosen-select on-radius no-search-select"
                      >
                        <option>All Categories</option>
                        <option>Houses</option>
                        <option>Townhomes</option>
                        <option>Condos</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-sm-3">
                    <div className="listsearch-input-item">
                      <div className="price-rage-item fl-wrap">
                        <span className="pr_title">Range:</span>
                        {/* <input type="text" className="price-range-double" data-min="100" data-max="100000"  name="price-range2" id="price_range2"  data-step="100" defaultValue="1" data-prefix="m"/> */}
                        <input
                          type="text"
                          data-min="100"
                          data-max="100000"
                          name="price-range2"
                          id="price_range2"
                          data-step="100"
                          defaultValue="50"
                          data-prefix="m"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3" style={{ width: "150px" }}>
                    <div className="listsearch-input-item">
                      <div className="price-rage-item fl-wrap">
                        <span className="pr_title">Min:</span>
                        <input
                          type="text"
                          name="price-min"
                          id="min"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-3" style={{ width: "150px" }}>
                    <div className="listsearch-input-item">
                      <div className="price-rage-item fl-wrap">
                        <span className="pr_title">Max:</span>
                        <input
                          type="text"
                          name="price-max"
                          id="max"
                          defaultValue=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-opt_btn mor-opt-btn_act">
                Advanced search
                <span>
                  <i className="fas fa-caret-down"></i>
                </span>
              </div>
            </div>

            <div className="col-list-wrap gray-bg ">
              <div className="col-list-wrap_opt fl-wrap">
                <div className="show-hidden-filter col-list-wrap_opt_btn color-bg">
                  Show Filters
                </div>
                <div className="show-hidden-map not-vis_lap col-list-wrap_opt_btn color-bg">
                  Show Map
                </div>
              </div>

              <div className="list-main-wrap-header fl-wrap fixed-listing-header">
                <div className="container">
                  <div className="list-main-wrap-title">
                    <h2>
                      Results For : <span>Under Construction </span>
                      <strong>0</strong>
                    </h2>
                  </div>

                  <div className="list-main-wrap-opt">
                    <div className="price-opt">
                      <span className="price-opt-title">Sort by:</span>
                      <div className="listsearch-input-item">
                        <select
                          data-placeholder="Popularity"
                          className="chosen-select no-search-select"
                        >
                          <option>Popularity</option>
                          <option>Average rating</option>
                          <option>Price: low to high</option>
                          <option>Price: high to low</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid-opt">
                      <ul className="no-list-style">
                        <li className="grid-opt_act">
                          <span
                            className="two-col-grid act-grid-opt tolt"
                            data-microtip-position="bottom"
                            data-tooltip="Grid View"
                          >
                            <i className="far fa-th"></i>
                          </span>
                        </li>
                        <li className="grid-opt_act">
                          <span
                            className="one-col-grid tolt"
                            data-microtip-position="bottom"
                            data-tooltip="List View"
                          >
                            <i className="far fa-list"></i>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="listing-item-container one-column-grid-wrap fl-wrap"
                id="messages"
              >
                <img src="" alt="" id="test_img" />
                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="/"
                        className="geodir-category-img_item"
                      >
                        <img
                          src="../assets/images/all/3.jpg"
                          alt=""
                          id="img001"
                        />
                        <div className="overlay"></div>
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="/"
                          className="map-item tolt"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt"></i> 70 Bright St
                          New York, USA
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="/" className="cat-opt blue-bg">
                            Sale
                          </a>
                        </li>
                        <li>
                          <a href="/" className="cat-opt color-bg">
                            Apartment
                          </a>
                        </li>
                      </ul>
                      <a
                        href="/"
                        className="geodir_save-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Save"
                      >
                        <span>
                          <i className="fal fa-heart"></i>
                        </span>
                      </a>
                      <a
                        href="/"
                        className="compare-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Compare"
                      >
                        <span>
                          <i className="fal fa-random"></i>
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-camera"></i> 8
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3>
                        <a href="/">
                          Gorgeous house For sale
                        </a>
                      </h3>
                      <div className="geodir-category-content_price">
                        $ 600,000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed"></i>
                            <span>3</span>
                          </li>
                          <li>
                            <i className="fal fa-bath"></i>
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fal fa-cube"></i>
                            <span>450 ft2</span>
                          </li>
                        </ul>
                      </div>
                      <div className="geodir-category-footer fl-wrap">
                        <a href="/" className="gcf-company">
                          <img src="../assets/images/avatar/2.jpg" alt="" />
                          <span>By Liza Rose</span>
                        </a>
                        <div
                          className="listing-rating card-popup-rainingvis tolt"
                          data-microtip-position="top"
                          data-tooltip="Good"
                          data-starrating2="4"
                        ></div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="/"
                        className="geodir-category-img_item"
                      >
                        <img src="../assets/images/all/1.jpg" alt="" />
                        <div className="overlay"></div>
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="/"
                          className="map-item tolt"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt"></i> 40 Journal
                          Square , NJ, USA
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="/" className="cat-opt blue-bg">
                            Sale
                          </a>
                        </li>
                        <li>
                          <a href="/" className="cat-opt color-bg">
                            Apartment
                          </a>
                        </li>
                      </ul>
                      <a
                        href="/"
                        className="geodir_save-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Save"
                      >
                        <span>
                          <i className="fal fa-heart"></i>
                        </span>
                      </a>
                      <a
                        href="/"
                        className="compare-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Compare"
                      >
                        <span>
                          <i className="fal fa-random"></i>
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-camera"></i> 47
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3>
                        <a href="/">Luxury Family Home</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        $ 320,000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed"></i>
                            <span>4</span>
                          </li>
                          <li>
                            <i className="fal fa-bath"></i>
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fal fa-cube"></i>
                            <span>460 ft2</span>
                          </li>
                        </ul>
                      </div>
                      <div className="geodir-category-footer fl-wrap">
                        <a href="/" className="gcf-company">
                          <img src="../assets/images/avatar/1.jpg" alt="" />
                          <span>By Anna Lips</span>
                        </a>
                        <div
                          className="listing-rating card-popup-rainingvis tolt"
                          data-microtip-position="top"
                          data-tooltip="Excellent"
                          data-starrating2="5"
                        ></div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="/"
                        className="geodir-category-img_item"
                      >
                        <img src="../assets/images/all/9.jpg" alt="" />
                        <div className="overlay"></div>
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="/"
                          className="map-item tolt"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt"></i> 34-42
                          Montgomery St , NY, USA
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="/" className="cat-opt blue-bg">
                            Rent
                          </a>
                        </li>
                        <li>
                          <a href="/" className="cat-opt color-bg">
                            House
                          </a>
                        </li>
                      </ul>
                      <a
                        href="/"
                        className="geodir_save-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Save"
                      >
                        <span>
                          <i className="fal fa-heart"></i>
                        </span>
                      </a>
                      <a
                        href="/"
                        className="compare-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Compare"
                      >
                        <span>
                          <i className="fal fa-random"></i>
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-camera"></i> 4
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3>
                        <a href="/">Family house For Rent</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        $ 700 / per month
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed"></i>
                            <span>2</span>
                          </li>
                          <li>
                            <i className="fal fa-bath"></i>
                            <span>1</span>
                          </li>
                          <li>
                            <i className="fal fa-cube"></i>
                            <span>220 ft2</span>
                          </li>
                        </ul>
                      </div>
                      <div className="geodir-category-footer fl-wrap">
                        <a href="/" className="gcf-company">
                          <img src="../assets/images/avatar/3.jpg" alt="" />
                          <span>By Mark Frosty</span>
                        </a>
                        <div
                          className="listing-rating card-popup-rainingvis tolt"
                          data-microtip-position="top"
                          data-tooltip="Good"
                          data-starrating2="4"
                        ></div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="/"
                        className="geodir-category-img_item"
                      >
                        <img src="../assets/images/all/6.jpg" alt="" />
                        <div className="overlay"></div>
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="/"
                          className="map-item tolt"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt"></i> W 85th St,
                          New York, USA{" "}
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="/" className="cat-opt blue-bg">
                            Sale
                          </a>
                        </li>
                        <li>
                          <a href="/" className="cat-opt color-bg">
                            Apartment
                          </a>
                        </li>
                      </ul>
                      <a
                        href="/"
                        className="geodir_save-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Save"
                      >
                        <span>
                          <i className="fal fa-heart"></i>
                        </span>
                      </a>
                      <a
                        href="/"
                        className="compare-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Compare"
                      >
                        <span>
                          <i className="fal fa-random"></i>
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-camera"></i> 13
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3>
                        <a href="/">Contemporary Apartment</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        $ 1,600,000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed"></i>
                            <span>4</span>
                          </li>
                          <li>
                            <i className="fal fa-bath"></i>
                            <span>1</span>
                          </li>
                          <li>
                            <i className="fal fa-cube"></i>
                            <span>550 ft2</span>
                          </li>
                        </ul>
                      </div>
                      <div className="geodir-category-footer fl-wrap">
                        <a href="/" className="gcf-company">
                          <img src="../assets/images/avatar/4.jpg" alt="" />
                          <span>By Bill Trust</span>
                        </a>
                        <div
                          className="listing-rating card-popup-rainingvis tolt"
                          data-microtip-position="top"
                          data-tooltip="Excellent
                                                "
                          data-starrating2="5"
                        ></div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="/"
                        className="geodir-category-img_item"
                      >
                        <img src="../assets/images/all/5.jpg" alt="" />
                        <div className="overlay"></div>
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="/"
                          className="map-item tolt"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt"></i> 75 Prince
                          St, NY, USA
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="/" className="cat-opt blue-bg">
                            Sale
                          </a>
                        </li>
                        <li>
                          <a href="/" className="cat-opt color-bg">
                            Villa
                          </a>
                        </li>
                      </ul>
                      <a
                        href="/"
                        className="geodir_save-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Save"
                      >
                        <span>
                          <i className="fal fa-heart"></i>
                        </span>
                      </a>
                      <a
                        href="/"
                        className="compare-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Compare"
                      >
                        <span>
                          <i className="fal fa-random"></i>
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-camera"></i> 12
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3>
                        <a href="/">Kayak Point House</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        $ 500.000
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed"></i>
                            <span>5</span>
                          </li>
                          <li>
                            <i className="fal fa-bath"></i>
                            <span>1</span>
                          </li>
                          <li>
                            <i className="fal fa-cube"></i>
                            <span>510 ft2</span>
                          </li>
                        </ul>
                      </div>
                      <div className="geodir-category-footer fl-wrap">
                        <a href="/" className="gcf-company">
                          <img src="../assets/images/avatar/6.jpg" alt="" />
                          <span>By Andy Sposty</span>
                        </a>
                        <div
                          className="listing-rating card-popup-rainingvis tolt"
                          data-microtip-position="top"
                          data-tooltip="Average"
                          data-starrating2="3"
                        ></div>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="listing-item">
                  <article className="geodir-category-listing fl-wrap">
                    <div className="geodir-category-img fl-wrap">
                      <a
                        href="/"
                        className="geodir-category-img_item"
                      >
                        <img src="../assets/images/all/8.jpg" alt="" />
                        <div className="overlay"></div>
                      </a>
                      <div className="geodir-category-location">
                        <a
                          href="/"
                          className="map-item tolt"
                          data-microtip-position="top-left"
                          data-tooltip="On the map"
                        >
                          <i className="fas fa-map-marker-alt"></i> 70 Bright
                          St, Jersey City, NJ USA
                        </a>
                      </div>
                      <ul className="list-single-opt_header_cat">
                        <li>
                          <a href="/" className="cat-opt blue-bg">
                            Rent
                          </a>
                        </li>
                        <li>
                          <a href="/" className="cat-opt color-bg">
                            Apartment
                          </a>
                        </li>
                      </ul>
                      <a
                        href="/"
                        className="geodir_save-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Save"
                      >
                        <span>
                          <i className="fal fa-heart"></i>
                        </span>
                      </a>
                      <a
                        href="/"
                        className="compare-btn tolt"
                        data-microtip-position="left"
                        data-tooltip="Compare"
                      >
                        <span>
                          <i className="fal fa-random"></i>
                        </span>
                      </a>
                      <div className="geodir-category-listing_media-list">
                        <span>
                          <i className="fas fa-camera"></i> 21
                        </span>
                      </div>
                    </div>
                    <div className="geodir-category-content fl-wrap">
                      <h3>
                        <a href="/">Urban House</a>
                      </h3>
                      <div className="geodir-category-content_price">
                        1500 / per month
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Maecenas in pulvinar neque. Nulla finibus lobortis
                        pulvinar. Donec a consectetur nulla.
                      </p>
                      <div className="geodir-category-content-details">
                        <ul>
                          <li>
                            <i className="fal fa-bed"></i>
                            <span>5</span>
                          </li>
                          <li>
                            <i className="fal fa-bath"></i>
                            <span>3</span>
                          </li>
                          <li>
                            <i className="fal fa-cube"></i>
                            <span>1210 ft2</span>
                          </li>
                        </ul>
                      </div>
                      <div className="geodir-category-footer fl-wrap">
                        <a href="/" className="gcf-company">
                          <img src="../assets/images/avatar/5.jpg" alt="" />
                          <span>By Liza Kobart</span>
                        </a>
                        <div
                          className="listing-rating card-popup-rainingvis tolt"
                          data-microtip-position="top"
                          data-tooltip="Excellent
                                                "
                          data-starrating2="5"
                        ></div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <div className="pagination">
                <a href="/" className="prevposts-link">
                  <i className="fa fa-caret-left"></i>
                </a>
                <a href="/">1</a>
                <a href="/" className="current-page">
                  2
                </a>
                <a href="/">3</a>
                <a href="/">4</a>
                <a href="/" className="nextposts-link">
                  <i className="fa fa-caret-right"></i>
                </a>
              </div>

              <div className="small-footer fl-wrap">
                <div className="copyright">
                  {" "}
                  © Greenstone Builders Inc. 2022 . All rights reserved.
                </div>
                <a
                  className="custom-to-top color-bg custom-scroll-link"
                  href="/"
                >
                  <i className="fas fa-caret-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>




        <div className="main-register-wrap modal">
                <div className="reg-overlay"></div>
                <div className="main-register-holder tabs-act">
                    <div className="main-register-wrapper modal_main fl-wrap">
                        <div className="main-register-header color-bg">
                            <div className="main-register-logo fl-wrap">
                                <img src="../assets/images/white-logo.png" alt="" />
                            </div>
                            <div className="main-register-bg">
                                <div className="mrb_pin"></div>
                                <div className="mrb_pin mrb_pin2"></div>
                            </div>
                            <div className="mrb_dec"></div>
                            <div className="mrb_dec mrb_dec2"></div>
                        </div>
                        <div className="main-register">
                            <div className="close-reg"><i className="fal fa-times"></i></div>
                            <ul className="tabs-menu fl-wrap no-list-style">
                                <li className="current"><a href="/"><i className="fal fa-sign-in-alt"></i> Login</a></li>
                                <li><a href="/"><i className="fal fa-user-plus"></i> Register</a></li>
                            </ul>
                      
                            <div className="tabs-container">
                                <div className="tab">
                                 
                                    <div id="tab-1" className="tab-content first-tab">
                                        <div className="custom-form">
                                            <form method="post"  name="registerform">
                                                <label>Username or Email Address  * <span className="dec-icon"><i className="fal fa-user"></i></span></label>
                                                <input name="email" type="text" id="email"     defaultValue="" />
                                                {/*  <input name="email" type="text" id="email"    onClick="this.select()" defaultValue="" /> */}
                                                <div className="pass-input-wrap fl-wrap">
                                                    <label >Password  * <span className="dec-icon"><i className="fal fa-key"></i></span></label>
                                                    <input name="password" type="password" id="password"  autoComplete="off"  defaultValue="" />
                                                    {/* <input name="password" type="password" id="password"  autoComplete="off" onClick="this.select()" defaultValue="" /> */}
                                                    <span className="eye"><i className="fal fa-eye"></i> </span>
                                                </div>
                                                <div className="lost_password">
                                                    <a href="/">Lost Your Password?</a>
                                                </div>
                                                <div className="filter-tags">
                                                    <input id="check-a3" type="checkbox" name="check" />
                                                    <label htmlFor="check-a3">Remember me</label>
                                                </div>
                                                <div className="clearfix"></div>
                                                <button type="submit"  className="log_btn color-bg" id="btnLogin"> LogIn </button>
                                            </form>
                                        </div>
                                    </div>
                               
                                    <div className="tab">
                                        <div id="tab-2" className="tab-content">
                                            <div className="custom-form">
                                                <form method="post"   name="registerform" className="main-register-form" id="main-register-form2">
                                                    <label >Full Name  * <span className="dec-icon"><i className="fal fa-user"></i></span></label>
                                                    <input name="name" type="text"     defaultValue="" />
                                                    {/* <input name="name" type="text"    onClick="this.select()" defaultValue="" /> */}
                                                    <label>Email Address  * <span className="dec-icon"><i className="fal fa-envelope"></i></span></label>
                                                    <input name="email" type="text"    defaultValue="" />
                                                    {/* <input name="email" type="text"    onClick="this.select()" defaultValue="" /> */}
                                                    <div className="pass-input-wrap fl-wrap">
                                                        <label >Password  * <span className="dec-icon"><i className="fal fa-key"></i></span></label>
                                                        <input name="password" type="password"  autoComplete="off"   defaultValue="" />
                                                        {/* <input name="password" type="password"  autoComplete="off"  onClick="this.select()" defaultValue="" /> */}
                                                        <span className="eye"><i className="fal fa-eye"></i> </span>
                                                    </div>
                                                    <div className="filter-tags ft-list">
                                                        <input id="check-a2" type="checkbox" name="check" />
                                                        <label htmlFor="check-a2">I agree to the <a href="/">Privacy Policy</a> and <a href="/">Terms and Conditions</a></label>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                    <button type="submit"     className="log_btn color-bg"> Register </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                              
                                </div>
                              
                                <div className="log-separator fl-wrap"><span>or</span></div>
                                <div className="soc-log fl-wrap">
                                    <p>For faster login or register use your social account.</p>
                                    <a href="/" className="facebook-log"> Facebook</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>










      </div>
    );
  }
}

export default Home;
