import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    // <main className={styles.main}>
    <>
      <HeroSection
        title={"LET'S WATCH MOVIE TOGETHER"}
        imageUrl={"/home.svg"}
      />
    </>
  );
}
