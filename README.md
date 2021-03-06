# Reseptisovelluksen käyttöliittymä

Projektin pohjana on käytetty seuraavia työkaluja

[Create React App](https://github.com/facebook/create-react-app)
[Redux](https://redux.js.org/)
[Redux Toolkit](https://redux-toolkit.js.org/)

## Projektin lataaminen omalle koneelle

Sinulla täytyy olla [git](https://git-scm.com/) asennettuna.
Mene komentorivillä kansioon (hakemistoon) johon haluat koodikansion (allaoleva komento luo siis vielä uuden kansion) ja aja komento:

`git clone https://github.com/Heavytik/reseptit-frontend.git`

## Koodaaminen

Suositeltava editori on Visual Studio Code. Asenna se. Voi koodata muillakin, mutta esim. automaattinen koodimuotoilu hoituu tuolla parhaiten.

### Komentoriviltä ajettavat komennot

Komennot suoritetaan "juurikansiossa" reseptit-frontend

Asenna ensin [node + npm](https://nodejs.org/en/) LTS versio.
(voit testata asennuksen onnistumisen kirjoittamalla node -v ja npm -v)

Seuraavaksi asenna yarn [yarn](https://classic.yarnpkg.com/en/)

#### `yarn install`

Sovelluksen koodi tarvitsee toimiakseen lisäosia, joita ei tallenneta githubiin.Saat ne omalle koneellesi tuolla komennolla (package.json tiedostoon voi kirjoittaa mitä lisäosia sovellukseen asennetaan). Tämä komento täytyy asentaa aina jos joku asentaa uusia riippuvuuksia ("package.json" tiedosto muuttuu) ja tietysti aina ensimmäisellä kerralla kun repo on kloonattu koneelle.

#### `yarn start`

Tämä käynnistää käyttöliittymän ja voit selailla sitä omalla koneellasi localhostin portissa 3000.
[http://localhost:3000](http://localhost:3000)

#### `yarn build`

Ei vielä tarvita.

### Koodin kirjoittamisen perusteet

Tällä hetkellä koodi on vielä aika sekavaa. Osa pohjatiedostosta mukana tulleesta koodista on turhaa. Tärkeimmät tiedostot ovat src kansiossa. Siellä tärkeitä ovat erityisesti tiedosto App.tsx ja Features kansiossa olevat alikansiot. Niitä tiedostoja muokataan, kun sovellusta tehdään.

#### Tärkeimmät ohjeet muokkaukseen

Lähes kaikki näistä asioista kannattaa käydä läpi sellaisen kanssa, joka tuntee jo nämä käsitteet. Yksinkin voi opiskella, mutta paljon tulee silloin käytettyä turhaankin aikaa. Toki jonkin verran voi selailla. Tärkintä on ensin hankkia perusteet ja sen jälkeen katsoa näistä mallia, että miten se nyt siis tehdään.

[React](https://reactjs.org/docs/hello-world.html)
[React Router](https://reactrouter.com/web/example/basic)
[Redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)


