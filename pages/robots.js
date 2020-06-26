import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Robots = ({ robots }) => {
	return (
		<div>
			<h1>Robots</h1>
			<Link href="/">
				<button>Home</button>
			</Link>
			<div>
				{robots.map((robot) => (
					<li key={robot.id}>
						<Link href={`/robots/${robot.id}`}>
							<a>{robot.name}</a>
						</Link>
					</li>
				))}
			</div>
		</div>
	);
};

Robots.getInitialProps = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const data = await res.json();
	console.log("gis", data);
	return {
		robots: data,
	};
};

export default Robots;
