import React from "react";
import { useForm } from "react-hook-form";

export default function AddPost() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function formosPatvirtinimas(data){
    console.log(data);
  }
  
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(formosPatvirtinimas)}>

      <input defaultValue="Pavadinimas" {...register("title", { required: true })} />
      {errors.title && <p>This field is required</p>} 

      <input defaultValue="Aprašymas" {...register("body", { required: true })} /> 
      {errors.body && <p>This field is required</p>} 
      
      <input type="submit" />
    </form>
  );
}