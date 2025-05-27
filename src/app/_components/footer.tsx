import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="flex flex-col justify-center lg:flex-row items-center py-4">
          <h3 className="text-3xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left lg:mb-0 lg:pr-4">
            Timothy Lim
          </h3>
          <p> © 2025 All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
