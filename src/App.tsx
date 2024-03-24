import { Brief } from '@/components/brief';
import { Dlc } from '@/components/dlc';
import { Header } from '@/components/header';
import { Leading } from '@/components/leading';
import { Product } from '@/components/product';
import { Pv } from '@/components/pv';

function App() {
  return (
    <main>
      <Header />
      <Leading />
      <Pv />
      <Product />
      <Dlc />
      <Brief />
    </main>
  );
}

export default App;
