export const SubscriptionForm = () => {
  return (
    <form action="" className="flex flex-col">
      <label htmlFor="newsletter">Inscreva-se em nossa newsletter</label>
      <input
        type="email"
        id="newsletter"
        name="newsletter"
        placeholder="email@email.com"
        className="rounded-[30px] bg-white py-3 px-5 text-black placeholder:text-border-alt mt-2"
      />
    </form>
  );
};
