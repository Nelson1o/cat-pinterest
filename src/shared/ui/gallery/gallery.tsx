import type { Cat } from "@/shared/types";
import { Card } from "../card";
import { useIntersection } from "@/shared/hooks";

import styles from "./styles.module.scss";

type GalleryProps = {
  type: string;
  cats?: Cat[];
  isLoading: boolean;
  fetchNextPage: () => void;
  isFavorite: (catId: string) => boolean;
  toggleFavorite: (cat: Cat) => void;
};

export const Gallery = ({
  type,
  cats,
  isLoading,
  fetchNextPage,
  isFavorite,
  toggleFavorite,
}: GalleryProps) => {
  const cursorRef = useIntersection(() => fetchNextPage());

  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        {cats !== undefined &&
          cats.map((cat) => (
            <Card
              key={cat.id}
              {...cat}
              isFavorite={isFavorite(cat.id)}
              toggleFavorite={toggleFavorite}
            />
          ))}
      </div>

      {type === "gallery" && (
        <div ref={cursorRef} className={styles.loader}>
          {isLoading && "... загружаем еще котиков ..."}
        </div>
      )}

      {type === "favorites" && cats?.length === 0 && (
        <div className={styles.loader}>{"Здесь пока что пусто :("}</div>
      )}
    </div>
  );
};
