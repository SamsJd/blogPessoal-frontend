import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {

  const data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold">
            Blog Pessoal de Sâmara &copy; {data}
          </p>
          <p className="text-lg">Acesse minhas redes de contato</p>
          <div className="flex gap-2">
            <a href="https://www.linkedin.com/in/samarajdias" target="_blank">
            <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://github.com/SamsJd" target="_blank">
            <GithubLogoIcon size={48} weight="bold" />
            </a>
            {/* <a href="https://www.instagram.com" target="_blank">
            <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://www.facebook.com" target="_blank">
            <FacebookLogoIcon size={48} weight="bold" />
            </a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
