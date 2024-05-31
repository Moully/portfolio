import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="flex place-content-between items-center w-[100%] my-[10px]">
            <div className="block">
                <Link href={"/"}>
                    <p className="text-[24px]">Moully</p>
                </Link>
            </div>
            <div className="block gap-[20px]">
                <div className="flex gap-[20px] hidden sm:flex items-center">
                    <Link href={"#Aboutme"}>
                        <p>About</p>
                    </Link>
                    <Link href='#Projects'>
                        <p>Projects</p>
                    </Link>
                    <Link href={"#Aboutme"}>
                        <p>Skills</p>
                    </Link>
                    <Link href={"#Contact"}>
                        <p>Contact</p>
                    </Link>
                    <Link href={"#Testimonials"}>
                        <p>Testimonials</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}