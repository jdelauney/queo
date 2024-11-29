import { Button } from '@queo/react';
import { Circle, Loader2, Trash, User } from 'lucide-react';

function App() {
	return (
		<>
			<Button size="sm">Hello world</Button>
			<Button size="md">Hello world</Button>
			<Button size="lg">Hello world</Button>

			<Button variant="primary">Hello world</Button>
			<Button variant="secondary">Hello world</Button>
			<Button variant="outline">Hello world</Button>
			<Button variant="ghost">Hello world</Button>
			<Button variant="danger">Hello world</Button>

			<Button icon={<User />}>User Settings</Button>
			<Button icon={<User />} iconRight={<Trash />}>
				User Settings
			</Button>

			<Button iconRight={<User />}>User Settings</Button>

			<Button loading loadingIcon={<Loader2 className="animate-spin" />}>
				User Settings
			</Button>
			<Button loading loadingPosition="left" loadingIcon={<Loader2 className="animate-spin" />}>
				User Settings
			</Button>
			<Button loading loadingPosition="center" loadingIcon={<Loader2 className="animate-spin" />}></Button>
			<Button disabled>User Settings</Button>
			<Button loading loadingPosition="center" loadingIcon={<Circle className="animate-pulse" />}></Button>
			<Button
				loading
				loadingPosition="center"
				variant="outline"
				loadingIcon={<Circle className="animate-bounce" />}
			></Button>
		</>
	);
}

export default App;
