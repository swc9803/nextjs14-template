import styles from "./not-found.module.scss";
import Link from "next/link";

export const metadata = {
	title: "Error",
	description: "Error",
};

const Error = () => {
	return (
		<div className={styles.container}>
			<main>
				<section>
					<Link href="/">
						<button type="button">home</button>
					</Link>
				</section>
			</main>
		</div>
	);
};

export default Error;
