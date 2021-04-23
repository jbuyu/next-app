import Head from "next/head";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Nexter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex flex-between m-4">
        {/* left */}
        <div className=" w-1/2 flex space-x-4 ">
          <p>About</p>
          <p>store</p>
        </div>
        {/* right */}
        <div className=" w-1/2 flex justify-end space-x-4">
          <p >Gmail</p>
          <p>Images</p>
          <p>icon</p>
          <p>Image</p>
          </div>
      </header>
    </div>
  );
}
