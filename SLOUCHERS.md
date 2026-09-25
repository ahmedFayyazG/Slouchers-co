# Slouchers – Shopify theme

Started from Shopify's official Skeleton theme (Online Store 2.0).

## Run locally (live reload with real store data)
```bash
npm install -g @shopify/cli          # once
cd "~/Documents/Shopify Themes/Slouchers"
shopify theme dev --store YOUR-STORE.myshopify.com
```
Opens http://127.0.0.1:9292 – saves hot-reload. The live site is not touched.

## Upload
```bash
shopify theme check                  # lint
shopify theme push --unpublished     # upload as a new draft theme
```
Then preview and publish from Shopify admin → Online Store → Themes.

## Where things go
- layout/     page shell (theme.liquid)
- templates/  JSON: which sections appear on each page type
- sections/   editable page sections (each has a {% schema %})
- blocks/     smaller pieces used inside sections
- snippets/   reusable partials – {% render 'name' %}
- assets/     CSS / JS / images
- config/     global theme settings (colours, fonts)
- locales/    text translations
