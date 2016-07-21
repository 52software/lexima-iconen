# Lexima SVG Sprites
Deze package bevat een manier om één svg sprite te maken van meerdere svg iconen.

## Icons
Deze map bevat alle gebruikte iconen, los als SVG opgeslagen. Dit dient enkel als resource gebruikt te worden, niet als asset.

## Public
De public map bevat 2 verschillende manieren om een icoon te tonen. Allebei zijn ze prima te gebruiken al zou ik de voorkeur geven aan de view variant. Check de bijhorende HTML bestanden om te kijken hoe dit precies werkt.

## Ik heb een nieuw icoon, en nu?
Hiervoor moet je nodejs geïnstalleerd hebben. Het compile proces werkt met behulp van Gulp. Het icoon zelf mag in SVG formaat in de 'icons' map. Vervolgens ga je in je terminal naar de root map van deze package en installeer je met NPM de benodigde packages:

```sh
npm install
```

Ga de installatie voer je de default gulp task uit:

```sh
gulp
```

De public folder wordt hierbij geupdate. Thats it!