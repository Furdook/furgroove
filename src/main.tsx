import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

import DefaultLayout from "@/layouts/default-layout.tsx";
import Home from "@/pages";
import About from "@/pages/about";
import CodeOfConduct from "@/pages/about/code-of-conduct.tsx";
import Archive from "@/pages/archive";
import JanuaryEdition2026 from "@/pages/event/january-edition-2026.tsx";
import Gallery from "@/pages/gallery";
import NotFound from "@/pages/not-found";

// biome-ignore lint/style/noNonNullAssertion: default React boilerplate
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<DefaultLayout />}>
					<Route index element={<Home />} />
					<Route path="gallery" element={<Gallery />} />
					<Route path="about">
						<Route index element={<About />} />
						<Route path="code-of-conduct" element={<CodeOfConduct />} />
					</Route>
					<Route path="event">
						<Route
							path="january-edition-2026"
							element={<JanuaryEdition2026 />}
						/>
					</Route>
					<Route path="archive">
						<Route index element={<Archive />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
