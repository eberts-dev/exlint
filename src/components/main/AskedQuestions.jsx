import AccordionItem from './AccordionItem'
import styles from './AskedQuestions.module.scss'

const AskedQuestions = () => {
	const questions = [
		{
			title: 'What is a policy group run?',
			content: (
				<p className={styles.text}>
					A policy is a set of rules that analyze code. When a set of different policies are run together in a group, Exlint goes through the code and looks for potential errors that match the rules in each policy&nbsp;with a single command.
				</p>
			),
		},
		{
			title: 'Do you require access to source code?',
			content: (
				<p className={styles.text}>
					No, we will never need access to source code. Exlint either runs locally through our CLI, or through your CI/CD Pipeline.
				</p>
			),
		},
		{
			title: 'Is there a public roadmap?',
			content: (
				<p className={styles.text}>
					Yes, right here.
				</p>
			),
		},
		{
			title: 'What support do you provide?',
			content: (
				<p className={styles.text}>
					We offer support via our{' '}
					<a className={styles.link} href="#">
						Discord
					</a>
					,{' '}
					<a className={styles.link} href="#">
						in-app support
					</a>
					, and{' '}
					<a className={styles.link} href="#">
						Github issues
					</a>
					.
				</p>	
			),
		},
		{
			title: 'What languages do you support?',
			content: (
				<p className={styles.text}>
					Exlint is language agnostic. Although we currently mainly support Javascript libraries, we will<br/>support many more libraries from different languages in the future. Stay tuned in our Roadmap!
				</p>
			),
		},
	];
	
	return (

		<div className={styles.asked}>
			<div className={styles.wrapper}>
				<h2 className={styles.title}>Frequently Asked Questions</h2>

					{questions.map((question, index) => (
						<AccordionItem key={index} 
													 title={question.title} 
													 content={question.content}/>
					))}
			</div>
		</div>
	);
}

export default AskedQuestions;
