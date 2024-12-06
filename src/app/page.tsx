import { Header } from "./_containers/header";
import { Latest } from "./_containers/latest";
import { Main } from "./_containers/main";
import { CallToAction } from "./_containers/call-to-action";
import { Newsletter } from "./_containers/newsletter";
import { Footer } from "./_containers/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Latest />
      <CallToAction />
      <Newsletter />
      <Footer />
    </div>
  );
}
