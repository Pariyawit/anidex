import { getAnime } from '@/apollo/get-anime';

const AnimePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const anime = await getAnime({ id: parseInt(id) });
  return <div>{anime.title.english}</div>;
};
export default AnimePage;
