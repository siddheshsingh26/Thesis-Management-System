import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

import { useRouter } from "next/router";

import "../styles/globals.css";
import "flowbite";

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	return (
		<>
			{router.pathname === "/" ? (
				<div>
					<Component {...pageProps} />
				</div>
			) : (
				<div className="mx-[2%] mt-[2%]">
					<Navbar  />
					<div className="flex flex-row">
						<Sidebar />
						<div>
							<Component {...pageProps} />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default MyApp;
