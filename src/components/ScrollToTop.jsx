import { useEffect } from "react";
export default function ScrollBody() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    var scrollpos = window.scrollY;
    const chevron = document.getElementsByClassName("chevron-scroll");

    function add_class_on_scroll() {
      chevron[0].classList.add("activo");
    }

    function remove_class_on_scroll() {
      chevron[0].classList.remove("activo");
    }
    window.addEventListener("scroll", function () {
      //Here you forgot to update the value
      scrollpos = window.scrollY;

      if (scrollpos > 400) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });
  }, []);

  return (
    <>
      <button
        className="absolute"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <div id="go-top" className="chevron-scroll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    </>
  );
}
