<template>
  <footer>
    <Container>
      <Columns>
        <Column>
          <h3>koffein kakao</h3>
          <a>Zutaten</a>
          <br />
          <a>Fairtrade</a>
          <br />
          <a>Rezepte</a>
          <br />
          <a>Zubereitung</a>
          <br />
        </Column>
        <Column>
          <h3>shop</h3>
          <a>Schokodrinks</a>
          <br />
          <a>Riegel</a>
          <br />
          <a>Zubehör</a>
          <br />
        </Column>
        <Column>
          <h3>koakult</h3>
          <a>Revolution</a>
          <br />
          <a>Das ist koakult</a>
          <br />
          <a>Geschichte</a>
          <br />
          <a>Team</a>
          <br />
          <a>Karriere</a>
          <br />
        </Column>
        <Column>
          <h3>b2b</h3>
          <a>Presse</a>
          <br />
          <a>B2B</a>
          <br />
        </Column>
        <Column>
          <h3>hilfe und service</h3>
          <a>Versand</a>
          <br />
          <a>Zahlung</a>
          <br />
          <a>Retoure</a>
          <br />
          <a>FAQ</a>
          <br />
          <a>Kontakt und Hilfe</a>
          <br />
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
</template>

<script>
import Columns from './../molecules/Columns.vue';
import Column from './../molecules/Column.vue';
import Container from './../atoms/Container.vue';

export default {
  name: "Footer",
  props: {

  },
  components: {
    Container,
    Column,
    Columns
  }
}
</script>

<style lang="scss" scoped>
.footer {
}
</style>