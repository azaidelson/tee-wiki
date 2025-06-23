import { Redirect } from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const target = useBaseUrl('/docs/category/introduction');
  return <Redirect to={target} />;
}

