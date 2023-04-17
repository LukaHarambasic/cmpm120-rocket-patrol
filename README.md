# Rocket patrol with Phaser 3 + Vite (incl. ESlint + Prettier)

> Phaser 3 set up with Vite (incl. ESlint + Prettier) based on the [article](https://saricden.com/how-to-setup-a-phaser-3-project-with-vite) from [@saricden](https://github.com/saricden)

[![Demo implementation](https://img.shields.io/badge/Demo_Implementation-344BDE?style=flat)](https://github.com/LukaHarambasic/phaser3-vite-RocketPatrol)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/github/LukaHarambasic/phaser3-vite-template)

## Why Phaser 3 with Vite?

- Hot reloading
- Super fast local server
- Easy to deploy, e.g. Vercel, Netlify
- Easy to edit, e.g. Stackblitz, Codespaces
- Easily use other npm packages
- ESlint & Prettier work out of the box

## Usage

1. Click on `Use this template`
2. Follow the steps to create a new repository
3. Clone repository onto your local machine
4. Open the local version with your favourite Terminal
5. Install the dependencies `npm run i`
6. Run `npm run dev` to start the local server (you need to run this every time you want to work on your project)
7. That's it, when you update a file in this project the website will automatically reload (hot reload)

## Structure

- All assets (images, audio files, ...) have to be placed inside the `public` folder. E.g. the audio file `public/explosion.wav` is in your code available under `./explosion.wav` as Vite copies this folder over without doing anything to the included files.
- More to come...

## Todos

- [ ] Implement eslint & prettier

## Opportunities

- [ ] Add vitest
- [ ] Add typescript
