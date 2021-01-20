import { NextSeo } from 'next-seo';

const Page = (props) => {
  const { name, path, children } = props;

  const title = name ? `bopeng95 - ${name}` : 'bopeng95';
  const url = `https://bopeng.co${path}`;

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{ url, title }} />
      {children}
    </>
  );
};

export default Page;
