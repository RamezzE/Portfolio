import { useReducer } from "react";
import { motion } from "framer-motion";
import useOnScreen from "../../../components/useOnScreen";

const initialState = {
  form: { name: "", email: "", message: "" },
  submitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return { ...state, form: { ...state.form, [action.field]: action.value } };
    case "SUBMIT":
      return { ...state, submitted: true };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const ContactForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [titleRef, isTitleVisible] = useOnScreen({ threshold: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FORM", field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
    console.log(state.form); // Log form data (you can add email submission logic here)
  };

  return (
    <motion.section
      id="contact"
      className="flex flex-col justify-center items-center p-5 md:p-10 gap-10 my-16"
      initial="hidden"
      animate={isTitleVisible ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.h1
        ref={titleRef}
        className="text-primary font-rubik font-medium text-4xl sm:text-5xl mb-6"
        variants={itemVariants}
      >
        Reach Out
      </motion.h1>

      {!state.submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="w-full max-w-80 md:max-w-lg py-8 px-6 md:px-8 rounded-lg shadow-md flex flex-col gap-4 border-2 border-secondary"
          variants={itemVariants}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className=" text-primary font-rubik mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              value={state.form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 text-primary text-sm md:text-base font-robotoMono bg-bgColor/50 outline-none rounded-lg border-[1px] border-primary/50 hover:border-secondary hover:border-2"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className=" text-primary font-rubik mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Optionally, leave your email"
              value={state.form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 text-primary text-sm md:text-base font-robotoMono bg-bgColor/50 outline-none rounded-lg border-[1px] border-primary/50 hover:border-secondary hover:border-2"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="message"
              className=" text-primary font-rubik mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              rows="5"
              value={state.form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 text-primary text-sm md:text-base font-robotoMono bg-bgColor/50 outline-none rounded-lg border-[1px] border-primary/50 hover:border-secondary hover:border-2"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="bg-primary text-bgColor font-robotoMono font-medium py-2 px-4 rounded-lg mx-auto"
            whileHover={{ scale: 1.05, backgroundColor: "#51bfff" }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          className="w-full max-w-lg p-8 rounded-lg shadow-md text-center border-secondary border-2"
          variants={itemVariants}
        >
          <h2 className="text-2xl text-secondary font-medium font-rubik mb-4">Thank you!</h2>
          <p className="text-primary font-robotoMono">Your message has been successfully sent. I{"'"}ll get back to you as soon as possible.</p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ContactForm;
