export default function Home() {
  return (
    <div>
      {/* section 1 - title */}
      <div className="bg-[url('../../public/books.png')] bg-cover bg-center bg-no-repeat h-screen relative">
        <div className="w-full h-full backdrop-brightness-75 flex flex-col justify-center">
          <h1 className="font-[inspiration] text-9xl text-center text-white">Immigrant Stories</h1>
          <p className="font-[ezcar] text-2xl text-center m-8 text-white">An archive of perspectives written by immigrants</p>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background" />

      </div>
      {/* section 2 - tell your story */}
      <div className="mb-40">
        <h1 className="font-[inspiration] text-foreground text-6xl text-center mt-20">Tell Your Story</h1>
        <p className="font-[ezcar] text-foreground text-center m-8 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="flex justify-center gap-4 h-[40vh]">
          <div className="w-1/4 bg-amber-600 h-full">placeholder div</div>
          <div className="w-1/4 bg-amber-600 h-full">placeholder div</div>
          <div className="w-1/4 bg-amber-600 h-full">placeholder div</div>
        </div>
        <div className="flex justify-center mt-8">
          <a href="https://forms.gle/pfc1T2dyYW7xQzj78" className="bg-[#F9DFA6] text-black px-8 py-4 font-[eczar] text-2xl hover:opacity-90 rounded-sm transition">Submit Your Story Here!</a>
        </div>
      </div>
    </div>
  );
}
