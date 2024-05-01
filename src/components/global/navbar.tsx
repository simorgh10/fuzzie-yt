import Image from "next/image"
import Link from "next/link"

type NavbarProps = {

}

const Navbar = async (props: NavbarProps) => {
  return (
    <header className="fixed right-0 left-0 top-0 flex items-center justify-between px-4 py-4
    bg-black/40 backdrop-blur-lg z-[100] border-b-[1px] border-neutral-900 justify-between">
        <aside className="flex items-center gap-[2px]">
            <p className="font-bold text-3xl">Fu</p>
            <Image
            src={"/fuzzieLogo.png"}
            alt={"fuzzie logo"}
            width={15}
            height={15}
            className="shadow-sm"
            />
            <p className="font-bold text-3xl">zie</p>
        </aside>
        <nav className="absolute
        left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
        hidden md:block">
            <ul className="flex items gap-4 list-none">
                <li>
                    <Link href={"#"}>Products</Link>
                </li>
                <li>
                    <Link href={"#"}>Pricing</Link>
                </li>
                <li>
                    <Link href={"#"}>Clients</Link>
                </li>
                <li>
                    <Link href={"#"}>Resources</Link>
                </li>
                <li>
                    <Link href={"#"}>Documentation</Link>
                </li>
                <li>
                    <Link href={"#"}>Enterprise</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar