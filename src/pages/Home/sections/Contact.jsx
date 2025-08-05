import { useReducer, useCallback, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import emailjs from "@emailjs/browser";

const initialState = {
  form: { name: "", email: "", message: "" },
  submitted: false,
  containerVariants: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, staggerChildren: 0.1 },
    },
  },
  itemVariants: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  },
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
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const animateControls = useAnimation();
  const isInView = useInView(titleRef, { once: true });

  useEffect(() => {
    if (isInView) {
      animateControls.start("visible");
    }
  }, [animateControls, isInView]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE_FORM", field: name, value });
  }, [dispatch]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (state.form.name.trim() === "" || state.form.message.trim() === "") return;

    const email_data = { ...state.form, email: state.form.email || "No email provided" };

    email_data.name = email_data.name.trim();
    email_data.message = email_data.message.trim();

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, formRef.current, {
      publicKey: import.meta.env.VITE_EMAILJS_USER_ID,
    })
      .then((response) => {
        dispatch({ type: "SUBMIT" });
        console.log('Email sent successfully!', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email.', error);
      });

  }, [dispatch, state.form]);

  return (
    <motion.section
      id="contact"
      className="flex flex-col justify-center items-center gap-10 my-16 p-5 md:p-10"
      initial="hidden"
      animate={animateControls}
      variants={state.containerVariants}
    >
      <motion.h1
        ref={titleRef}
        className="mb-6 font-rubik font-medium text-primary text-4xl sm:text-5xl"
        variants={state.itemVariants}
      >
        Reach Out
      </motion.h1>

      {!state.submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 shadow-md px-6 md:px-8 py-8 border-2 border-secondary rounded-lg w-full max-w-80 md:max-w-lg"
          variants={state.itemVariants}
          ref={formRef}
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="mb-2 font-rubik text-primary"
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
              className="bg-bgColor/50 px-4 py-2 border-[1px] border-primary/50 hover:border-2 hover:border-secondary rounded-lg outline-none w-full font-robotoMono text-primary text-sm md:text-base"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="mb-2 font-rubik text-primary"
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
              className="bg-bgColor/50 px-4 py-2 border-[1px] border-primary/50 hover:border-2 hover:border-secondary rounded-lg outline-none w-full font-robotoMono text-primary text-sm md:text-base"
            />
          </div>

          <div className="flex flex-col gap-2 mb-4">
            <label
              htmlFor="message"
              className="mb-2 font-rubik text-primary"
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
              className="bg-bgColor/50 px-4 py-2 border-[1px] border-primary/50 hover:border-2 hover:border-secondary rounded-lg outline-none w-full font-robotoMono text-primary text-sm md:text-base"
              required
            />
          </div>

          <motion.button
            type="submit"
            className="bg-primary mx-auto px-4 py-2 rounded-lg font-robotoMono font-medium text-bgColor"
            whileHover={{ scale: 1.05, backgroundColor: "#51bfff" }}
            transition={{ duration: 0.3 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      ) : (
        <motion.div
          key="thankyou"
          className="shadow-md p-8 border-2 border-secondary rounded-lg w-full max-w-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 font-rubik font-medium text-secondary text-2xl">
            Thank you!
          </h2>
          <p className="font-robotoMono text-primary">
            Your message has been successfully sent. I{"'"}ll get back to you as soon as possible.
          </p>
        </motion.div>

      )}
    </motion.section>
  );
};

export default ContactForm;
