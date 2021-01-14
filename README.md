# Portfolio

My portfolio website build with **Angular CLI** (version 11.0.2). I created it in order to show more details about me, contact methods and group together rest of my projects. Thank you for visiting!

## Technologies

In this project I'm using:
- Angular
- Angular Universal (SSR)
- TypeScript
- SCSS
- Git
- Ubuntu (for deployment)

## Setup

To install this project locally clone the repository and use **npm**.<br>
`$ npm install`

To work at **localhost:4200** in watch mode. Add `-o` flag to open automatically in your default browser.<br>
`$ ng serve` 

To build SSR deploy-ready app. The outcome will be located at **/dist** folder.<br>
`$ npm run build:ssr`

To test your built SSR app locally.<br>
`$ npm run serve:ssr`

## Server

Website is deployed by me on **Ubuntu** server using **NGINX**, **PM2** and **UFW**. I'm using my own domain provided by [nazwa.pl](https://nazwa.pl/). It's build with **Angular Universal (SSR)** which improves **SEO** a lot.

## Accessibility

My portfolio is accessible for users that are limited to keyboard or even NonVisual Desktop Access. To make sure that everything's fine I tested it with **NVDA** and Tab button by myself.

## Layout

Layout is designed by me with the exception of animated sphere made by [wontem](https://codepen.io/wontem).
Writing it from scratch and taking care of **RWD** was a nice challenge that helped me to understand UI and UX much better.

## Contact form

For contact form I'm using [Formspree](https://formspree.io/) backend service. It's convenient and reliable, such a perfect match for a frontend developer.

## Devicon

All of **SVG** icons in the *skills* section come from [Devicon v2](https://github.com/devicons/devicon).

### Favicon

![Favicon](https://github.com/rawdanowiczdev/portfolio/blob/main/src/assets/favicon.png) Favicon created by [Freepik](https://www.freepik.com/).
