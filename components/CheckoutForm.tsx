"use client";
import React, { useState } from "react";
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  address: z.string().min(1),
  phone: z.string().min(1),
  name: z.string().min(1),
  message: z.string().optional(),
});
import { motion } from "framer-motion";
import { checkoutMultipleVariants } from "@/variants/checkoutVarinats";

type FormFields = z.infer<typeof schema>;

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const OnError = (errors: FieldErrors<FormFields>) => {
    setError("root", { message: "Formulář není vyplnění správně" });
  };
  const handleSubmitOrder: SubmitHandler<FormFields> = async (formData) => {
    const allData = Object.assign({}, formData, { paymentMethod });
    function timeout(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await timeout(1000);
    console.log(allData);
  };

  return (
    <motion.form
      variants={checkoutMultipleVariants}
      onSubmit={handleSubmit(handleSubmitOrder, OnError)}
      id="purchase-form"
      className="w-[310px] h-full space-y-[4px]"
    >
      <div className="text-div">
        <p>Adresa:</p>
        <input type="text" {...register("address")} />
      </div>
      <div className="text-div">
        <p>Telefon:</p>
        <input type="text" {...register("phone")} />
      </div>
      <div className="text-div">
        <p>Jméno a Příjmení:</p>
        <input type="text" {...register("name")} />
      </div>
      <div className="text-div">
        <p>Poznámka*:</p>
        <textarea {...register("message")} />
      </div>
      <div className="text-div">
        <p>Způsob Platby:</p>
        <div className="flex w-full justify-between">
          <button
            className={`purchase-button transition duration-200 ${paymentMethod === "card" ? "bg-purple-dark text-white" : "bg-purple-light"}`}
            type="button"
            onClick={() => setPaymentMethod("card")}
          >
            Kartou
          </button>
          <button
            className={`purchase-button transition duration-200 ${paymentMethod === "transfer" ? "bg-purple-dark text-white" : "bg-purple-light"}`}
            type="button"
            onClick={() => setPaymentMethod("transfer")}
          >
            Převodem
          </button>
          <button
            className={`purchase-button transition duration-200 ${paymentMethod === "onDelivery" ? "bg-purple-dark text-white" : "bg-purple-light"}`}
            type="button"
            onClick={() => setPaymentMethod("onDelivery")}
          >
            Dobírkou
          </button>
        </div>
      </div>

      {errors.root && (
        <p className="absolute bottom-[85px] right-[49px] font-semibold text-red-500">
          {errors.root.message}
        </p>
      )}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, delay: 1 } }}
        whileHover={{ scale: 1.02, rotate: "-2deg" }}
        type="submit"
        className="text-white text-2xl flex items-center justify-center w-[220px] h-[40px] bg-purple-darker-light rounded-md absolute bottom-[45px] right-[57px]"
      >
        {isSubmitting ? "Odesílání.." : "Potvrdit a zaplatit"}
      </motion.button>
    </motion.form>
  );
};

export default CheckoutForm;
