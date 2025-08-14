import { EnvVarWarning } from "@/components/env-var-warning"
import { AuthButton } from "@/components/auth-button"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { hasEnvVars } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center ">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Image src="/icono.svg" width={100} height={100} alt="Golden Rule Cargo LLC" priority className={`dark:bg-white`} />

              <Link href={"/about"}>Golden Rulle Cargo LLC</Link>
              <div className="flex items-center gap-2">

              </div>
            </div>
            {!hasEnvVars? <EnvVarWarning />:<AuthButton />}
          </div>
        </nav>
        <div className="flex-1 flex flex-row gap-20 max-w-5xl p-5 items-center">

          <Image src="/icono.png" width={200} height={200} alt="Golden Rule Cargo LLC" priority className={`dark:bg-white`} />

          <p className="text-sm italic font-luxury">
            En Golden Rule Cargo, somos una empresa de transporte comprometida con brindar un servicio confiable, eficiente y humano. Nuestro nombre nace de la “Regla de Oro”: tratar a los demás como queremos ser tratados. Esta filosofía guía cada entrega, cada llamada y cada relación que construimos.

            Operamos con base en valores sólidos: respeto, honestidad, transparencia y compromiso familiar. Nos esforzamos por crear conexiones reales con nuestros clientes y aliados, brindando un trato cercano, claro y justo en todo momento.

            Amamos lo que hacemos y creemos en el poder de trabajar con propósito. Por eso, cuidamos cada detalle y nos enfocamos en ofrecer soluciones de calidad que realmente aporten valor.

            En Golden Rule Cargo, no solo movemos cargas. Construimos confianza, cuidamos relaciones y entregamos con excelencia.
          </p>
        </div>


        <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
          <p>
            Powered by{" "}
            <a
              href="#"
              target="_blank"
              className="font-bold hover:underline"
              rel="noreferrer"
            >
              Golden Rule Cargo LLC
            </a>
          </p>
          <ThemeSwitcher />
        </footer>
      </div>
    </main>
  )
}
