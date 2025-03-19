export default function Contact() {
    return (
      <div>
        {/* header */}
        <h1 className="font-[eczar] text-5xl text-center mt-32 text-white">Contact Us</h1>
        {/* form */}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScNeg5d3LvEkOGym_uV5oNoOT_hGKN5gidLDN195iK6D8UQAQ/viewform?embedded=true" width="640" height="824" className="overflow-y-scroll h-[60vh] m-auto">Loading…</iframe>
        
        {/* TODO: use custom form in the future */}
        {/* <form className="bg-amber-500 m-auto md:w-7/12 lg:w-5/12 w-11/12 flex flex-col items-center p-8 space-y-4">
          <div className="flex w-full space-x-4">
            <input type="text" placeholder="First Name" className="flex-1 bg-white text-black font-[eczar] p-2" required/>
            <input type="text" placeholder="Last Name" className="flex-1 bg-white text-black font-[eczar] p-2" required/>
          </div>
          <input type="text" placeholder="Email Address" className="w-full bg-white text-black font-[eczar] p-2" required/>
          <textarea 
            name="message" 
            id="message" 
            placeholder="Message" 
            className="w-full bg-white text-black font-[eczar] p-2 resize-none h-32" required>
          </textarea>
          <button type="submit" className="bg-black text-white font-[eczar] px-6 py-2 mt-4">Submit</button>
        </form> */}
      </div>
    );
  }
  