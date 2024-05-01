import Head from "next/head";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import useFormPersist from "react-hook-form-persist";

import Heading from "../components/Heading";
import styles from "../styles/App.module.css";

import Link from "next/link";

const Email = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const router = useRouter();

  const submit = (data) => {
    console.log(data);
    router.push("/password");
  };

  const error = (data) => {
    console.log(data);
  };

  useFormPersist("form", { watch, setValue });

  return (
    <div>
      <Head>
        <title>Email</title>
      </Head>
      <Heading tag="h2" text="Email-enter-page" />
      <Heading tag="h4" text="Type your e-mail" />
      <form onSubmit={handleSubmit(submit, error)}>
        <div className={styles.input_button_container}>
          <div className={styles.input_container}>
            <input
              className={`${styles.input} ${
                errors.email ? styles.input_error : ""
              }`}
              type="text"
              placeholder="e-mail"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email Address is required",
                },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
                  message: "Invalid e-mail format",
                },
              })}
              aria-invalid={errors.email ? true : false}
            />
            <span className={styles.error}>
              {errors.email && <a role="alert">{errors.email.message}</a>}
            </span>
          </div>
          <button
            className={styles.button}
            type="submit"
            disabled={errors.email ? true : false}
          >
            далее
          </button>
        </div>
      </form>
      <a>перейти на страницу: </a>
      <Link className={styles.link} href="/password">
        ввести пароль
      </Link>
    </div>
  );
};

export default Email;
