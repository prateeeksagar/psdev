import { InfiniteCarousel } from "./InfiniteCaraousel";

export default function NameSection() {
    return (
        <section className=" flex flex-col">
            <h2 className="text-3xl p-2 font-bold tracking-wide text-shadow-sm">Hi, I am Prateek Sagar</h2>
               <div className=" px-2"> <InfiniteCarousel/></div>
        </section>
    )
}