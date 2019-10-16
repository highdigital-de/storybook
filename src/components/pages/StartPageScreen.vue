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
    <BackgroundBanner backgroundImage="/img/products/wellenlinie.svg">
      <Container>
        <Heading
          title="die kakaorevolution auf instagram"
          subtitle="poste #… mit etwas glück featuren wir dich auf unserer seite!"
        />
        <Carousel :items="carouselItems3" :settings="carouselSettings3" />
      </Container>
    </BackgroundBanner>
    <BackgroundBanner backgroundImage="/img/green-bg.png">
      <Container>
        <img src="/img/newsletter_form.png" />
      </Container>
    </BackgroundBanner>
    <Footer />
  </div>
</template>

<script>
import TopBar from './../molecules/TopBar.vue';
import OfferBanner from './../atoms/OfferBanner.vue';
import Hero1 from './../molecules/Hero1.vue';
import Banner1 from './../molecules/Banner1.vue';
import Container from './../atoms/Container.vue';
import TileRow from './../molecules/TileRow.vue';
import Heading from './../atoms/Heading.vue';
import Carousel from './../organisms/Carousel.vue';
import BackgroundBanner from './../atoms/BackgroundBanner.vue';
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import Footer from './../organisms/Footer.vue';

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
    Column,
    Footer
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