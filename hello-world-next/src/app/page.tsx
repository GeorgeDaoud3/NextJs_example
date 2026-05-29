import Link from "next/link";

export default function Home() {
    return (
	<main className="main">
        <div>
            <h1>Hello, World!</h1>
        </div>
		<p/>
		<div>
			<Link href="/posts">
				<a>Posts Page</a>
			</Link>
		</div>
		<div>This is HomePage
			<p>
			Click on this <a href='/page1'><u>Link</u></a> to Go
			<b>/page1</b>
			Route
			</p>
		
			<p>
				Click on this <a href='/page2'><u>Link</u></a> to Go
				<b>/page2</b> Route
			</p>
		
		</div>
	</main>
	);
}
//export default HomePage;