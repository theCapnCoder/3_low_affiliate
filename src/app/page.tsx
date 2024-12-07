import { Header } from "./_containers/header";
import { Latest } from "./_containers/latest";
import { Main } from "./_containers/main";
import { CallToAction } from "./_containers/call-to-action";
import { Newsletter } from "./_containers/newsletter";
import { Footer } from "./_containers/footer";
import { Container } from "./_components/container";
import { Products } from "./_containers/products";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main />
      <Latest />
      <CallToAction />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}
