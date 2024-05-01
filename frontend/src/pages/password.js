import Head from "next/head";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import useFormPersist from "react-hook-form-persist";

import Heading from "../components/Heading";
import styles from "../styles/App.module.css";

import Link from "next/link";
import { useState } from "react";

import { authorize } from "./api/userapi";

const Password = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
    setError,
  } = useForm();
  const router = useRouter();

  const submit = (data) => {
    console.log(data);
    handleRegister(data);
    reset();
  };

  const handleRegister = (data) => {
    authorize(data.email, data.password)
      .then((res) => {
        window.localStorage.setItem("username", res.username);
        router.push("/");
      })
      .catch((e) => {
        if (e === "Ошибка: 400") {
          setError("password", {
            type: "server",
            message: "Something wrong with user data",
          });
        }
      });
  };

  const error = (data) => {
    console.log(data);
  };

  const [passwordHideButton, setPasswordHideButton] = useState(false);

  const handleButtonChange = () => {
    setPasswordHideButton(!passwordHideButton);
  };

  useFormPersist("form", { watch, setValue });

  return (
    <div>
      <Head>
        <title>Password</title>
      </Head>
      <Heading tag="h2" text="Password-enter-page" />
      <Heading tag="h4" text="Type your password" />
      <form onSubmit={handleSubmit(submit, error)}>
        <div className={styles.input_button_container}>
          <div className={styles.input_container}>
            <input
              className={`${styles.input} ${
                errors.password ? styles.input_error : ""
              }`}
              type={passwordHideButton ? "text" : "password"}
              placeholder="password"
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? true : false}
            />
            <span className={styles.error}>
              {errors.password && <a role="alert">{errors.password.message}</a>}
            </span>
          </div>
          <button
            className={`${styles.button_eye} ${
              passwordHideButton ? styles.button_eye_active : ""
            }`}
            onClick={handleButtonChange}
            type="button"
          ></button>
          <button
            className={styles.button}
            type="submit"
            disabled={errors.password ? true : false}
          >
            отправить
          </button>
        </div>
      </form>
      <a>перейти на страницу: </a>
      <Link className={styles.link} href="/email">
        ввести e-mail
      </Link>
    </div>
  );
};

export default Password;
