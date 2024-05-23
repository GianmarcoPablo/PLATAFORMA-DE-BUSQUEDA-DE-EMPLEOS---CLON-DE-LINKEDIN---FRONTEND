import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className='container mx-auto py-4'>
            <nav className="flex justify-end gap-5 items-center">
                <Button variant={"outline"} asChild>
                    <Link href="/">Iniciar session</Link>
                </Button>
                <Button asChild>
                    <Link className="bg-rose-700 px-2 py-1 rounded-lg text-white font-semibold hover:bg-white hover:text-black hover:transition-colors hover:border-rose-700" href="/">Registrase</Link>
                </Button>
            </nav>
        </header>
    )
}
