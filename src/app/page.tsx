import fs from "fs";
import path from "path";
import Story from "../../components/Story";

export default function Home() {
  const storiesDirectory = path.join(process.cwd(), "stories_data");
  const filenames = fs.readdirSync(storiesDirectory);

  const stories = filenames
    .map((filename) => {
      const filePath = path.join(storiesDirectory, filename);
      const fileContent = JSON.parse(fs.readFileSync(filePath, "utf8"));

      return {
        slug: filename.replace(".json", ""),
        title: fileContent.title || "Untitled",
        description: fileContent.content || "No description available.",
        imageUrl: (fileContent.images && fileContent.images[0]) || "",
      };
    })
    .slice(0, 3);

  return (
    <div>
      {/* section 1 - title */}
      <div className="bg-[url('../../public/books.png')] bg-cover bg-center bg-no-repeat h-screen relative">
        <div className="w-full h-full backdrop-brightness-75 flex flex-col justify-center">
          <h1 className="font-[inspiration] text-9xl text-center text-white">
            Immigrant Stories
          </h1>
          <p className="font-[ezcar] text-2xl text-center m-8 text-white">
            An archive of perspectives written by immigrants
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background" />
      </div>
      {/* section 2 - tell your story */}
      <div className="mb-40">
        <h1 className="font-[inspiration] text-foreground text-6xl text-center mt-20">
          Tell Your Story
        </h1>
        <p className="font-[ezcar] text-foreground text-center m-8 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* stories */}
        <div className="flex flex-row flex-wrap justify-center mb-32">
          {stories.map((story, index) => (
            <Story
              key={index}
              imageUrl={story.imageUrl}
              title={story.title}
              description={story.description}
              slug={story.slug} // Pass slug for linking to full story
            />
          ))}
        </div>
        {/* submit your story */}
        <div className="flex justify-center mt-8">
          <a
            href="https://forms.gle/pfc1T2dyYW7xQzj78"
            className="bg-[#F9DFA6] text-black px-8 py-4 font-[eczar] text-2xl hover:opacity-90 rounded-sm transition active:opacity-70 hover:shadow-[0px_4px_6px_0px_rgba(234,_179,_8,_0.5)] hover:scale-105"
          >
            Submit Your Story Here!
          </a>
        </div>
      </div>
    </div>
  );
}
