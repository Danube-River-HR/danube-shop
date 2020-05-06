# Danube Shop - Modern Online Retailer

## Introduction

Danube Shop is a modern redesign of a fashion e-commerce application. In accordance with our client's business expectations, we were tasked with implementing all the features one would expect from an online retailer in addition to improving the user interface.

The application is comprised of 3 main sections: the Product Overview, Related Products, and Product Reviews.

## Product Overview

_Developed by [John Lee](https://github.com/johncyprus)_

The Product Overview consists of the main product card and image gallery.

The product card displays descriptions, sizes, and styles available for the product and allows users to add the item with their desired size/quantity to a cart and optionally share the item on social media platforms. Selecting a different style of the same product will dynamically update the product's images and size/quantity availabilities.

The image gallery was designed to house high-resolution images of varying dimensions in a square frame without distortion. To further emphasize these images, a full-screen modal with zoom capabilities was implemented for users wanting to take a closer look. Users can browse between gallery images by clicking on the displayed arrows, thumbnails, or keyboard.

## Related Products

_Developed by [Gabriel Ng](https://github.com/gabrieln715)_

The Related Products consists of smaller, individual product cards and a product carousel.

Each related product card displays an item's name, rating, and price. Clicking these cards will update the Product Overview to reflect the clicked product. A "comparison" modal enables users to compare a related product's features with the currently viewed product.

The product carousel features all related products in the top row and favorited items in the bottom row. Users can create an "outfit" with these favorited items that persists via local storage. Fading and scrolling on the carousel add subtle enhancement to the user experience.

## Product Reviews

_Developed by [Mantas Ivaskevicius](https://github.com/MantasIK)_

The Product Reviews consist of a comprehensive rating scale and the list of reviews.

Each product is rated on a 5-star scale for overall satisfaction and breaks down the quantity of reviews by rating and user recommendations. Bars that measure this breakdown can dynamically render with newly added reviews.

Reviews can be sorted by relevance, helpfulness, and recency. Each review holds data regarding rating, text, photos, recommendation, and helpfulness. Users have the option of marking reviews as helpful or innapropriate, with the latter choice dynamically removing the review from the list.

Users can add their own reviews to a product using all the metrics listed above in addition to adding photos. Form logic prevents users from submitting reviews without providing crucial information such as contact info or text summary.

## Technology Stack

**React** was used to build and render dynamic, interactive browser components alongside HTML/CSS.

**Redux** was used to seamlessly distribute data received from an external API to over 20 React components. As all 3 sections of this application are dependent upon which product is currently being viewed, Redux was instrumental in managing our shared state whenever a new product was selected.

## Local Setup

This project makes use of the Filestack external api for certain review features.
Register at https://www.filestack.com/ to receive your api key.

- [ ] - Navigate to the directory and use `npm install` to install dependencies.
- [ ] - Configure `APIkey_example.js` with Filestack API key inside `src/components/RatingsAndReviews` and remove `_example` from the file name.
- [ ] - Use `npm start` to initialize the application.

## Screenshots

**Demo of product gallery and full-screen modal in Product Overview.**
![image of overview](./preview/Overview.gif)

**View of related products and product reviews.**
![image of overall](./preview/Overall.gif)
