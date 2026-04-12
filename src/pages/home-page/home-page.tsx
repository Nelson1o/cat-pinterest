import { useParams } from "react-router";

import { Gallery, Header } from "@/shared/ui";
import { useCats, useFavorites } from "@/shared/hooks";

import styles from "./styles.module.scss";

export const HomePage = () => {
  const { type } = useParams();

  const { data, isFetching, fetchNextPage } = useCats();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const displayedData = type === "gallery" ? data : favorites;

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className="container">
          <Gallery
            type={type ?? ""}
            cats={displayedData}
            isLoading={isFetching}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
            fetchNextPage={fetchNextPage}
          />
        </div>
      </main>
    </>
  );
};
