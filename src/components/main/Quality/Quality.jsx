import title from '@components/layout/Header/Header.module.scss';
import Btn from '@ui/Btn/Btn';
import styles from './Quality.module.scss';

const Quality = ({
	titleStart = "Don't settle on quality,",
	titleEnd = 'enforce clean code.',
}) => {
	const FEATURES = [
		'Unlimited policy group runs',
		'Open Source CLI',
		'GitHub Action CI/CD',
	];

	return (
		<>
			<div className={styles.quality}>
				<h2 className={title.title}>
					{titleStart}
					<br />
					<span>{titleEnd}</span>
				</h2>
				<div className={styles.wrapper}>
					<div className={styles.container}>
						<p className={styles.title}>
							Open Source <span>Free</span>
						</p>
						<div className={styles.wrapper}>
							<div className={styles.description}>
								Best for individual developers and teams
							</div>

							<ul className={styles.featuresList}>
								{FEATURES.map((feature, index) => (
									<li key={index} className={styles.featureItem}>
										{feature}
									</li>
								))}
							</ul>
						</div>
						<Btn>View Docs</Btn>
					</div>
				</div>
			</div>
		</>
	);
};

export default Quality;
