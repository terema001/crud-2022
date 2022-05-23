import React from "react";
import { useForm } from "react-hook-form";

export default function Edit() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}  style={{visibility: "hidden"}} {...register("c")}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="aaa" {...register("a")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue="bbb" {...register("b")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
  );
}
