# 🌿 EcoShop - Sustainable E-Commerce Website

![EcoShop](./assets/images/logo.png)

## Project Description

**EcoShop** is a modern e-commerce website focused on selling eco-friendly and sustainable products. The project was created by converting a **Figma design** to **HTML/CSS**. With its responsive design, it provides an excellent user experience across all devices (desktop, tablet, mobile).

---

## ✨ Key Features

### 1. **Responsive Design**

- 📱 Fully compatible with mobile, tablet, and desktop devices
- 🎯 Hamburger menu auto-activation on mobile devices
- 🖥️ Separate desktop and mobile header structure

### 2. **User Interface**

- 🔍 Product search functionality
- 👤 User profile and login options
- 🛒 Shopping cart functionality
- ✉️ Newsletter subscription section

### 3. **Product Management**

- 📦 Product categories (Clothing, Bath, Bedding, Home Goods, Furniture, Footwear, Accessories)
- 🎠 Interactive product slider/carousel
- 🖱️ Mouse-draggable product list
- ⬅️➡️ Previous/Next navigation buttons

### 4. **Interactive Components**

- 🍔 Mobile hamburger menu toggle functionality
- 🎪 Product carousel horizontal scrolling system
- 🎨 Smooth animations and transitions
- 📌 Sticky header effect

### 5. **SEO and Accessibility**

- 📄 Semantic HTML structure
- 🔤 Meta tags and viewport settings
- ♿ Accessible SVG icons
- 🌐 Multi-language support

---

## 📁 Project Structure

```
escoShop/
├── index.html              # Main HTML file
├── css/                    # Style files
│   ├── style.css          # Main stylesheet
│   ├── _base.css          # Base styles and reset
│   ├── header.css         # Header styles
│   ├── hero.css           # Hero section styles
│   ├── products.css       # Products section styles
│   ├── category.css       # Category styles
│   ├── new-products.css   # New products section styles
│   ├── brand-message.css  # Brand message styles
│   ├── why-choose-us.css  # Why choose us section styles
│   ├── footer.css         # Footer styles
│   ├── newletter.css      # Newsletter section styles
│   └── pop-up.css         # Pop-up styles
├── js/                     # JavaScript files
│   └── script.js          # Main JavaScript file
├── assets/                 # Media files
│   ├── images/            # Image files (logo, hero, products, etc.)
│   ├── icon/              # Icon files
│   └── fonts/             # Custom fonts
├── LICENSE                 # License file
└── README.md              # This file
```

---

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic structure
- **CSS3** - Responsive design, Flexbox, Grid
- **JavaScript (Vanilla)** - Interactivity and dynamic features

### Design

- **Figma** - Original design and prototyping
- **Responsive Web Design** - Mobile-first approach
- **CSS Grid & Flexbox** - Modern layout methods

---

## 📋 Page Sections

### 1. **Header**

- Promotion bar (Free shipping information)
- Logo and search bar
- User profile and cart icon
- Navigation menu

### 2. **Hero Section**

- Large headline: "Healthy cutlery, healthy body"
- Call-to-action buttons
- Hero image (product image)

### 3. **Product Categories**

- Visual categories in grid layout
- Category images and names
- Clickable category links

### 4. **New Products**

- Horizontal scrolling product carousel
- Product images and prices
- Previous/Next navigation buttons
- Mouse drag functionality

### 5. **Why Choose Us**

- 3 main advantages presentation
- Icons and description texts
- Brand values emphasis

### 6. **Brand Message**

- Eco-friendly product recommendations
- Relevant visuals and text

### 7. **Newsletter**

- Email input field
- Subscription button
- Promotional text

### 8. **Footer**

- Company information
- Links menu
- Social media links
- Copyright information

---

## 🚀 Getting Started

### Requirements

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Simple HTTP server (for local development)
- Text editor (VS Code, Sublime Text, etc.)

### Installation

1. **Clone or Download the Project**

