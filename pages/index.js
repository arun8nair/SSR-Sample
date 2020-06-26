import Link from "next/link";
import Image from "../components/Image";

const Index = () => (
	<div style={{ fontSize: "20px" }}>
		<h1>SSR Home</h1>

        <Link href="/about">
            About
        </Link>
        <Link href="/robots">
            Robots
        </Link>
		<Image />
	</div>
);

export default Index;
