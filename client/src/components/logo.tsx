import Image from "next/image"
import Link from "next/link"
function Logo() {
  return (
    <>
      <Link href={'/'}>
        <div className="hover:opacity-75 transition items-center gap-x-2 md:flex hidden">
          <Image
            height={30}
            width={30}
            src='/logo.svg'
            alt="Logo">

          </Image>
          <p className="text-base text-neutral-700  font-bold">Taskify</p>
        </div>
      </Link>
    </>
  )
}

export default Logo