import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "@/components/layout/footer.tsx";
import Navigation from "@/components/layout/navigation.tsx";

export default function DefaultLayout() {
	const location = useLocation();

	useLayoutEffect(() => {
		window.scrollTo({ top: 0, behavior: "instant" });
	}, [location.pathname]);

	return (
		<>
			<Navigation />
			<Outlet />
			<Footer />
		</>
	);
}
