import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

const posts: PostType[] = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://avatars.githubusercontent.com/u/26902816?v=4',
			name: 'Luara Kerlen',
			role: 'Desenvolvedora Front-end',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2023-02-21 20:00:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://avatars.githubusercontent.com/u/79336444?v=4',
			name: 'Tamires Cristina',
			role: 'Desenvolvedora Front-end',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{
				type: 'paragraph',
				content:
					'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
			},
			{
				type: 'link',
				content: 'jane.design/doctorcare',
			},
		],
		publishedAt: new Date('2023-02-22 16:00:00'),
	},
];

export function App() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post) => {
						return <Post key={post.id} post={post} />;
					})}
				</main>
			</div>
		</div>
	);
}
