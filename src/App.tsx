import { Header } from './components/Header/Header';
import { MapView } from './components/MapView/MapView';

export const App = () => {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <section className="section">
          <MapView />
        </section>
      </main>
    </div>
  );
};
