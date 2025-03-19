
export default function Mission() {
    return (
      <div>
        <div className="bg-[url('../../public/books.png')] bg-cover bg-center bg-no-repeat h-[50vh] relative">
            <div className="w-full h-full backdrop-brightness-75 flex flex-col">
                <h1 className="font-[eczar] text-5xl text-center mt-32 text-white">Mission Statement</h1>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background" />
        </div>
          <p className="font-[eczar] text-center text-xl m-16">
            Our mission is to let immigrants have a voice by providing a platform where they can upload their personal narratives. Rather than focusing on their struggles, we aim to challenge dominant perspectives. 
            This archive serves as a living testament to the resilience, struggles, and triumphs of those who have journeyed across borders, ensuring that their stories are preserved. 
          </p>
      </div>
    );
  }
  