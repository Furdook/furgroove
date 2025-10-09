import preview1 from "/images/preview/preview-1.webp";
import preview2 from "/images/preview/preview-2.webp";
import preview3 from "/images/preview/preview-3.webp";
import preview4 from "/images/preview/preview-4.webp";

export default function Impressions() {
	return (
		<div>
			<section className="flex items-center pb-6 md:p-4">
				<h2 className="text-accent-yellow text-2xl uppercase max-md:pl-4">
					Impressions
				</h2>
				<p className="ml-auto opacity-50">Photos by&nbsp;</p>
				<a
					className="opacity-50 transition-opacity duration-200 hover:opacity-100"
					href="https://gorgophotos.nl"
					rel="noreferrer"
					target="_blank"
				>
					gorgophotos.nl
				</a>
			</section>
			<div className="grid gap-2 md:gap-4 md:pr-4">
				<div className="flex gap-2 max-md:flex-col md:gap-4">
					<img
						src={preview1}
						alt="Preview 1"
						width={672}
						height={520}
						className="w-full rounded-xl md:w-2/3 md:rounded-2xl"
					/>
					<img
						src={preview2}
						alt="Preview 1"
						width={336}
						height={520}
						className="w-full rounded-xl md:w-1/3 md:rounded-2xl"
					/>
				</div>
				<div className="flex gap-2 max-md:flex-col md:gap-4">
					<img
						src={preview3}
						alt="Preview 1"
						width={336}
						height={520}
						className="w-full rounded-xl md:w-1/3 md:rounded-2xl"
					/>
					<img
						src={preview4}
						alt="Preview 1"
						width={672}
						height={520}
						className="w-full rounded-xl md:w-2/3 md:rounded-2xl"
					/>
				</div>
			</div>
		</div>
	);
}
