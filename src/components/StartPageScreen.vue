<template>
  <div>
    <OfferBanner text="schnapp dir pur: nur heute die 100 g packung für 2,99 euro kaufen!" />
    <TopBar :marginTop="50" />
    <Hero1 />
    <Container>
      <Banner1 />
    </Container>
    <Container>
      <TileRow :tiles="tiles1" />
    </Container>
    <Container>
      <Heading title="5 Gründe für unseren Kakao" />
    </Container>
    <Container>
      <Carousel :items="carouselItems1" />
    </Container>
    <Container>
      <TileRow :tiles="tiles2" />
    </Container>
    <Container>
      <Heading subtitle="du bekommst unseren koffein kakao bei folgenden partnern" />
    </Container>
    <Container>
      <Carousel :items="carouselItems2" :settings="carouselSettings2" />
    </Container>
    <Container>
      <Heading
        title="die kakaorevolution auf instagram"
        subtitle="poste #… mit etwas glück featuren wir dich auf unserer seite!"
      />
    </Container>
    <BackgroundBanner>
      <Carousel :items="carouselItems3" :settings="carouselSettings3" />
    </BackgroundBanner>
    <BackgroundBanner image="/img/green-bg.png">
      <img src="/img/newsletter_form.png" />
    </BackgroundBanner>
    <footer>
      <Container>
        <Columns>
          <Column>
            <h3>koffein kakao</h3>
            <a>Zutaten</a><br/>
            <a>Fairtrade</a><br/>
            <a>Rezepte</a><br/>
            <a>Zubereitung</a><br/>
          </Column>
          <Column>
            <h3>shop</h3>
            <a>Schokodrinks</a><br/>
            <a>Riegel</a><br/>
            <a>Zubehör</a><br/>
          </Column>
          <Column>
            <h3>koakult</h3>
            <a>Revolution</a><br/>
            <a>Das ist koakult</a><br/>
            <a>Geschichte</a><br/>
            <a>Team</a><br/>
            <a>Karriere</a><br/>
          </Column>
          <Column>
            <h3>b2b</h3>
            <a>Presse</a><br/>
            <a>B2B</a><br/>
          </Column>
          <Column>
            <h3>hilfe und service</h3>
            <a>Versand</a><br/>
            <a>Zahlung</a><br/>
            <a>Retoure</a><br/>
            <a>FAQ</a><br/>
            <a>Kontakt und Hilfe</a><br/>
          </Column>
        </Columns>
      </Container>
      <Container>
        <Columns>
          <Column flex="3">
            <h3>zahlungsmethoden</h3>
            <img src="/img/payment.png" />
          </Column>
          <Column flex="2">
            <h3>wir versenden mit</h3>
            <img src="/img/delivery.png" />
          </Column>
        </Columns>
        <Columns>
          <Column flex="3"></Column>
          <Column flex="2">
            <h3>werde teil der kakao-revolution!</h3>
            <img src="/img/social.png" />
          </Column>
        </Columns>
      </Container>
      <Container>© koakult GmbH 2019 Impressum | Datenschutz | AGB | Hilfe</Container>
    </footer>
  </div>
</template>

<script>
import TopBar from './TopBar.vue';
import OfferBanner from './OfferBanner.vue';
import Hero1 from './Hero1.vue';
import Banner1 from './Banner1.vue';
import Container from './Container.vue';
import TileRow from './TileRow.vue';
import Heading from './Heading.vue';
import Carousel from './Carousel.vue';
import BackgroundBanner from './BackgroundBanner.vue';
import Columns from './Columns.vue';
import Column from './Column.vue';

export default {
  name: "StartPageScreen",
  components: {
    OfferBanner,
    Container,
    TopBar,
    Hero1,
    Banner1,
    TileRow,
    Heading,
    Carousel,
    BackgroundBanner,
    Columns,
    Column
  },
  data() {
    return {
      tiles1: [
        {
          heading: "kakao kaufen",
          cta: "jetzt entdecken",
          image: "/img/cacao-bg.jpg",
        },
        {
          heading: "abo",
          cta: "jetzt entdecken",
          image: "",
        }
      ],
      tiles2: [
        {
          heading: "angebot",
          cta: "jetzt für 2,99€ shoppen",
        },
        {
          heading: "abo",
          cta: "jetzt entdecken",
          image: "",
        }
      ],
      carouselItems1: [
        { image: "/img/carousel1.png" },
        { image: "/img/carousel2.png" },
        { image: "/img/carousel3.png" },
        { image: "/img/carousel1.png" },
        { image: "/img/carousel2.png" }
      ],
      carouselItems2: [
        { image: "/img/reseller/1.png" },
        { image: "/img/reseller/2.png" },
        { image: "/img/reseller/3.png" },
        { image: "/img/reseller/4.png" },
        { image: "/img/reseller/5.png" },
        { image: "/img/reseller/6.png" },
        { image: "/img/reseller/1.png" },
        { image: "/img/reseller/2.png" },
        { image: "/img/reseller/3.png" },
        { image: "/img/reseller/4.png" }
      ],
      carouselItems3: [
        { image: "/img/placeholder_gray.png" },
        { image: "/img/placeholder_gray.png" },
        { image: "/img/placeholder_gray.png" },
        { image: "/img/placeholder_gray.png" },
        { image: "/img/placeholder_gray.png" },
        { image: "/img/placeholder_gray.png" },
        { image: "/img/placeholder_gray.png" },
        { image: "/img/placeholder_gray.png" },
      ],
      carouselSettings2: {
        perView: 6
      },
      carouselSettings3: {
        perView: 4
      }
    }
  }
}
</script>