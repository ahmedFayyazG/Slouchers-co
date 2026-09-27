# Slouchers & Co Shopify theme

A Shopify Online Store 2.0 theme built for Slouchers & Co. The layout follows the editorial furniture storefront reference, while all product cards, prices, variants, collections and cart data come from your own Shopify store.

## Preview locally

From the theme directory run:

```bash
shopify theme dev --store ixwqs4-at.myshopify.com
```

The CLI prints a local preview URL. This does not publish the theme.

## Set up in the theme editor

1. The homepage includes a video hero, collection categories, editorial furniture sections, benefits, testimonials, and a product rail. Open **Customize → Home page** to change their text and order.
2. The product rail uses the Slouchers collection of the 50 selected store products. Edit that collection or its section settings to change the order.
3. Choose a Shopify video or image in **Editorial hero** to replace its bundled default. Update the other editorial photos and copy in their respective sections.
4. Set the navigation menu in **Header**, and update the FAQs and delivery copy.

The bundled reference media and fonts let the homepage render locally. Confirm usage rights for third-party assets before publishing the storefront. Product imagery and prices come from your Slouchers Shopify products; the selected products are maintained in the Slouchers collection, rather than copied into theme assets.

## Structure

- `sections/sl-hero.liquid`: full-screen homepage hero
- `sections/sd-feature.liquid`, `sections/sd-family.liquid`, `sections/sd-follow.liquid`: editorial homepage sections
- `sections/sd-marquee.liquid`, `sections/sd-testimonials.liquid`: motion and review sections
- `sections/sl-product-rail.liquid`: dynamic product carousel
- `sections/sl-category-rail.liquid`: configurable collection carousel
- `sections/sl-editorial.liquid`: editorial feature
- `sections/sl-faq.liquid`: FAQ accordion
- `snippets/sl-product-card.liquid`: shared product card for home, collection and search
- `assets/slouchers.css`, `assets/sd-v2.css`, and `assets/slouchers.js`: responsive layout and interactions

Run `shopify theme check` to lint the theme. To upload a review copy to Shopify, run `shopify theme push --unpublished` from this directory. Publishing the review copy is a separate action in Shopify Admin.
