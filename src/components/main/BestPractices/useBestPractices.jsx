import { useModal } from '@/hooks/useModal';

export const useBestPractices = () => {
	const { isModalOpen, openModal, closeModal } = useModal();
	const installCommand = 'npm install --global @exlint.io/cli';
	const heroContent = {
		title: ['Empower efficient', 'conventional best practices'],
		description: 'Run your first complance check in a matter of minutes',
		getStarted: 'Get started for free today.',
	};

	return {
		heroContent,
		isModalOpen,
		openModal,
		installCommand,
		closeModal,
	};
};
