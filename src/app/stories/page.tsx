import Story from "../../../components/Story";

export default function Stories() {
  return (
    <div>
      {/* header */}
      <div className="bg-[url('../../public/books.png')] bg-cover bg-center bg-no-repeat h-[50vh] relative">
        <div className="w-full h-full backdrop-brightness-75 flex flex-col">
          <h1 className="font-[eczar] text-5xl text-center mt-32 text-white">
            Immigrant Stories
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background" />
      </div>
      {/* stories */}
      <div className="flex flex-row flex-wrap justify-center mb-32">
        <Story imageUrl="" title="Title" description="Description" />
        <Story imageUrl="" title="Title" description="Description" />
        <Story imageUrl="" title="Title" description="Description" />
      </div>
    </div>
  );
}
