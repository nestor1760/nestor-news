import User from "./(dashboard)/user/page";

export default async function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col w-full">
      <User />
    </div>
  );
}
