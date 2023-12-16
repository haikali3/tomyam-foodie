import Link from 'next/link';
import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Tomyam Tayar</h1>
            <p>Enak dimakey begitu saja abe ku!</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Tom Yam Community</Link>
            <Link href="/meals">Browse Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            Tomyam Tayar is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Tomyam Tayar is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why Tomyam Tayar?</h2>
          <p>
            Tomyam Tayar is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            Tomyam Tayar is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
