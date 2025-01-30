import ContentRow from "./components/ConetentBox/ContentBox";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/Hero/Hero";


const App = () => {
  const trendingNow = [
    { src: 'https://storage.googleapis.com/a1aa/image/NIIN53SRbJbhKNOgflltz29uEdrFKdAsxdRUR77gRkW0eOIUA.jpg', alt: 'Movie 1' },
    { src: 'https://storage.googleapis.com/a1aa/image/fsOobNSElk0YHizffK5NhhEXdqeEeeJxIqjitW9HcFN3ZvDCF.jpg', alt: 'Movie 2' },
    { src: 'https://storage.googleapis.com/a1aa/image/R7auPXvaDHI2MBqTGjZau582ekOZzB4OTw0P88VJaQW4eOIUA.jpg', alt: 'Movie 3' },
    { src: 'https://storage.googleapis.com/a1aa/image/jqjFYKvMClYJJplO9KKtsR8RI48UPgcLadMfYUlEW69teOIUA.jpg', alt: 'Movie 4' },
    { src: 'https://storage.googleapis.com/a1aa/image/tbvIQLhDPv5sBBvZ3UIQaReCS1pAKsnbBQUXKSbUyGQxeOIUA.jpg', alt: 'Movie 5' },
  ];

  const topPicks = [
    { src: 'https://storage.googleapis.com/a1aa/image/2liwWeDq151tFyFeyfH3dbiz90o3IvitSJFQxff4xQMcs3BhC.jpg', alt: 'Movie 6' },
    { src: 'https://storage.googleapis.com/a1aa/image/2qiFG6A9ioozPxiU7MBoBCjoeek0lCYnLqgL3qZVeMpC7dQoA.jpg', alt: 'Movie 7' },
    { src: 'https://storage.googleapis.com/a1aa/image/YVCrGTcipXqNFlIy77e3eqncKF4vJeGiPmeAlczcPtrx27gQB.jpg', alt: 'Movie 8' },
    { src: 'https://storage.googleapis.com/a1aa/image/5mfnN2cHeShtkUfo1O5l8tJStVKYSgRI2f8uvHl5hFo317gQB.jpg', alt: 'Movie 9' },
    { src: 'https://storage.googleapis.com/a1aa/image/aZKetoAuffPvKITvcC4imsOatCF518fbGfUredtUIaQ9bvDCF.jpg', alt: 'Movie 10' },
  ];

  const recentlyAdded = [
    { src: 'https://storage.googleapis.com/a1aa/image/kmjAWrayBoYhJlr9gpz6Nrirm1t3On5koViUMldzDQjZvDCF.jpg', alt: 'Movie 11' },
    { src: 'https://storage.googleapis.com/a1aa/image/y6qtcesywhxXHqFxOr9xyeXiFWDAtnqtD0D0o9v1GeX86dQoA.jpg', alt: 'Movie 12' },
    { src: 'https://storage.googleapis.com/a1aa/image/lfeCqfBGhdXXPJwgPBBR02nrt6KPeeWY9Zxk7yvgd3gQt3BhC.jpg', alt: 'Movie 13' },
    { src: 'https://storage.googleapis.com/a1aa/image/ClZOyZvTDnJDONBYTWKlq97cMh76lsgyTe4rCfP7taHl9OIUA.jpg', alt: 'Movie 14' },
    { src: 'https://storage.googleapis.com/a1aa/image/4El2WDpcVJahKBLEwQT8j3pAItVRnv0Eqhq32ziHNVvcvDCF.jpg', alt: 'Movie 15' },
  ];

  return (
    <div className="bg-black text-white">
      <Header/>
      <HeroSection/>
      <section className="mt-8 px-4 md:px-8">
        <ContentRow title="Trending Now" movies={trendingNow} />
        <ContentRow title="Top Picks for You" movies={topPicks} />
        <ContentRow title="Recently Added" movies={recentlyAdded} />
      </section>
      <Footer/>
    </div>
  );
};

export default App;