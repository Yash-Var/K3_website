import "flowbite";
import "flowbite-react";
import { useState } from "react";
import axios from "axios";
const url = "http://localhost:5000/";
const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }
  function submit(e) {
    e.preventDefault();
    console.log("click");
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        message: data.message,
      })
      .then((res) => {
        console.log(res.data);
        alert("Thanks for Equiring we will shortly contact you :)");
        setData({
          name: "",
          email: "",
          message: "",
        });
      });
  }
  return (
    <div className="p-5">
      <section
        class="text-gray-600 body-font relative dark:text-gray-400 darbg-gray-900"
        id="contact"
      >
        <div class="absolute inset-0 bg-gray-300 dark:bg-gray-900">
          <iframe
            class="absolute inset-0"
            width="100%"
            height="100%"
            frameborder="0"
            title="Kiet Koders Korner"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4549.7246936637375!2d77.49967979760052!3d28.75559624481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1670765354107!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <form
            class="lg:w-1/3 md:w-1/2 bg-white dark:bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
            onSubmit={(e) => submit(e)}
          >
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font dark:text-white">
              Contact Us
            </h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              We do Competitive Programming 🥉
            </p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => handle(e)}
                value={data.name}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => handle(e)}
                value={data.email}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div class="relative mb-4">
              <label
                for="message"
                class="leading-7 text-sm text-gray-600"
                id="message"
                name="message"
                onChange={(e) => handle(e)}
                value={data.message}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                onChange={(e) => handle(e)}
                value={data.message}
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
            <p class="text-xs text-gray-500 mt-3">@kiet_koders_korner</p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
