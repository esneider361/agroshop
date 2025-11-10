# Blueprint: Agroshop

## Overview

This project is a modern, single-page web application for an agricultural products store called "Agroshop". The application showcases various farm products, categorized for easy browsing, and will include a functional shopping cart. The goal is to create a visually appealing, responsive, and interactive user experience using modern web technologies.

## Design & Features

- **Modern UI/UX:**
    - Clean and visually appealing design with a professional color palette and typography.
    - Responsive layout for optimal viewing on all devices.
    - Interactive UI elements, including a dynamic product grid and a shopping cart modal.
    - Use of Web Components (`<product-card>`) for a modular and maintainable structure.
- **Product Showcase:**
    - A grid-based layout to display products.
    - Sidebar for filtering products by category ("All", "Fruits", "Vegetables", "Dairy", "Cereals").
    - The product grid dynamically updates based on the selected category.
- **Shopping Cart:**
    - A cart icon in the header shows the number of items.
    - Clicking the cart icon opens a modal displaying the items in the cart.
    - Functionality to close the cart modal.
- **Styling:**
    - A professional and modern design.
    - Custom properties (CSS Variables) for easy theming.
    - Hover effects on products and links to improve user feedback.

## Current Plan

- **Fix JavaScript Logic:**
    - Implement a `displayProducts` function to render products in the `product-container` based on a category filter.
    - Add event listeners to the category sidebar links to trigger the `displayProducts` function.
    - Ensure all products are displayed by default when the page loads.
- **Implement Shopping Cart:**
    - Add event listeners to open and close the shopping cart modal.
    - Create the logic to add products to the cart (this will be a basic implementation for now).
- **Refine HTML & CSS:**
    - Add a placeholder for the logo.
    - Add a CSS class to visually indicate the currently active category filter.
