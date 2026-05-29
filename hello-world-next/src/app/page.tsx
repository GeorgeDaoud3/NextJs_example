import Link from "next/link";

interface ClickONProps {
  page: string;
}

const ClickON = (props : ClickONProps) => {
	return 	(
		<p>
		Click on this 
		<a href='{props.page}'>
			<u> Link </u>
		</a> 
		 to Go
		<b> {props.page} </b> 
		 Route
		</p>
		);
}
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
		<ClickON page="/page1" />
		<ClickON page="/page2" />
		</div>
	</main>
	);
}
//export default HomePage;