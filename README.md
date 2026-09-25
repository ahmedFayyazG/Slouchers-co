# Slouchers & Co Shopify theme

A Shopify Online Store 2.0 theme built for Slouchers & Co. The layout follows the editorial furniture storefront reference, while all product cards, prices, variants, collections and cart data come from your own Shopify store.

## Preview locally

From the theme directory run:

```bash
shopify theme dev --store ixwqs4-at.myshopify.com
```

The CLI prints a local preview URL. This does not publish the theme.

## Set up in the theme editor

1. Upload your own hero photograph in **Homepage → Editorial hero**.
2. The category rails already use nine featured products from the Slouchers selection. Choose different products in the theme editor to change the cards.
3. The two product rails already point at the Slouchers collection of 50 selected products. Edit the collection or offset if you want a different order.
4. Add your own photography and copy to both **Editorial feature** sections.
5. Set the navigation menu in **Header** and update the FAQs and delivery copy.

Editorial image areas display Shopify placeholders until you assign your own photographs. Product and featured card imagery comes from the products already in your Slouchers Shopify store. The selected products are maintained in the Slouchers collection, rather than copied into theme assets.

## Structure

- `sections/sl-hero.liquid`: full-screen homepage hero
- `sections/sl-product-rail.liquid`: dynamic product carousel
- `sections/sl-category-rail.liquid`: configurable collection carousel
- `sections/sl-editorial.liquid`: editorial feature
- `sections/sl-faq.liquid`: FAQ accordion
- `snippets/sl-product-card.liquid`: shared product card for home, collection and search
- `assets/slouchers.css` and `assets/slouchers.js`: responsive layout and interactions

Run `shopify theme check` to lint the theme. To upload a review copy to Shopify, run `shopify theme push --unpublished` from this directory. Publishing the review copy is a separate action in Shopify Admin.
