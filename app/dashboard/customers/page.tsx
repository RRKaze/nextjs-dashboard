import  Metadata from 'next';

const metadata: typeof Metadata = {
    title: 'Customers',
};
export {metadata};

export default function Page() {
    return <p>Customers Page</p>;
  }