```bash
git clone <repository-url>
# or manually download and open the folder
```

2. **Navigate to Project Folder**

```bash
cd escoShop
```

3. **Start Local Server (Optional)**

```bash
# If using Python (Python 3)
python -m http.server 8000

# or Node.js http-server
npx http-server
```

4. **Open in Browser**

```
http://localhost:8000
# or directly open index.html file in your browser
```

---

## 💻 Browser Compatibility

| Browser | Version | Support |
| ------- | ------- | ------- |
| Chrome  | 90+     | ✅ Full |
| Firefox | 88+     | ✅ Full |
| Safari  | 14+     | ✅ Full |
| Edge    | 90+     | ✅ Full |
| Opera   | 76+     | ✅ Full |

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
- Mobile: 0px - 640px
- Tablet: 641px - 1024px
- Desktop: 1025px+
```

---

## 🎯 JavaScript Functions

### 1. **Hamburger Menu Toggle**

```javascript
// Toggle mobile menu open/close
mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});
```

### 2. **Product Carousel Navigation**

```javascript
// Forward/backward navigation
next.addEventListener("click", () => {
  slider.scrollLeft += scrollAmount;
});
```

### 3. **Mouse Dragging**

```javascript
// Drag product list with mouse
slider.addEventListener("mousemove", (e) => {
  // Dragging operation
});
```

---

## 🎨 CSS Module Explanation

### **\_base.css**

- Global reset and base styles
- Color variables and font definitions
- Common utility classes

### **header.css**

- Header and navigation styles
- Sticky header effects
- Responsive header changes

### **hero.css**

- Hero section layout
- Banner and image styles
- Call-to-action button design

### **products.css**

- Product card styles
- Product grid layout
- Hover effects

### **new-products.css**

- Carousel container styles
- Scroll animations
- Navigation button styles

---

## 🔧 Customization Guide

### 1. **Change Color Scheme**

Edit CSS variables in `_base.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --text-color: #your-color;
}
```

### 2. **Add Products**

Add a new product card in the relevant section of `index.html`:

```html
<div class="product-card">
  <img src="./assets/images/product.jpg" alt="Product" />
  <h3>Product Name</h3>
  <p class="price">Price</p>
</div>
```

### 3. **Change Fonts**

Update font-family values in `_base.css`:

```css
body {
  font-family: "Your Font", sans-serif;
}
```

---

## 📊 File Size Information

| File Type  | Size                 |
| ---------- | -------------------- |
| HTML       | ~15 KB               |
| CSS        | ~45 KB               |
| JavaScript | ~3 KB                |
| Images     | ~500 KB+ (optimized) |

---

## ✅ Testing Checklist

- [ ] Check all links
- [ ] Test responsive design on mobile devices
- [ ] Check appearance on all browsers
- [ ] Test hamburger menu functionality
- [ ] Test product carousel
- [ ] Check form submissions
- [ ] Test image loading speed
- [ ] Check accessibility features

---

## 🚀 Future Enhancement Ideas

- [ ] Backend API integration
- [ ] Database product management
- [ ] User authentication system
- [ ] Shopping cart and checkout system
- [ ] Payment gateway integration
- [ ] Product filtering and search
- [ ] Customer reviews system
- [ ] Email marketing automation
- [ ] Analytics integration
- [ ] PWA features

---

## 📄 License

This project is distributed under the conditions specified in the [LICENSE](./LICENSE) file.

---

## 👨‍💻 Developer Notes

- Project was developed starting from **Figma design**
- Mobile-first approach was used
- Page performance optimized using SVG icons
- Responsive structure provided using CSS Flexbox and Grid
- Reduced external library dependencies by using Vanilla JavaScript

---

## 📞 Contact and Support

Please get in touch for any questions or suggestions.

---

## 🙏 Acknowledgments

- Figma designer
- Open source projects
- Web development community

---

**Last Updated:** June 2025  
**Version:** 1.0  
**Status:** Active Development
