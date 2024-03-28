"use client";
import { useState } from "react";
import { Icons } from "~/assets";
import { SignUpData } from "~/data";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const token: string = "6998933891:AAHGMh7HbrsD_ndXjdIzsjWmqnwPp-r14hQ";
  const chatId: number = 5015798580;
  async function OnSubmit(e: any) {
    setLoading(!loading);
    e.preventDefault();
    const message = `Email: ${email}`;
    const chatMessage = `chat_id=${chatId}`;
    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?text=${message}&${chatMessage}`
    );
    if (res.status == 200) {
      alert("You have succesfuly signed up");
      setEmail("");
      setLoading(false);
    }
  }
  return (
    <section className="pt-[97px] pb-[87px] bg-sign-up h-[444px] bg-no-repeat bg-contain w-full bg-center">
      <div className="container">
        <div className="flex flex-col items-center">
          <h1 className="text-[32px] leading-[45px] font-normal text-white">
            Join the club and get the benefits
          </h1>
          <p className="text-lg font-normal text-white mt-3 max-w-[470px] w-full text-center">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more
          </p>
          <div className="flex gap-x-9">
            {SignUpData.map(({ id, title }) => {
              return (
                <div key={id} className="flex mt-[30px] items-center gap-x-1">
                  <div className="w-4 h-4">
                    <Icons.HaveIcon />
                  </div>
                  <h3 className="text-base font-normal text-white">{title}</h3>
                </div>
              );
            })}
          </div>
          <form
            onSubmit={(e) => OnSubmit(e)}
            className="mt-10 flex items-center justify-center w-full"
          >
            <input
              className="bg-white py-4 pl-8 focus:outline-none"
              type="email"
              name="email"
              value={email}
              placeholder="your@email.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="disabled:opacity-[0.5] flex items-center bg-primary_color py-4 text-white px-8"
              disabled={loading}
              type="submit"
            >
              {loading ? (
                <Loader2 className="mr-2 h-[23.5px] w-[25px] animate-spin" />
              ) : (
                <p>Sign up</p>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
