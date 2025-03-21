import fs from "fs";
import path from "path";
import Story from "../../../components/Story";

export default function Stories() {
  const storiesDirectory = path.join(process.cwd(), "stories_data");
  const filenames = fs.readdirSync(storiesDirectory);

  const stories = filenames.map((filename) => {
    const filePath = path.join(storiesDirectory, filename);
    const fileContent = JSON.parse(fs.readFileSync(filePath, "utf8"));

    return {
      slug: filename.replace(".json", ""),
      title: fileContent.title || "Untitled",
      description: fileContent.content || "No description available.",
      imageUrl: (fileContent.images && fileContent.images[0]) || "",
    };
  });

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
    </div>
  );
}
