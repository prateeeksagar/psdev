import { InfiniteCarousel } from "./InfiniteCaraousel";

export default function NameSection() {
    return (
        <section className=" flex flex-col">
            <h2 className="text-3xl p-2 font-semibold tracking-tight">Hi, I am Prateek Sagar</h2>
            {/* <span className="border-t px-2 text-xl font-semibold text-muted-foreground"> */}
               <div className=" px-2"> <InfiniteCarousel/></div>
            {/* </span> */}
        </section>
    )
}