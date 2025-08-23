import { getAnime } from '@/apollo/get-anime';
import AnimeModal from '@/components/anime-modal';

const AnimeModalIntercept = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const anime = await getAnime({ id: parseInt(id, 10) });

  return <AnimeModal {...anime} />;
};
export default AnimeModalIntercept;
